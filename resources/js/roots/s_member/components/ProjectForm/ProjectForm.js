import  React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import '../../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const ProjectForm = (props) => {
        return(

        <section className="n-project n-project_theme">
                <div className="n-project__block">
                        {  /*--- N project > Block > Header  ---*/   }
                        <header className="n-project__header n-project__header_modifier">
                                <span className="n-project__header-square n-project__header-square_modifier"><i className="material-icons material-icons-outlined"> devices </i> </span>

                                <div className="n-project__header-content">
                                        <h1 className="n-project__header-content--title"> Nowy projekt </h1>

                                        <p className="n-project__header-content--subtitle"> Pulpit | Nowy projekt </p>
                                </div>
                        </header>

                        {  /*--- N project > Block > Inner  ---*/   }
                        <div className="n-project__inner">
                                {  /*--- N project > Block > Inner > Form  ---*/   }
                                <form  name="n-project__form" className="n-project__form" method="POST" onSubmit={ props.createNewProject } files="false" encType="multipart/form-data"> 
                                        {  /*--- N project > Block > Inner > Form > Content ---*/   }
                                        <div className="n-project__form-content">
                                                <div className="n-project__form-content-field">
                                                        <input name="project_title" type="text"  className={`form__input form__input_effect ${ props.errors['project_title'] ? 'form__input-error' : ''}`}  onChange={ props.getFormData } value={ props.project_title } placeholder="Tytuł projektu" maxLength="254" tabIndex="1" />
                                                        
                                                        { props.errors['project_title'] &&  <div className="form__alert-error form__alert-error_effect form--text"> { props.errors['project_title'] } </div> }
                                                </div>

                                                <div className="n-project__form-content-field">
                                                        <input name="project_subtitle" type="text"  className={`form__input form__input_effect ${ props.errors['project_subtitle'] ? 'form__input-error' : ''}`} onChange={  props.getFormData } value={ props.project_subtitle } placeholder="Podtytuł projektu" maxLength="254" tabIndex="2" />
                                                
                                                        { props.errors['project_subtitle'] &&  <div className="form__alert-error form__alert-error_effect  form--text"> { props.errors['project_subtitle'] } </div> }
                                                </div>

                                                <div className="smarteditor smarteditor_modifier RichEditor-root">
                                                        <div className="smarteditor__system">
                                                                <Editor editorState={ props.editorState }   wrapperClassName="demo-wrapper" editorClassName="demo-editor"  onEditorStateChange={ props.onEditorStateChange }  />
                                                                                                                                
                                                                <div className="smarteditor__system-properties">
                                                                        { props.errors['project_body'] &&  <div className="form__alert-error form__alert-error_effect form--textarea"> { props.errors['project_body'] } </div> }
                                                                        
                                                                        <div className="smarteditor__system-properties-counter smarteditor__system-properties-counter_modifier">Liczba znaków:  <strong> { props.wordCounter }  </strong> </div>
                                                                </div>
                                                    </div>
                                                </div>
                                        </div>

                                        {  /*--- N project > Block > Inner > Form > Picture  ---*/   }
                                        <div className="n-project__form-picture n-project__form-picture_modifier">
                                                <header className="n-project__form-picture-header n-project__form-picture-header_modifier">
                                                        <h2 className="n-project__form-picture-header--title">Obraz projektu </h2>
                                                </header>

                                                <div className="n-project__form-picture-inner">
                                                        <label htmlFor="project_picture" className={`n-project__form-picture-inner-space ${ props.project_picture ? 'pub-selected' : 'no-selected' }`}>
                                                                <img src={`${ props.project_picture ? props.project_visual  : '../../images/member/publication/upload-file.png' }`} width="85" height="85" alt="Załaduj obraz projektu" />

                                                                <p className="n-project__form-picture-inner-space--desc"> {props.project_picture ? 'Wybrano obraz' : ' Załaduj obraz projektu' }  </p>
                                                        </label>

                                                        <div className="n-project__form-bg-box-field">
                                                                <input  id="project_picture" type="file"  name="project_picture"  className="form__input--file"  onChange={ props.getFormPicture }  tabIndex="5" />

                                                                { props.errors['project_picture']  &&  <div className="form__alert-error form__alert-error_effect form--file"> { props.errors['project_picture'] } </div> }
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
                                                                <i className="material-icons material-icons-key">date_range</i> <span className="n-project__form-publish-status-btn-caption"> Czas publikacji:  </span> Teraz  <i className="material-icons material-icons-arrow">keyboard_arrow_right </i>
                                                        </div>
                                                        
                                                        <div className="n-project__form-publish-status-btn" role="button">
                                                                <i className="material-icons material-icons-key">local_offer</i> <span className="n-project__form-publish-status-btn-caption"> Tagi:  </span> Nie zaznaczono  <i className="material-icons material-icons-arrow">keyboard_arrow_right </i>
                                                        </div>

                                                        <input name="project_tags" type="text"  className={`form__input form__input_effect ${ props.errors['project_tags'] ? 'form__input-error' : ''}`} onChange={  props.getFormData } value={ props.project_tags } placeholder="Tagi projektu" maxLength="254" tabIndex="6" />
                                                </div>

                                                <div className="n-project__form-publish-run">
                                                        <button type="button" className="btn--small app__button--white" onClick={ props.createNewDraft  }>
                                                        { props.isLoadingDraft &&  
                                                                <span className="loading__button--spinner" role="status"></span>  || <span className="submit__caption">  Zapisz Szkic </span> 
                                                        } </button>
                                                        
                                                        <button type="submit" className="btn--small app__button--blue"> 
                                                        { props.isLoadingPub &&  
                                                                <span className="loading__button--spinner" role="status"></span>  || <span className="submit__caption">  Zapisz & Opublikuj </span> 
                                                        } </button>
                                                </div>
                                        </div>
                                </form>
                        </div>
                </div>
        </section>
    );
}

export default ProjectForm;