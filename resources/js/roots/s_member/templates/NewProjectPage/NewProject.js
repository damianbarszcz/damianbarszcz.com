import React, { Component } from 'react';
import { EditorState, convertToRaw  } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import axios from 'axios';

{  /*  Components */ }
import { Sidenav } from '../../components';
import { msgSuccess } from '../../../global/Msg';

class NewProject  extends Component {

        constructor(props){  
                super(props);   

                this.state = { 
                        project_title: '',  project_subtitle: '',  project_body:'', project_tags:'', project_picture:'', project_visual:'',  errors: [], 
                        isLoadingPub: false, isLoadingDraft:false, successMessage:false, messageDraft:false,  msgAnimation:false, 
                        wordCounter:0,  editorState: EditorState.createEmpty()
                }

                this.getFormData = this.getFormData.bind(this);
                this.getFormPicture = this.getFormPicture.bind(this);
                this.createNewProject= this.createNewProject.bind(this);
                this.createNewDraft = this.createNewDraft.bind(this);
                this.getValidationErrors = this.getValidationErrors.bind(this);

                this.onEditorStateChange = (editorState) =>{  
                        this.setState({   editorState, 
                                project_body:   draftToHtml(convertToRaw(editorState.getCurrentContent())), 
                                wordCounter: editorState.getCurrentContent().getPlainText('\u0001').replace(/\s/g, "").length,
                        }); 
                }
        }

        /*
        =======================
         Get form data
        =======================
        */
        getFormData(e){
                e.preventDefault();

                const name = e.target.name;
                const value = e.target.value;

                this.setState({  [name] : value})
        }

        /*
        =======================
         Get form picture
        =======================
        */
        getFormPicture(e){
                this.setState({  
                        project_picture:e.target.files[0],
                        project_visual: URL.createObjectURL(e.target.files[0])
                })

                console.log(e.target.files[0]);
        }

         /*
        =======================
         Create new project
        =======================
        */
        createNewProject(e){
                e.preventDefault();

                const formData = new FormData();

                formData.append('project_picture', this.state.project_picture);
                formData.append('project_title', this.state.project_title);
                formData.append('project_subtitle', this.state.project_subtitle);
                formData.append('project_body', this.state.project_body);
                formData.append('project_tags', this.state.project_tags);

                this.setState({ isLoadingPub: true })

               //Run Laravel method
                axios.post("/api/member/new-project/create-project", formData)
                .then(response => {
                        if (!response.error) {   
                                this.props.history.push('/member/overview')

                                 this.setState({ 
                                        project_title: '', project_subtitle: '', project_body:  '', project_tags: '', project_picture: '', project_visual:'', 
                                        errors:[], isLoadingPub: false, successMessage:true, editorState: EditorState.createEmpty(), wordCounter:0
                                }) 
                                
                                setTimeout(function(){ this.setState({ msgAnimation:true }); }.bind(this),5000);

                                setTimeout(function(){ this.setState({ successMessage:false, msgAnimation:false }); }.bind(this), 5500);
                        }
                })
                .catch(error => {  this.setState({ errors: error.response.data.errors, isLoadingPub: false}) })
        }

        /*
        =======================
         Create project draft
        =======================
        */

       createNewDraft (e){
                e.preventDefault();

                const formData = new FormData();

                formData.append('project_picture', this.state.project_picture);
                formData.append('project_title', this.state.project_title);
                formData.append('project_subtitle', this.state.project_subtitle);
                formData.append('project_body', this.state.project_body);
                formData.append('project_tags', this.state.project_tags);

                this.setState({ isLoadingDraft: true })

                //Run Laravel method
                axios.post("/api/member/new-project/draft-project", formData)
                .then(response => {
                        if (!response.error) {   
                                this.props.history.push('/member/new-project')

                                this.setState({ 
                                        project_title: '', project_subtitle: '', project_body: '', project_tags: '', project_picture: '', errors:[],
                                        isLoadingDraft: false, messageDraft:true, project_visual:'',editorState: EditorState.createEmpty(),wordCounter:0
                                }) 
                                
                                setTimeout(function(){ this.setState({ msgAnimation:true }); }.bind(this),5000);

                                setTimeout(function(){ this.setState({ messageDraft:false, msgAnimation:false }); }.bind(this), 5500);
                        }
                })
                .catch(error => {  this.setState({ errors: error.response.data.errors, isLoadingDraft: false}) })
        }
        

        /*
        =======================
         Get form data
        =======================
        */
        getValidationErrors(field) {   return !!this.state.errors[field]   }
        

        componentDidMount() {
                document.title = "Dashboard |  New project";
        }

        /*
        =======================
         Render component
        =======================
        */
        render() {
                const { project_title, project_subtitle, project_picture, project_visual, errors,  isLoadingPub, isLoadingDraft, 
                            successMessage, messageDraft, msgAnimation, wordCounter, editorState  } = this.state

                const getPubDescryption = { messageAnimate: msgAnimation, messageArtwork: '../images/member/global/successIcon.png', messageDescryption: 'The project has been created.' }

                const getDraftDescryption = { messageAnimate: msgAnimation, messageArtwork: '../images/member/global/successIcon.png', messageDescryption: 'The draft has been created.' }

                return (

                <>
                        <main  className="main" role="main">
                                {  /*-----------------------------------*/   }
                                {  /*--------    Msg success    -------*/    }
                                {  /*-----------------------------------*/   }

                                { successMessage &&   msgSuccess(getPubDescryption )  }      

                                {  /*-----------------------------------*/   }
                                {  /*--------      Msg draft      -------*/    }
                                {  /*-----------------------------------*/   }

                                { messageDraft &&   msgSuccess(getDraftDescryption )  }   

                                {  /*-----------------------------*/   }
                                {  /*--------    Sidenav   -------*/    }
                                {  /*-----------------------------*/   }
                                <Sidenav />

                                {  /*-----------------------------*/   }
                                {  /*--------  N project   -------*/   }
                                {  /*-----------------------------*/   }
                                <section className="n-project n-project_theme">
                                        <div className="n-project__block">
                                                 {  /*--- N project > Block > Header  ---*/   }
                                                <header className="n-project__header n-project__header_modifier">
                                                        <span className="n-project__header-square n-project__header-square_modifier"><i className="material-icons material-icons-outlined"> devices </i> </span>

                                                        <div className="n-project__header-content">
                                                                <h1 className="n-project__header-content--title"> New project </h1>

                                                                <p className="n-project__header-content--subtitle"> Dashboard | New project </p>
                                                        </div>
                                                </header>

                                                {  /*--- N project > Block > Inner  ---*/   }
                                                <div className="n-project__inner">
                                                        {  /*--- N project > Block > Inner > Form  ---*/   }
                                                        <form  name="n-project__form" className="n-project__form" method="POST" onSubmit={ this.createNewProject } files="false" encType="multipart/form-data"> 
                                                                {  /*--- N project > Block > Inner > Form > Content ---*/   }
                                                                <div className="n-project__form-content">
                                                                        <div className="n-project__form-content-field">
                                                                                <input name="project_title" type="text"  className={`form__input form__input_effect ${this.getValidationErrors('project_title') ? 'form__input-error' : ''}`}  onChange={ this.getFormData } value={ project_title } placeholder="Tytuł projektu" maxLength="254" tabIndex="1" disabled=""/>
                                                                                
                                                                                { this.getValidationErrors('project_title') &&  <div className="form__alert-error form__alert-error_effect form--text"> { errors['project_title'] } </div> }
                                                                        </div>

                                                                        <div className="n-project__form-content-field">
                                                                                <input name="project_subtitle" type="text"  className={`form__input form__input_effect ${this.getValidationErrors('project_subtitle') ? 'form__input-error' : ''}`} onChange={  this.getFormData } value={ project_subtitle } placeholder="Podtytuł projektu" maxLength="254" tabIndex="2" />
                                                                        
                                                                                { this.getValidationErrors('project_subtitle') &&  <div className="form__alert-error form__alert-error_effect  form--text"> { errors['project_subtitle'] } </div> }
                                                                        </div>

                                                                        <div className="smarteditor smarteditor_modifier RichEditor-root">
                                                                                <div className="smarteditor__system">
                                                                                        <Editor editorState={ editorState }   wrapperClassName="demo-wrapper" editorClassName="demo-editor"  onEditorStateChange={this.onEditorStateChange}  />
                                                                                                                                                        
                                                                                        <div className="smarteditor__system-properties">
                                                                                                { this.getValidationErrors('project_body') &&  <div className="form__alert-error form__alert-error_effect form--textarea"> { errors['project_body'] } </div> }
                                                                                                
                                                                                                <div className="smarteditor__system-properties-counter smarteditor__system-properties-counter_modifier">Words:  <strong> { wordCounter }  </strong> </div>
                                                                                        </div>
                                                                               </div>
                                                                        </div>
                                                                </div>

                                                                {  /*--- N project > Block > Inner > Form > Picture  ---*/   }
                                                                <div className="n-project__form-picture n-project__form-picture_modifier">
                                                                        <header className="n-project__form-picture-header n-project__form-picture-header_modifier">
                                                                                <h2 className="n-project__form-picture-header--title">Project picture </h2>
                                                                        </header>

                                                                        <div className="n-project__form-picture-inner">
                                                                                <label htmlFor="project_picture" className={`n-project__form-picture-inner-space ${ project_picture ? 'pub-selected' : 'no-selected' }`}>
                                                                                        <img src={`${ project_picture ? project_visual  : '../../images/member/publication/upload-file.png' }`} width="85" height="85" alt="Załaduj obraz projektu" />
 
                                                                                        <p className="n-project__form-picture-inner-space--desc"> { project_picture ? 'Picture Selected' : ' Załaduj obraz projektu' }  </p>
                                                                                </label>

                                                                                <div className="n-project__form-bg-box-field">
                                                                                        <input  id="project_picture" type="file"  name="project_picture"  className="form__input--file"  onChange={ this.getFormPicture }  tabIndex="5" />

                                                                                        { this.getValidationErrors('project_picture') &&  <div className="form__alert-error form__alert-error_effect form--file"> { errors['project_picture'] } </div> }
                                                                                </div>
                                                                        </div>
                                                                </div>

                                                                {  /*--- N project > Block > Inner > Publish ---*/   }
                                                                <div className="n-project__form-publish n-project__form-publish_modifier">
                                                                        <header className="n-project__form-publish-header n-project__form-publish-header_modifier">
                                                                                <h2 className="n-project__form-publish-header--title">Publish</h2>
                                                                        </header>

                                                                        <div className="n-project__form-publish-status">
                                                                                <div className="n-project__form-publish-status-btn" role="button"> 
                                                                                        <i className="material-icons material-icons-key"> visibility</i> <span className="n-project__form-publish-status-btn-caption"> Visibility:  </span> Public  <i className="material-icons material-icons-arrow">keyboard_arrow_right </i>
                                                                                </div>

                                                                                <div className="n-project__form-publish-status-btn" role="button">
                                                                                        <i className="material-icons material-icons-key">date_range</i> <span className="n-project__form-publish-status-btn-caption"> Publish:  </span> Now  <i className="material-icons material-icons-arrow">keyboard_arrow_right </i>
                                                                                </div>
                                                                                
                                                                                <div className="n-project__form-publish-status-btn" role="button">
                                                                                        <i className="material-icons material-icons-key">local_offer</i> <span className="n-project__form-publish-status-btn-caption"> Tags:  </span> Not selected  <i className="material-icons material-icons-arrow">keyboard_arrow_right </i>
                                                                                </div>
                                                                        </div>

                                                                        <div className="n-project__form-publish-run">
                                                                                <button type="button" className="btn--small app__button--white" onClick={ this.createNewDraft  }>
                                                                                { isLoadingDraft &&  
                                                                                        <span className="loading__button--spinner" role="status"></span>  || <span className="submit__caption">  Save Draft </span> 
                                                                                 } </button>
                                                                                
                                                                                <button type="submit" className="btn--small app__button--blue"> 
                                                                                { isLoadingPub &&  
                                                                                        <span className="loading__button--spinner" role="status"></span>  || <span className="submit__caption">  Save & Publish </span> 
                                                                                } </button>
                                                                        </div>
                                                                </div>
                                                        </form>
                                                </div>
                                        </div>
                                </section>
                        </main>
                </>
                );
         }
}
export default NewProject;
