import React, { Component } from 'react';
import { EditorState, convertToRaw,ContentState, convertFromHTML } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import axios from 'axios';

{  /*  Components */ }
import { Sidenav } from '../../components';
import { msgSuccess } from '../../../global/Msg';

class EditProject  extends Component {

        constructor(props){  
                super(props);   

                this.state = { project:[], project_title: '', project_subtitle: '', project_body:'', project_tags:'', project_url:'', project_picture:'',   project_changes:false, project_visualCaption:'',  review_visualImage:'', 
                errors: [],  isLoadingPub: false, successMessage:false,  msgAnimation:false, editorState: EditorState.createEmpty(), wordCounter:0 }

                this.getFormData = this.getFormData.bind(this);
                this.getFormPicture = this.getFormPicture.bind(this);
                this.updateProject = this.updateProject.bind(this);
                this.getValidationErrors = this.getValidationErrors.bind(this);

                this.onEditorStateChange = (editorState) =>{  
                        this.setState({   editorState, 
                                project_body:   draftToHtml(convertToRaw(editorState.getCurrentContent())), 
                                wordCounter: editorState.getCurrentContent().getPlainText('\u0001').replace(/\s/g, "").length,
                                project_changes:true,
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

                this.setState({  [name] : value, project_changes:true })
        }

        /*
        =======================
         Get form picture
        =======================
        */
       getFormPicture(e){
                if(!this.state.project_picture){
                        this.setState({ 
                                project_picture:e.target.files[0], 
                                project_changes:true,
                                project_visualImage: URL.createObjectURL(e.target.files[0])
                        })       
                } else{
                        this.setState({ 
                                project_picture:e.target.files[0], 
                                project_changes:true,
                                project_visualCaption: URL.createObjectURL(e.target.files[0]),
                                project_visualImage: URL.createObjectURL(e.target.files[0])
                        })
                }
                console.log(event.target.files[0]);
        }

         /*
        =======================
         Update project
        =======================
        */
        updateProject(e,project_url){
                e.preventDefault();

                const formData = new FormData();

                formData.append('project_picture', this.state.project_picture);
                formData.append('project_title', this.state.project_title);
                formData.append('project_subtitle', this.state.project_subtitle);
                formData.append('project_body', this.state.project_body);
                formData.append('project_tags', this.state.project_tags);

                this.setState({ isLoadingPub: true })

               //Run Laravel method
                axios.post(`/api/member/projects/edit/update-project/${project_url}`, formData)
                .then(response => {
                        if (!response.error) {   
                                this.props.history.push(`/member/projects/edit/${project_url}`)

                                 this.setState({ 
                                        isLoadingPub: false, 
                                        successMessage:true, 
                                        project_changes:false,
                                        project_visualCaption:false,
                                        errors:[]
                                }) 
                                
                                setTimeout(function(){ this.setState({ msgAnimation:true }); }.bind(this),5000);

                                setTimeout(function(){ this.setState({ successMessage:false, msgAnimation:false }); }.bind(this), 5500);
                        }
                })
                .catch(error => {  this.setState({ errors: error.response.data.errors, isLoadingPub: false}) })
        }

        /*
        =======================
         Get form data
        =======================
        */
        getValidationErrors(field) {   return !!this.state.errors[field]   }

        componentDidMount() {

                const pub_url = this.props.match.params.pub_url;

                axios.get(`/api/member/projects/edit/${pub_url}`).then(response => { 
                        this.setState({ 
                                project: response.data, 
                                project_picture: response.data.pub_picture,
                                project_title: response.data.pub_title,
                                project_subtitle: response.data.pub_subtitle,
                                project_body: response.data.pub_body, 
                                project_tags:response.data.pub_tags,
                                project_url:response.data.pub_url,
                                editorState:EditorState.createWithContent(ContentState.createFromBlockArray(convertFromHTML(response.data.pub_body))) ,
                                wordCounter:  response.data.pub_body.replace(/\s/g, "").length 
                        }); 
                });
        }

        /*
        =======================
         Render component
        =======================
        */
        render() {

                const { project_title, project_subtitle, project_picture, project_url, project_changes, project_visualCaption, project_visualImage, errors, 
                        isLoadingPub, msgAnimation, successMessage, editorState, wordCounter } = this.state

                const getPubDescryption = { messageAnimate: msgAnimation, messageArtwork: '../../../images/member/global/successIcon.png', messageDescryption: 'Projekt został zaktualizowany.' }
                 
                document.title =  project_title + " | Edytuj projekt";
                
                return (

                <>
                        <main>
                                { successMessage &&   msgSuccess(getPubDescryption )  }      
                                <Sidenav />

                                {  /*-------------------------------*/   }
                                {  /*--------  N project   -------*/   }
                                {  /*-------------------------------*/   }
                                <section className="n-project n-project_theme">
                                        <div className="n-project__block">
                                                <header className="n-project__header n-project__header_modifier">
                                                        <span className="n-project__header-square n-project__header-square_modifier"><i className="material-icons material-icons-outlined"> devices </i> </span>

                                                        <div className="n-project__header-content">
                                                                <h1 className="n-project__header-content--title"> Edytuj projekt </h1>

                                                                <p className="n-project__header-content--subtitle"> Pulpit | Edytuj projekt</p>
                                                        </div>
                                                </header>

                                                <div className="n-project__inner">
                                                        {  /*--- N project > Form  ---*/   }
                                                        <form  name="n-project__form" className="n-project__form" method="POST" onSubmit={ (e) => this.updateProject(e,project_url) } files="false" encType="multipart/form-data"> 
                                                                {  /*--- N project > Form > Content  ---*/   }
                                                                <div className="n-project__form-content">
                                                                        <div className="n-project__form-content-field">

                                                                                <input name="project_title" type="text"  className={`form__input form__input_effect ${this.getValidationErrors('project_title') ? 'form__input-error' : ''}`}  onChange={ this.getFormData } value={ project_title } placeholder="Tytuł projektu" maxLength="254" tabIndex="1" />
                                                                                
                                                                                { this.getValidationErrors('project_title') &&  <div className="form__alert-error form__alert-error_effect"> { errors['project_title'] } </div> }
                                                                        </div>

                                                                        <div className="n-project__form-content-field">
                                                                                <input name="project_subtitle" type="text"  className={`form__input form__input_effect ${this.getValidationErrors('project_subtitle') ? 'form__input-error' : ''}`} onChange={  this.getFormData } value={ project_subtitle } placeholder="Podtytuł projektu" maxLength="254" tabIndex="2" />
                                                                        
                                                                                { this.getValidationErrors('project_subtitle') &&  <div className="form__alert-error form__alert-error_effect"> { errors['project_subtitle'] } </div> }
                                                                        </div>

                                                                        <div className="smarteditor smarteditor_modifier RichEditor-root">
                                                                                <div className="smarteditor__system">
                                                                                        <Editor editorState={editorState}   wrapperClassName="demo-wrapper" editorClassName="demo-editor"  onEditorStateChange={this.onEditorStateChange}  />
                                                                                                                                                        
                                                                                        <div className="smarteditor__system-properties">
                                                                                                { this.getValidationErrors('project_body') &&  <div className="form__alert-error form__alert-error_effect form--textarea"> { errors['project_body'] } </div> }
                                                                                                
                                                                                                <div className="smarteditor__system-properties-counter smarteditor__system-properties-counter_modifier">Liczba znaków:  <strong> { wordCounter }  </strong> </div>
                                                                                        </div>
                                                                               </div>
                                                                        </div>
                                                                </div>

                                                                {  /*--- N project > Block > Inner > Publish ---*/   }
                                                                <div className="n-project__form-publish n-project__form-publish_modifier">
                                                                        <header className="n-project__form-publish-header n-project__form-publish-header_modifier">
                                                                                <h2 className="n-project__form-publish-header--title">Publikacja</h2>
                                                                        </header>

                                                                        <div className="n-project__form-publish-status">
                                                                                <div className="n-project__form-publish-status-btn" role="button"> 
                                                                                        <i className="material-icons material-icons-key"> visibility</i> <span className="n-project__form-publish-status-btn-caption"> Widoczność:  </span> Publiczny  <i className="material-icons material-icons-arrow">keyboard_arrow_right </i>
                                                                                </div>

                                                                                <div className="n-project__form-publish-status-btn" role="button">
                                                                                        <i className="material-icons material-icons-key">date_range</i> <span className="n-project__form-publish-status-btn-caption">  Czas publikacji:  </span> Teraz  <i className="material-icons material-icons-arrow">keyboard_arrow_right </i>
                                                                                </div>
                                                                                
                                                                                <div className="n-project__form-publish-status-btn" role="button">
                                                                                        <i className="material-icons material-icons-key">local_offer</i> <span className="n-project__form-publish-status-btn-caption"> Tagi:  </span> Nie zaznaczono  <i className="material-icons material-icons-arrow">keyboard_arrow_right </i>
                                                                                </div>
                                                                        </div>

                                                                        <div className="n-project__form-publish-run">
                                                                                <button type="submit" className={`btn--small  ${ project_changes ? 'app__button--blue ' :  'app__button--blue-disabled'}`}> 
                                                                                { isLoadingPub &&  
                                                                                        <span className="loading__button--spinner" role="status"></span>  || <span className="submit__caption">  Zapisz zmiany </span> 
                                                                                } </button>
                                                                        </div>
                                                                </div>

                                                                 {  /*--- N project > Form > Project picture ---*/   }
                                                                <div className="n-project__form-picture n-project__form-picture_modifier">
                                                                        <header className="n-project__form-picture-header n-project__form-picture-header_modifier">
                                                                                <h2 className="n-project__form-picture-header--title">Obraz projektu </h2>
                                                                        </header>

                                                                        <div className="n-project__form-picture-inner">
                                                                                <label htmlFor="project_picture" className={`n-project__form-picture-inner-space ${ project_picture ? 'pub-selected' : 'no-selected' }`}>
                                                                                        <img src={`${ !project_picture  ?  '../../../../images/member/publication/upload-file.png' :  [project_visualImage ?  project_visualImage : project_picture ]  }`} width="85" height="85" alt="Załaduj obraz projektu" />
 
                                                                                        <p className="n-project__form-picture-inner-space--desc"> { !project_picture ? 'Załaduj obraz projektu' : [project_visualCaption ? 'Zmieniono obraz' : 'Wybrano obraz' ] }  </p>
                                                                                </label>

                                                                                <div className="n-project__form-bg-box-field">
                                                                                        <input  id="project_picture" type="file"  name="project_picture"  className="form__input--file"  onChange={ this.getFormPicture }  tabIndex="5" />

                                                                                        { this.getValidationErrors('project_picture') &&  <div className="form__alert-error form__alert-error_effect form--file"> { errors['project_picture'] } </div> }
                                                                                </div>
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

export default EditProject;