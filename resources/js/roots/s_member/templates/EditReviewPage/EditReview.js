import React, { Component } from 'react';
import { EditorState, convertToRaw,ContentState, convertFromHTML } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import axios from 'axios';

{  /*  Components */ }
import { Sidenav } from '../../components';
import { msgSuccess } from '../../../global/Msg';

export default class EditReview  extends Component {

        constructor(props){  
                super(props);   

                this.state = { review:[], review_title: '',  review_subtitle: '',  review_body:'', review_tags:'', review_category:'', review_picture:'', review_changes:false, review_visualCaption:'',  review_visualImage:'', 
                 isLoadingPub: false,  errors: [],  isLoadingPub: false, successMessage:false,  msgAnimation:false, editorState: EditorState.createEmpty(), wordCounter:0 }

                this.getFormData = this.getFormData.bind(this);
                this.getFormCategory = this.getFormCategory.bind(this);
                this.getFormPicture = this.getFormPicture.bind(this);
                this.updateReview= this.updateReview.bind(this);
                this.getValidationErrors = this.getValidationErrors.bind(this);

                this.onEditorStateChange = (editorState) =>{  
                        this.setState({   editorState, 
                                review_body:   draftToHtml(convertToRaw(editorState.getCurrentContent())), 
                                wordCounter: editorState.getCurrentContent().getPlainText('\u0001').replace(/\s/g, "").length,
                                review_changes:true,
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

                this.setState({  [name] : value, review_changes:true })
        }

        /*
        =======================
         Get form category
        =======================
        */

        getFormCategory(e) { this.setState({ review_category: e.target.value, review_changes:true }) }
      
        /*
        =======================
         Get form picture
        =======================
        */

       getFormPicture(e){
                if(!this.state.review_picture){
                        this.setState({ 
                                review_picture:e.target.files[0], 
                                review_changes:true,
                                review_visualImage: URL.createObjectURL(e.target.files[0])
                        })       
                } else{
                        this.setState({ 
                                review_picture:e.target.files[0], 
                                review_changes:true,
                                review_visualCaption: URL.createObjectURL(e.target.files[0]),
                                review_visualImage: URL.createObjectURL(e.target.files[0])
                        })
                }
                console.log(event.target.files[0]);
        }

         /*
        =======================
         Create new review
        =======================
        */

        updateReview(e,review_url){
                e.preventDefault();

                const formData = new FormData();

                formData.append('review_picture', this.state.review_picture);
                formData.append('review_title', this.state.review_title);
                formData.append('review_subtitle', this.state.review_subtitle);
                formData.append('review_body', this.state.review_body);
                formData.append('review_tags', this.state.review_tags);
                formData.append('review_category', this.state.review_category);

                this.setState({ isLoadingPub: true })

                //Run Laravel method
                axios.post(`/api/member/reviews/edit/update-review/${review_url}`, formData)
                        
                .then(response => {
                        if (!response.error) {   
                                this.props.history.push(`/member/reviews/edit/${review_url}`)

                                this.setState({ 
                                        isLoadingPub: false, 
                                        successMessage:true, 
                                        review_changes:false,
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

        /*
        =======================
        Get specyfic article items
        =======================
        */
        componentDidMount() {
                const pub_url = this.props.match.params.pub_url;

                axios.get(`/api/member/reviews/edit/${pub_url}`).then(response => { 
                        this.setState({ 
                                review: response.data, 
                                review_picture: response.data.pub_picture,
                                review_title: response.data.pub_title,
                                review_subtitle: response.data.pub_subtitle,
                                review_body: response.data.pub_body, 
                                review_tags:response.data.pub_tags,
                                review_category:response.data.pub_category,
                                review_url:response.data.pub_url,
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

                const { review_title, review_subtitle, review_picture, review_url, review_changes, review_category, review_visualCaption, review_visualImage, errors, 
                        isLoadingPub, msgAnimation, successMessage, editorState, wordCounter } = this.state

                document.title =  review_title + " | Edit review";

                const getPubDescryption = { messageAnimate: msgAnimation, messageArtwork: '../../../images/member/global/successIcon.png', messageDescryption: 'The review has been updated.' }

                return (

                <React.Fragment>
                        <main  className="main" role="main">
                                {  /*-----------------------------------*/   }
                                {  /*--------    Msg success    -------*/    }
                                {  /*-----------------------------------*/   }

                                { successMessage &&   msgSuccess(getPubDescryption )  }      

                                {  /*-----------------------------*/   }
                                {  /*--------    Sidenav   -------*/    }
                                {  /*-----------------------------*/   }
                                <Sidenav />

                                {  /*-----------------------------*/   }
                                {  /*--------  N review  -------*/     }
                                {  /*-----------------------------*/   }
                                <section className="n-review n-review_theme">
                                        <div className="n-review__block">
                                                <header className="n-review__header n-review__header_modifier">
                                                        <span className="n-review__header-square n-review__header-square_modifier"><i className="material-icons material-icons-outlined">  library_books  </i> </span>

                                                        <div className="n-review__header-content">
                                                                <h1 className="n-review__header-content--title"> Edit review </h1>

                                                                <p className="n-review__header-content--subtitle"> Dashboard | Edit review </p>
                                                        </div>
                                                </header>

                                                <div className="n-review__inner">
                                                        {  /*--- N review > Form  ---*/   }
                                                        <form  name="n-review__form" className="n-review__form" method="POST" onSubmit={ (e) => this.updateReview(e,review_url) } files="false" encType="multipart/form-data"> 
                                                                {  /*--- N review > Form > Content  ---*/   }
                                                                <div className="n-review__form-content">
                                                                        <div className="n-review__form-content-field">
                                                                                <input name="review_title" type="text"  className={`form__input form__input_effect ${this.getValidationErrors('review_title') ? 'form__input-error' : ''}`} onChange={  this.getFormData } value={ review_title  || '' } placeholder="Review title" maxLength="254" tabIndex="1" />
                                                                                
                                                                                { this.getValidationErrors('review_title') &&  <div className="form__alert-error form__alert-error_effect"> { errors['review_title'] } </div> }
                                                                        </div>

                                                                        <div className="n-review__form-content-field">
                                                                                <input name="review_subtitle" type="text"  className={`form__input form__input_effect ${this.getValidationErrors('review_subtitle') ? 'form__input-error' : ''}`} onChange={  this.getFormData } value={ review_subtitle || ''  } placeholder="Review subtitle" maxLength="254" tabIndex="2" />
                                                                        
                                                                                { this.getValidationErrors('review_subtitle') &&  <div className="form__alert-error form__alert-error_effect"> { errors['review_subtitle'] } </div> }
                                                                        </div>

                                                                        <div className="smarteditor smarteditor_modifier RichEditor-root">
                                                                                <div className="smarteditor__system">
                                                                                        <Editor editorState={editorState}   wrapperClassName="demo-wrapper" editorClassName="demo-editor"  onEditorStateChange={this.onEditorStateChange}  />
                                                                                                                                                                
                                                                                        <div className="smarteditor__system-properties">
                                                                                                { this.getValidationErrors('review_body') &&  <div className="form__alert-error form__alert-error_effect form--textarea"> { errors['review_body'] } </div> }
                                                                                                        
                                                                                                <div className="smarteditor__system-properties-counter smarteditor__system-properties-counter_modifier">Words:  <strong> { wordCounter }  </strong> </div>
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                          
                                                                {  /*--- N review > Block > Inner > Publish ---*/   }
                                                                <div className="n-review__form-publish n-review__form-publish_modifier">
                                                                        <header className="n-review__form-publish-header n-review__form-publish-header_modifier">
                                                                                <h2 className="n-review__form-publish-header--title">Publish</h2>
                                                                        </header>

                                                                        <div className="n-review__form-publish-status">
                                                                                <div className="n-review__form-publish-status-btn" role="button"> 
                                                                                        <i className="material-icons material-icons-key"> visibility</i> <span className="n-review__form-publish-status-btn-caption"> Visibility:  </span> Public  <i className="material-icons material-icons-arrow">keyboard_arrow_right </i>
                                                                                </div>

                                                                                <div className="n-review__form-publish-status-btn" role="button">
                                                                                        <i className="material-icons material-icons-key">date_range</i> <span className="n-review__form-publish-status-btn-caption"> Publish:  </span> Now  <i className="material-icons material-icons-arrow">keyboard_arrow_right </i>
                                                                                </div>
                                                                                
                                                                                <div className="n-review__form-publish-status-btn" role="button">
                                                                                        <i className="material-icons material-icons-key">local_offer</i> <span className="n-review__form-publish-status-btn-caption"> Tags:  </span> Not selected  <i className="material-icons material-icons-arrow">keyboard_arrow_right </i>
                                                                                </div>
                                                                        </div>

                                                                        <div className="n-review__form-publish-run">
                                                                                <button type="submit" className={`btn--small  ${ review_changes ? 'app__button--blue ' :  'app__button--blue-disabled'}`}> 
                                                                                { isLoadingPub &&  
                                                                                        <span className="loading__button--spinner" role="status"></span>  || <span className="submit__caption">  Save changes </span> 
                                                                                } </button>
                                                                        </div>
                                                                </div>

                                                                 {  /*--- N review > Form > Review picture ---*/   }
                                                                <div className="n-review__form-picture n-review__form-picture_modifier">
                                                                        <header className="n-review__form-picture-header n-review__form-picture-header_modifier">
                                                                                <h2 className="n-review__form-picture-header--title">Review picture </h2>
                                                                        </header>

                                                                        <div className="n-review__form-picture-inner">
                                                                                <label htmlFor="review_picture" className={`n-review__form-picture-inner-space ${ review_picture ? 'pub-selected' : 'no-selected' }`}>
                                                                                        <img src={`${ !review_picture  ?  '../../../../images/member/publication/upload-file.png' :  [review_visualImage ?  review_visualImage : review_picture ]  }`} width="85" height="85" alt="Upload review picture" />
 
                                                                                        <p className="n-review__form-picture-inner-space--desc"> { !review_picture ? 'Enter your project picture' : [review_visualCaption ? 'Picture changed' : 'Picture selected' ] }  </p>
                                                                                </label>

                                                                                <div className="n-review__form-bg-box-field">
                                                                                        <input  id="review_picture" type="file"  name="review_picture"  className="form__input--file"  onChange={ this.getFormPicture }  tabIndex="5" />

                                                                                        { this.getValidationErrors('review_picture') &&  <div className="form__alert-error form__alert-error_effect form--file"> { errors['review_picture'] } </div> }
                                                                                </div>
                                                                        </div>
                                                                </div>

                                                                {  /*--- N review > Form > Categories  ---*/   }
                                                                <div className="n-review__form-categories n-review__form-categories_modifier">
                                                                        <header className="n-review__form-categories-header n-review__form-categories-header_modifier">
                                                                                <h2 className="n-review__form-categories-header--title">Review category</h2>
                                                                        </header>

                                                                        <div className="n-review__form-categories-box">
                                                                                <div className="n-review__form-categories-item" data-category="astrophysics">
                                                                                        <input id="astrophysics" checked={ review_category === "astrophysics" }  type="radio"  className="form__input form__input_effect" name="review_category"  value="astrophysics" onChange={ this.getFormCategory  } tabIndex="6" /> 
                                                                                        <label htmlFor="astrophysics" className="n-review__form-categories-item-label"><span className={`n-review__form-categories-item-radio n-review__form-categories-item-radio_modifier ${ review_category === "astrophysics" ?  'category--astrophysics': 'no-selected' }`}></span>  
                                                                                        <span className="n-review__form-categories-item-label-caption"> Astrophysics </span> </label>
                                                                                </div>

                                                                                <div className="n-review__form-categories-item"  data-category="programming">
                                                                                        <input id="programming" checked={ review_category === "programming" } type="radio"  name="review_category" value="programming"  onChange={ this.getFormCategory }   tabIndex="7"/> 
                                                                                        <label htmlFor="programming" className="n-review__form-categories-item-label"> <span className={`n-review__form-categories-item-radio n-review__form-categories-item-radio_modifier ${ review_category === "programming" ?  'category--programming': 'no-selected' }`}></span> 
                                                                                        <span className="n-review__form-categories-item-label-caption"> Programming  </span> </label>
                                                                                </div>

                                                                                <div className="n-review__form-categories-item" data-category="business">
                                                                                        <input id="business" checked= {review_category === "business" } type="radio"   name="review_category" value="business" onChange={ this.getFormCategory }  tabIndex="8" /> 
                                                                                        <label htmlFor="business" className="n-review__form-categories-item-label"><span className={`n-review__form-categories-item-radio n-review__form-categories-item-radio_modifier ${ review_category === "business" ?  'category--business': 'no-selected' }`}></span> 
                                                                                        <span className="n-review__form-categories-item-label-caption"> Business </span> </label>
                                                                                </div>

                                                                                <div className="n-review__form-categories-item" data-category="development">
                                                                                        <input id="development" checked={ review_category === "development" } type="radio"   name="review_category" value="development"  onChange={ this.getFormCategory  }   tabIndex="9"/>  
                                                                                        <label htmlFor="development" className="n-review__form-categories-item-label"><span className={`n-review__form-categories-item-radio n-review__form-categories-item-radio_modifier ${ review_category === "development" ?  'category--development': 'no-selected' }`}></span> 
                                                                                        <span className="n-review__form-categories-item-label-caption"> Development  </span> </label>
                                                                                </div>

                                                                                 { this.getValidationErrors('review_category') &&  <div className="form__alert-error form__alert-error_effect" style={{ marginTop: "1.25rem"}}> {  errors['review_category'] } </div> }
                                                                        </div>
                                                                </div>
                                                        </form>
                                                </div>
                                        </div>
                                </section>
                        </main>
                </React.Fragment>
                );
         }
}
