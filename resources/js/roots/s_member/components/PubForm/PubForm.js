import React, { Component } from 'react';
import { Editor, EditorState,  RichUtils, AtomicBlockUtils ,ContentState,convertFromHTML } from 'draft-js';
import '../../../../../../node_modules/draft-js/dist/Draft.css';
import { stateToHTML } from "draft-js-export-html";
import ColorPicker, { colorPickerPlugin } from 'draft-js-color-picker';
import { COLORS } from '../../utils';
import axios from 'axios';

import {
        InlineStyleControls,
        HeadingControls,
        OrderedListControls,
        ParagraphControls,
        MarkdownControls,
        ArtworkControls,
        mediaBlockRenderer 
} from '../../components/RichEditor';

import {  getBlockStyle } from '../../components/SmartEditor/SmartEditor';
import { msgSuccess } from '../../../global/Msg';

class PubForm extends Component {
        constructor(props){  
                super(props);   

                this.state = { 
                        collection: [], pub_title: '',  pub_subtitle: '', pub_body:'', pub_tags:'',  pub_picture:'', pub_category:'', pub_color:'#ffffff', pub_url:'', pub_changes: false, pub_picture_view:'', pub_picture_caption:false, errors: [], 
                        is_loading_pub: false, is_loading_draft:false, msg_publication:false, msg_draft:false,  msg_animation:false,  word_counter:0, editorState: EditorState.createEmpty(), 
                        pub_picture_upload_artwork:'../../../images/member/publication/upload-file.png'
                }

                this.getFormData = this.getFormData.bind(this);
                this.getFormPicture = this.getFormPicture.bind(this);
                this.getFormCategory= this.getFormCategory.bind(this);
                this.createNewPublication = this.createNewPublication.bind(this);
                this.updatePublication = this.updatePublication.bind(this);
                this.saveDraft = this.saveDraft.bind(this);
                this.handleKeyCommand = this._handleKeyCommand.bind(this);
                this.toggleBlockType = this._toggleBlockType.bind(this);
                this.toggleInlineStyle = this._toggleInlineStyle.bind(this);
                this.onAddImage = this.onAddImage.bind(this);

                this.focus = () => this.refs.editor.focus();

                this.onChange = (editorState) =>{  
                        const inlineStyles = this.picker.exporter(editorState);

                        const format_text = stateToHTML(this.state.editorState.getCurrentContent(), { inlineStyles });

                        this.setState({   
                                editorState,
                                pub_body: format_text ,
                                word_counter: editorState.getCurrentContent().getPlainText('\u0001').replace(/\s/g, "").length,  
                                pub_changes:true,
                          }); 
                }

                this.getEditorState = () => this.state.editorState;
                this.picker = colorPickerPlugin(this.onChange , this.getEditorState);
        }

        _handleKeyCommand(command, editorState) {
                const newState = RichUtils.handleKeyCommand(editorState, command);

                if (newState) {
                      this.onChange(newState);
                      return true;
                }
                      return false;
        }
      
        _toggleBlockType(blockType) {
                this.onChange( RichUtils.toggleBlockType(  this.state.editorState, blockType) );
        }
      
        _toggleInlineStyle(inlineStyle) {
                this.onChange( RichUtils.toggleInlineStyle( this.state.editorState, inlineStyle  )   );
       } 

       onAddImage(e,artworker) {
                e.preventDefault();
                const editorState = this.state.editorState;
                const contentState = editorState.getCurrentContent();
                const contentStateWithEntity = contentState.createEntity(  "image", "IMMUTABLE",  { src:artworker }  );
                const entityKey = contentStateWithEntity.getLastCreatedEntityKey();

                const newEditorState = EditorState.set(  editorState,  { currentContent: contentStateWithEntity }, "create-entity" );

                this.setState(  {  editorState: AtomicBlockUtils.insertAtomicBlock(newEditorState,  entityKey,  " ")  },

                () => {    setTimeout(() => this.focus(), 0);    } );
        };

        /*
        =======================
         Get pub form content
        =======================
        */
        getFormData(e){
                e.preventDefault();

                const name = e.target.name;
                const value = e.target.value;

                this.setState({  [name] : value,  pub_changes:true})
        }

        /*
        =======================
         Get form pub picture
        =======================
        */
        getFormPicture(e){
                if(this.props.pubStatus == 'new-pub'){
                        this.setState({  
                                pub_picture:e.target.files[0],
                                pub_picture_view: URL.createObjectURL(e.target.files[0]),
                        })     
                }

                if(this.props.pubStatus == 'edit-pub'){
                        this.setState({ 
                                pub_picture:e.target.files[0], 
                                pub_picture_view: URL.createObjectURL(e.target.files[0]),
                                pub_changes:true,
                                pub_picture_caption: true,
                        })
                }
        }

        /*
        =======================
         Get form category
        =======================
        */
        getFormCategory(e) {  
                this.setState({ 
                        pub_category: e.target.value, 
                        pub_changes:true 
                }) 
        }

        /*
        =======================
         Create new publication
        =======================
        */
        createNewPublication(e){
                e.preventDefault();

                const formData = new FormData();

                this.setState({ is_loading_pub: true })

                formData.append('pub_picture', this.state.pub_picture);
                formData.append('pub_title', this.state.pub_title);
                formData.append('pub_subtitle', this.state.pub_subtitle);
                formData.append('pub_body', this.state.pub_body);
                formData.append('pub_tags', this.state.pub_tags);
                formData.append('pub_color', this.state.pub_color);

                if(this.props.pubType == 'review'){
                        formData.append('pub_category', this.state.pub_category);
                }

                axios.post(`/api/member/new-${this.props.pubType}/create-${this.props.pubType}`, formData)

                .then(response => {
                        if (!response.error) {   
                                 this.setState({ 
                                        pub_title:'', pub_subtitle:'', pub_body: '', pub_tags:'', pub_picture:'', pub_category:'', pub_color:'#ffffff', pub_picture_view:'', 
                                        errors:[], is_loading_pub: false, msg_publication:true, word_counter:0, editorState: EditorState.createEmpty(), 
                                }) 
                                
                                setTimeout(function(){ this.setState({ msg_animation:true }); }.bind(this),5000);

                                setTimeout(function(){ this.setState({ msg_publication:false, msg_animation:false }); }.bind(this), 5500);
                        }
                })
                .catch(error => {  this.setState({ errors: error.response.data.errors, is_loading_pub: false}) })
        }

        /*
        ==========================
         Create new publication draft
        ==========================
        */
        updatePublication(e,pub_url){
                e.preventDefault();

                const formData = new FormData();

                this.setState({ is_loading_pub: true })

                formData.append('pub_picture', this.state.pub_picture);
                formData.append('pub_title', this.state.pub_title);
                formData.append('pub_subtitle', this.state.pub_subtitle);
                formData.append('pub_body', this.state.pub_body);
                formData.append('pub_tags', this.state.pub_tags);
                formData.append('pub_color', this.state.pub_color);

                if(this.props.pubType == 'review'){
                        formData.append('pub_category', this.state.pub_category);
                }

                axios.post(`/api/member/${this.props.pubType}s/edit/update-${this.props.pubType}/${pub_url}`, formData)
                
                .then(response => {
                        if (!response.error) {   
                                this.setState({ 
                                        is_loading_pub: false, 
                                        msg_publication:true, 
                                        pub_changes:false,
                                        pub_picture_caption: false,
                                        errors:[]
                                }) 
                                
                                setTimeout(function(){ this.setState({ msg_animation:true }); }.bind(this),5000);

                                setTimeout(function(){ this.setState({ msg_publication:false, msg_animation:false }); }.bind(this), 5500);
                        }
                })
                .catch(error => {  
                        this.setState({ errors: error.response.data.errors, is_loading_pub: false})
                })
        }

        /*
        ==========================
         Create new publication draft
        ==========================
        */
        saveDraft(e, pub_url){
                e.preventDefault();

                const formData = new FormData();

                this.setState({ is_loading_draft: true })

                formData.append('pub_picture', this.state.pub_picture);
                formData.append('pub_title', this.state.pub_title);
                formData.append('pub_subtitle', this.state.pub_subtitle);
                formData.append('pub_body', this.state.pub_body);
                formData.append('pub_tags', this.state.pub_tags);
                formData.append('pub_color', this.state.pub_color);

                if(this.props.pubType == 'review'){
                        formData.append('pub_category', this.state.pub_category);
                }

                if(this.props.pubStatus == 'new-pub'){
                        axios.post(`/api/member/new-${this.props.pubType}/draft-${this.props.pubType}`, formData)

                        .then(response => {
                                if (!response.error) {   
                                        this.setState({ 
                                                pub_title:'', pub_subtitle:'', pub_body: '', pub_tags:'', pub_category:'', pub_color:'#ffffff', pub_picture:'', pub_picture_view:'', 
                                                errors:[], is_loading_draft: false, msg_draft:true, word_counter:0, editorState: EditorState.createEmpty(), 
                                        }) 
        
                                        setTimeout(function(){ this.setState({ msg_animation:true }); }.bind(this),5000);
        
                                        setTimeout(function(){ this.setState({ msg_draft:false, msg_animation:false }); }.bind(this), 5500);
                                }
                        })
        
                        .catch(error => {  this.setState({ errors: error.response.data.errors, is_loading_draft: false}) })
                }

                if(this.props.pubStatus == 'draft-pub'){
                        axios.post(`/api/member/drafts/draft-${this.props.pubType}/${pub_url}`, formData)

                        .then(response => {
                                if (!response.error) {   
                                        this.setState({ 
                                                is_loading_draft: false, 
                                                msg_draft:true, 
                                                pub_picture_caption: false,
                                                errors:[]
                                        }) 
                
                                        setTimeout(function(){ this.setState({ msg_animation:true }); }.bind(this),5000);
                
                                        setTimeout(function(){ this.setState({ msg_draft:false, msg_animation:false }); }.bind(this), 5500);
                                }
                        })
                
                         .catch(error => {  this.setState({ errors: error.response.data.errors, is_loading_draft: false}) })
                }
        }

        /*
        ==========================
         Get single publication data
        ==========================
        */
        componentDidMount() {
                if(this.props.pubStatus == 'edit-pub'){
                        axios.get(`/api/member/${this.props.pubType}s/edit/${this.props.pub_url}`).then(response => { 
                                const blocksFromHTML = convertFromHTML(response.data.pub_body);
                                const content = ContentState.createFromBlockArray(
                                blocksFromHTML.contentBlocks,
                                blocksFromHTML.entityMap   );

                                this.setState({ 
                                        collection: response.data, 
                                        pub_picture: response.data.pub_picture,
                                        pub_url: response.data.pub_url,
                                        pub_title: response.data.pub_title,
                                        pub_subtitle: response.data.pub_subtitle,
                                        pub_body: EditorState.createWithContent(content),
                                        pub_tags:response.data.pub_tags,
                                        pub_category:response.data.pub_category,
                                        pub_color:response.data.pub_color,
                                        editorState: EditorState.createWithContent(content),
                                        word_counter:  response.data.pub_body.replace(/\s/g, "").length 
                                }); 
                        });
                }

                if(this.props.pubStatus == 'draft-pub'){
                        axios.get(`/api/member/${this.props.pubType}s/draft/${this.props.pub_url}`).then(response => { 
                                if(response.data.pub_body != null){
                                        const blocksFromHTML = convertFromHTML(response.data.pub_body);
                                        const content = ContentState.createFromBlockArray(
                                        blocksFromHTML.contentBlocks,
                                        blocksFromHTML.entityMap   );

                                        this.setState({ 
                                                collection: response.data, 
                                                pub_title: response.data.pub_title,
                                                pub_subtitle: response.data.pub_subtitle,
                                                pub_body: EditorState.createWithContent(content),
                                                pub_tags:response.data.pub_tags,
                                                pub_picture: response.data.pub_picture,
                                                pub_category:response.data.pub_category,
                                                editorState:EditorState.createWithContent(content),
                                                pub_color:response.data.pub_color,
                                                word_counter:  response.data.pub_body.replace(/\s/g, "").length 
                                        });       
                                }                              
                
                                else{
                                        this.setState({ 
                                                collection: response.data, 
                                                pub_title: response.data.pub_title,
                                                pub_subtitle: response.data.pub_subtitle,
                                                pub_body: response.data.pub_body,
                                                pub_tags:response.data.pub_tags,
                                                pub_picture: response.data.pub_picture,
                                                pub_category:response.data.pub_category,
                                                pub_color:response.data.pub_color
                                        }); 
                                }
                        });
                }
        }      

        render(){
                const { pub_title, pub_subtitle, pub_picture, pub_tags, pub_category, pub_url, pub_color, pub_picture_view, errors, is_loading_pub, is_loading_draft, 
                        pub_picture_upload_artwork, pub_picture_caption, word_counter, msg_publication, msg_draft, msg_animation, editorState,pub_changes} = this.state

                const getPubDescryption = { messageAnimate: msg_animation, messageArtwork: '../images/member/global/successIcon.png', messageDescryption: 'Artykuł został utworzony.' }

                const getNewDraftMesssage = { messageAnimate: msg_animation, messageArtwork: '../images/member/global/successIcon.png', messageDescryption: 'Wersja robocza została utworzona.' }

                const getEditPubMessage = { messageAnimate: msg_animation, messageArtwork: '../../../images/member/global/successIcon.png', messageDescryption: 'Artykuł został zaaktualizowany.' }

                const getSaveDraftMessage = { messageAnimate: msg_animation, messageArtwork: '../../../images/member/global/successIcon.png', messageDescryption: 'Wersja robocza została zapisana.' }


                return(
                <>
                        { (msg_publication && this.props.pubStatus == 'new-pub') &&    msgSuccess(getPubDescryption)    }  

                        { (msg_publication && this.props.pubStatus == 'edit-pub') &&     msgSuccess(getEditPubMessage)     }      

                        { (msg_draft  && this.props.pubStatus == 'new-pub') &&    msgSuccess(getNewDraftMesssage)  }      

                        { (msg_draft  && this.props.pubStatus == 'draft-pub') &&     msgSuccess(getSaveDraftMessage)  }    

                        <section className={`${this.props.pubStyle} ${this.props.pubStyle}_theme`}>
                                <div className={`${this.props.pubStyle}__block`}>
                                        {  /*--- N project > Block > Inner  ---*/   }
                                        <div className={`${this.props.pubStyle}__inner`}>
                                                {  /*--- N project > Block > Inner > Form  ---*/   }
                                                <form  name={`${this.props.pubStyle}__form`} className={`${this.props.pubStyle}__form`} method="POST" onSubmit={ this.props.pubStatus == 'new-pub' ? this.createNewPublication : (e) => this.updatePublication(e,pub_url) } files="false" encType="multipart/form-data"> 
                                                        {  /*--- N project > Block > Inner > Form > Content ---*/   }
                                                        <div className={`${this.props.pubStyle}__form-content`}>
                                                                <div className={`${this.props.pubStyle}__form-content-field ${this.props.pubStyle}__form-content-field--inline`}>
                                                                        <div>
                                                                                <input name="pub_title" type="text"  className={`form__input form__input_effect ${ errors[`pub_title`] ? 'form__input-error' : ''}`}  onChange={ this.getFormData } value={ pub_title || '' } placeholder={  this.props.pubType == 'review'  ? `Tytuł recenzji`: `Tytuł projektu` } maxLength="254"/>
                                                                                
                                                                                { errors[`pub_title`] &&  <div className="form__alert-error form__alert-error_effect form--text"> {errors[`pub_title`] } </div> }                                                
                                                                        </div>

                                                                        <div>
                                                                                <input name="pub_tags"  type="text"  className={`form__input form__input_effect ${ errors["pub_tags"] ? 'form__input-error' : ''}`}  onChange={ this.getFormData } value={ pub_tags || '' } placeholder={ this.props.pubType == 'review'  ? `Tagi recenzji` : `Tagi projektu` } maxLength="254"  />
                                                                                
                                                                                { errors["pub_tags"] &&  <div className="form__alert-error form__alert-error_effect form--text"> { errors["pub_tags"] } </div> }                                                
                                                                        </div>
                                                                </div>

                                                                <div className={`${this.props.pubStyle}__form-content-field ${this.props.pubStyle}__form-content-field--inline`}>
                                                                        <div>
                                                                                <input name="pub_subtitle" type="text"  className={`form__input form__input_effect ${ errors["pub_subtitle"] ? 'form__input-error' : ''}`} onChange={  this.getFormData } value={ pub_subtitle || '' } placeholder={ this.props.pubType == 'review'  ? `Podtytuł recenzji` : `Podtytuł projektu`} maxLength="254"  />
                                                                
                                                                                { errors["pub_subtitle"] &&  <div className="form__alert-error form__alert-error_effect  form--text"> { errors["pub_subtitle"] } </div> }
                                                                        </div>

                                                                        <div>
                                                                                <input name="pub_color"  type="text"  className={`form__input form__input_effect ${ errors["pub_color"] ? 'form__input-error' : ''}`}  onChange={ this.getFormData } value={ pub_color } placeholder={ this.props.pubType == 'review'  ? `Kolor recenzji` : `Kolor projektu` } maxLength="254"  />

                                                                                <div className="pub_color-picker" style={{ backgroundColor: pub_color }}></div>
                                                                                
                                                                                { errors["pub_color"] &&  <div className="form__alert-error form__alert-error_effect form--text"> { errors["pub_color"] } </div> }                                                
                                                                        </div>
                                                                </div>

                                                                <div className="n-project__smarteditor n-project__smarteditor_modifier">
                                                                        <div className="n-project__smarteditor-fun n-project__smarteditor-fun_modifier">
                                                                                <InlineStyleControls editorState={editorState} onToggle={this.toggleInlineStyle} />
                                                                                <HeadingControls editorState={editorState}  onToggle={this.toggleBlockType} />
                                                                                <OrderedListControls editorState={editorState} onToggle={this.toggleBlockType } />
                                                                                <ParagraphControls editorState={editorState} onToggle={this.toggleBlockType }   /> 
                                                                                <MarkdownControls editorState={editorState}  onToggle={this.toggleBlockType} />
                                                                                <ArtworkControls editorState={editorState} onAddImage={this.onAddImage }  />
                                                                                <ColorPicker  toggleColor={color => this.picker.addColor(color)} color={this.picker.currentColor(editorState)} />
                                                                        </div>

                                                                        <div className="n-project__smarteditor-body">
                                                                                <Editor customStyleFn={this.picker.customStyleFn} blockStyleFn={ getBlockStyle } editorState={ editorState } handleKeyCommand={ this.handleKeyCommand } 
                                                                                onChange={this.onChange }  placeholder={this.props.pubType == 'review' ? 'Treść recenzji' : 'Treść projektu'}  blockRendererFn={ mediaBlockRenderer }  
                                                                                plugins={ this.plugins }  customStyleMap= {COLORS} ref="editor" />   
                                                                        </div>

                                                                        <div className="n-project__smarteditor-toolbar">
                                                                                <p className="n-project__smarteditor-toolbar--counter">Liczba znaków: <strong>{word_counter}</strong> </p>
                                                                        </div>
                                                                        
                                                                        { errors["pub_body"] &&  <div className="form__alert-error form__alert-error_effect  form--text"> { errors["pub_body"] } </div> }
                                                                </div>
                                                        </div>

                                                        {  /*--- N project > Block > Inner > Form > Picture  ---*/   }
                                                        <div className={`${this.props.pubStyle}__form-picture ${this.props.pubStyle}__form-picture_modifier`}>
                                                                <header className={`${this.props.pubStyle}__form-picture-header ${this.props.pubStyle}__form-picture-header_modifier`}>
                                                                        <h2 className={`${this.props.pubStyle}__form-picture-header--title`}>Obraz  { this.props.pubType == 'review'  ?  'recenzji': 'projektu' }  </h2>
                                                                </header>

                                                                <div className={`${this.props.pubStyle}__form-picture-inner`}>
                                                                        { this.props.pubStatus == 'new-pub' ?
                                                                        <label htmlFor="pub_picture" className={`${this.props.pubStyle}__form-picture-inner-space ${ pub_picture  ? 'pub-selected' : 'no-selected' }`}>
                                                                                <img src={`${ pub_picture  ?  pub_picture_view  : pub_picture_upload_artwork }`} width="85" height="85" alt={`${this.props.pubType == 'review'  ?  'Załaduj obraz recenzji': 'Załaduj obraz projektu'}`} />

                                                                                <p className={`${this.props.pubStyle}__form-picture-inner-space--desc`}> {pub_picture  ? 'Wybrano obraz' : (this.props.pubType == 'review'  ?  'Załaduj obraz recenzji': 'Załaduj obraz projektu') }  </p>
                                                                        </label> : ''  }

                                                                        { this.props.pubStatus == 'edit-pub' ?
                                                                        <label htmlFor="pub_picture" className={`${this.props.pubStyle}__form-picture-inner-space ${ pub_picture ? 'pub-selected' : 'no-selected' }`}>
                                                                                <img src={`${ !pub_picture  ?  '../../../../images/member/publication/upload-file.png' :  [pub_picture_view ?  pub_picture_view : pub_picture]  }`} width="85" height="85" alt="Upload pub picture" />

                                                                                <p className="n-review__form-picture-inner-space--desc"> { !pub_picture ? 'Załaduj obraz recenzji' : [ pub_picture_caption ? 'Obraz zmieniono' : 'Obraz załadowano' ] }  </p>
                                                                        </label> : ''  }

                                                                        { this.props.pubStatus == 'draft-pub' ?
                                                                        <label htmlFor="pub_picture" className={`${this.props.pubStyle}__form-picture-inner-space ${ pub_picture ? 'pub-selected' : 'no-selected' }`}>
                                                                                <img src={`${ !pub_picture  ?  '../../../../images/member/publication/upload-file.png' :  [this.props.pub_visualImage ?  this.props.pub_visualImage : pub_picture ]  }`} width="85" height="85" alt="Upload pub picture" />

                                                                                <p className="n-review__form-picture-inner-space--desc"> { !pub_picture ? 'Załaduj obraz recenzji' : [this.props.pub_visualCaption ? 'Obraz zmieniono' : 'Obraz załadowano' ] }  </p>
                                                                        </label> : ''  }

                                                                        <div className={`${this.props.pubStyle}__form-bg-box-field`}>
                                                                                <input  id="pub_picture" type="file"  name="pub_picture" className="form__input--file"  onChange={ this.getFormPicture }  />

                                                                                { errors["pub_picture"]  &&  <div className="form__alert-error form__alert-error_effect form--file"> {errors["pub_picture"] } </div> }
                                                                        </div>
                                                                </div>
                                                        </div>

                                                        {  this.props.pubType == 'review'  ?
                                                        <div className="n-review__form-categories n-review__form-categories_modifier">
                                                                <header className="n-review__form-categories-header n-review__form-categories-header_modifier">
                                                                        <h2 className="n-review__form-categories-header--title">Kategoria recenzji</h2>
                                                                </header>

                                                                <div className="n-review__form-categories-box">
                                                                        <div className="n-review__form-categories-item" data-category="astrophysics">
                                                                                <input id="astrophysics" checked={ pub_category === "astrofizyka" }  type="radio"  className="form__input form__input_effect" name="review_category"  value="astrofizyka" onChange={ this.getFormCategory  }  /> 
                                                                                <label htmlFor="astrophysics" className="n-review__form-categories-item-label"><span className={`n-review__form-categories-item-radio n-review__form-categories-item-radio_modifier ${ pub_category=== "astrofizyka" ?  'category--astrophysics': 'no-selected' }`}></span>  
                                                                                <span className="n-review__form-categories-item-label-caption"> Astrofizyka </span> </label>
                                                                        </div>

                                                                        <div className="n-review__form-categories-item"  data-category="programming">
                                                                                <input id="programming" checked={ pub_category  === "programowanie" } type="radio"  name="review_category" value="programowanie"  onChange={ this.getFormCategory }/> 
                                                                                <label htmlFor="programming" className="n-review__form-categories-item-label"> <span className={`n-review__form-categories-item-radio n-review__form-categories-item-radio_modifier ${ pub_category === "programowanie" ?  'category--programming': 'no-selected' }`}></span> 
                                                                                <span className="n-review__form-categories-item-label-caption"> Programowanie </span> </label>
                                                                        </div>

                                                                        <div className="n-review__form-categories-item" data-category="business">
                                                                                <input id="business" checked= { pub_category === "biznes" } type="radio"   name="review_category" value="biznes" onChange={ this.getFormCategory } /> 
                                                                                <label htmlFor="business" className="n-review__form-categories-item-label"><span className={`n-review__form-categories-item-radio n-review__form-categories-item-radio_modifier ${ pub_category === "biznes" ?  'category--business': 'no-selected' }`}></span> 
                                                                                <span className="n-review__form-categories-item-label-caption"> Biznes </span> </label>
                                                                        </div>

                                                                        <div className="n-review__form-categories-item" data-category="development">
                                                                                <input id="development" checked={ pub_category === "rozwój" } type="radio"   name="review_category" value="rozwój"  onChange= { this.getFormCategory  }  />  
                                                                                <label htmlFor="development" className="n-review__form-categories-item-label"><span className={`n-review__form-categories-item-radio n-review__form-categories-item-radio_modifier ${ pub_category === "rozwój" ?  'category--development': 'no-selected' }`}></span> 
                                                                                <span className="n-review__form-categories-item-label-caption"> Rozwój </span> </label>
                                                                        </div>

                                                                        { errors['pub_category'] &&  <div className="form__alert-error form__alert-error_effect" style={{ marginTop: "3.5rem"}}> {  errors['pub_category'] } </div> }
                                                                </div>
                                                        </div> : ''
                                                        }

                                                        {  /*--- N project > Block > Inner > Publish ---*/   }
                                                        <div className={`${this.props.pubStyle}__form-publish ${this.props.pubStyle}__form-publish_modifier`}>
                                                                <header className={`${this.props.pubStyle}__form-publish-header ${this.props.pubStyle}__form-publish-header_modifier`}>
                                                                        <h2 className={`${this.props.pubStyle}__form-publish-header--title`}>Publikacja</h2>
                                                                </header>

                                                                <div className={`${this.props.pubStyle}__form-publish-status`}>
                                                                        <div className={`${this.props.pubStyle}__form-publish-status-btn`} role="button"> 
                                                                                <i className="material-icons material-icons-key"> visibility</i> <span className={`${this.props.pubStyle}__form-publish-status-btn-caption`}> Widoczność:  </span> Publiczny  <i className="material-icons material-icons-arrow">keyboard_arrow_right </i>
                                                                        </div>

                                                                        <div className={`${this.props.pubStyle}__form-publish-status-btn`} role="button">
                                                                                <i className="material-icons material-icons-key">date_range</i> <span className={`${this.props.pubStyle}__form-publish-status-btn-caption`}> Czas publikacji:  </span> Teraz  <i className="material-icons material-icons-arrow">keyboard_arrow_right </i>
                                                                        </div>
                                                                </div>

                                                                { this.props.pubStatus == 'new-pub' || this.props.pubStatus == 'draft-pub'  ?
                                                                        <div className={`${this.props.pubStyle}__form-publish-run`}>
                                                                                {  this.props.pubType == 'project'  || this.props.pubType ==  'review' ?
                                                                                <button type="button" className="btn--small app__button--white" onClick={ this.props.pubStatus == 'new-pub' ? this.saveDraft : (e) => this.saveDraft(e, this.props.pub_url)  }>
                                                                                { is_loading_draft &&  
                                                                                        <span className="loading__button--spinner" role="status"></span>  || <span className="submit__caption">  Zapisz Szkic </span> 
                                                                                } </button> : '' }
                                                                                
                                                                                <button type="submit" className="btn--small app__button--blue"> 
                                                                                {is_loading_pub &&  
                                                                                        <span className="loading__button--spinner" role="status"></span>  || <span className="submit__caption">  Zapisz & Opublikuj </span> 
                                                                                } </button>
                                                                        </div> : '' }

                                                                        { this.props.pubStatus == 'edit-pub' ?
                                                                        <div className={`${this.props.pubStyle}__form-publish-run`}>                                                   
                                                                                <button type="submit" className={`btn--small  ${ pub_changes ? 'app__button--blue ' :  'app__button--blue-disabled'}`}> 
                                                                                { is_loading_pub &&  
                                                                                        <span className="loading__button--spinner" role="status"></span>  || <span className="submit__caption">  Zapisz zmiany  </span> 
                                                                                } </button>
                                                                        </div> : '' }
                                                        </div>
                                                </form>
                                        </div>
                                </div>
                        </section>    
                </>
                );
        }
}

export default PubForm;