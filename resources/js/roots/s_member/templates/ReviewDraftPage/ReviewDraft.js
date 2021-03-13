import React, { Component } from 'react';
import axios from 'axios'

{  /*  Components */ }
import {Sidenav} from '../../components';

export default class ReviewDraft  extends Component {

        constructor(props){  
                super(props);   

                this.state = { review:[], review_title: '',  review_subtitle: '',  review_body:'', review_tags:'', review_category:'', review_picture:'',
                review_changes:false, isLoadingPub: false, isLoadingDraft: false,errors: [], successMessage:false, messageAnimation:false, messageDraft:false, no_words:0}

                this.getFormData = this.getFormData.bind(this);
                this.getFormCategory = this.getFormCategory.bind(this);
                this.getFormPicture = this.getFormPicture.bind(this);
                this.saveDraft = this.saveDraft.bind(this);
                this.publishReview= this.publishReview.bind(this);
                this.countCharacters = this.countCharacters.bind(this);
                this.getValidationErrors = this.getValidationErrors.bind(this);
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

        getFormCategory(e) {
                this.setState({ review_category: e.target.value, review_changes:true })
        }
      
        /*
        =======================
         Get form picture
        =======================
        */
        getFormPicture(e){
                this.setState({  
                        review_picture:e.target.files[0], 
                        picture_title:'Picture Changed',
                        review_changes:true 
                })

                console.log(event.target.files[0]);
        }

         /*
        =======================
         Create new review
        =======================
        */

       publishReview(e,review_url){
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
                axios.post(`/api/member/drafts/review/continue/publish-review/${review_url}`, formData)
                        
                .then(response => {
                        if (!response.error) {   
                                this.props.history.push(`/member/reviews`)

                                this.setState({ 
                                        isLoadingPub: false, 
                                        successMessage:true, 
                                        review_changes:false,
                                        errors:[]
                                 }) 
                                        
                                setTimeout(function(){ this.setState({ messageAnimation:true }); }.bind(this),5000);

                                setTimeout(function(){ this.setState({ successMessage:false, messageAnimation:false }); }.bind(this), 5500);
                        }
                })
                .catch(error => {  this.setState({ errors: error.response.data.errors, isLoadingPub: false}) })
                
        }

        /*
        =======================
         Update review draft
        =======================
        */

       saveDraft(e, review_url){
                e.preventDefault();

                const formData = new FormData();

                formData.append('review_picture', this.state.review_picture);
                formData.append('review_title', this.state.review_title);
                formData.append('review_subtitle', this.state.review_subtitle);
                formData.append('review_body', this.state.review_body);
                formData.append('review_tags', this.state.review_tags);
                formData.append('review_category', this.state.review_category);

                this.setState({ isLoadingDraft: true })

                //Run Laravel method
                         axios.post(`/api/member/drafts/review/continue/update-draft/${review_url}`, formData)
                        .then(response => {
                                if (!response.error) {   
                                        this.props.history.push(`/member/drafts/project/continue/${review_url}`)

                                        this.setState({ 
                                                isLoadingDraft: false, review_changes:false, messageDraft:true, errors:[]
                                        }) 
                                        
                                        setTimeout(function(){ this.setState({ messageAnimation:true }); }.bind(this),5000);

                                        setTimeout(function(){ this.setState({ messageDraft:false, messageAnimation:false }); }.bind(this), 5500);
                                }
                        })
                        .catch(error => {  this.setState({ errors: error.response.data.errors, isLoadingDraft: false}) })
        }

        /*
        =======================
         Count characters
        =======================
        */
        countCharacters(e){
                e.preventDefault();

                const name = e.target.name
                const value = e.target.value
                
                this.setState({ [name] : value, wordCounter: e.target.value.replace(/\s/g, "").length })
        }

        /*
        =======================
         Get form validation
        =======================
        */
        getValidationErrors(field) {   return !!this.state.errors[field]   }

        /*
        =======================
         Get form data
        =======================
        */
        componentDidMount() {
                const pub_url = this.props.match.params.pub_url;

                axios.get(`/api/member/drafts/review/continue/${pub_url}`).then(response => { 
                        this.setState({ 
                                review: response.data, 
                                review_picture: response.data.pub_picture,
                                review_title: response.data.pub_title,
                                review_subtitle: response.data.pub_subtitle,
                                review_body: response.data.pub_body, 
                                review_tags:response.data.pub_tags,
                                review_category:response.data.pub_category,
                                review_url:response.data.pub_url,
                                picture_title:'Picture Selected',
                        }); 
                });
        }


        /*
        =======================
         Render component
        =======================
        */
        render() {

                const { review_title, review_subtitle, review_body, review_tags, picture_title, review_category,  review_url, errors, 
                no_words, isLoadingPub, isLoadingDraft, successMessage, messageAnimation, messageDraft, review_changes } = this.state

                document.title =  review_title + " | Continue review draft";

                return (

                <React.Fragment>
                        <main  className="main" role="main">
                                {  /*-----------------------------------*/   }
                                {  /*--------    Msg success    -------*/    }
                                {  /*-----------------------------------*/   }
                                { successMessage &&
                                <div className={`msg-success msg-success_modifier ${ messageAnimation ? 'msg-success--fadeOutSide' : 'msg-success--fadeInSide'}`}> 
                                        <div className="msg-success__inner">
                                                <div className="msg-success__inner-art">
                                                        <img src="/images/member/global/successIcon.svg" className="msg-success__inner-art-image" alt="Success artwork" />
                                                </div>

                                                <div className="msg-success__inner-info">
                                                        <p className="msg-success__inner-info--title"> Success </p>

                                                        <p className="msg-success__inner-info--desc"> The review has been published.</p>
                                                </div>
                                        </div>
                                </div> }

                                {  /*-----------------------------------*/   }
                                {  /*--------      Msg draft      -------*/    }
                                {  /*-----------------------------------*/   }
                                { messageDraft &&
                                <div className={`msg-success msg-success_modifier ${ messageAnimation ? 'msg-success--fadeOutSide' : 'msg-success--fadeInSide'}`}> 
                                        <div className="msg-success__inner">
                                                <div className="msg-success__inner-art">
                                                        <img src="/images/member/global/successIcon.svg" className="msg-success__inner-art-image" alt="Success artwork" />
                                                </div>

                                                <div className="msg-success__inner-info">
                                                        <p className="msg-success__inner-info--title"> Draft saved </p>

                                                        <p className="msg-success__inner-info--desc"> The review draft has been updated.</p>
                                                </div>
                                        </div>
                                </div> }

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
                                                                <h1 className="n-review__header-content--title"> Review draft </h1>

                                                                <p className="n-review__header-content--subtitle"> Dashboard | Review draft  </p>
                                                        </div>
                                                </header>

                                                <div className="n-review__inner">
                                                        {  /*--- N review > Form  ---*/   }
                                                        <form  name="n-review__form" className="n-review__form" method="POST" onSubmit={ (e) => this.publishReview(e,review_url) } files="false" encType="multipart/form-data"> 
                                                                {  /*--- N review > Form > Content  ---*/   }
                                                                <div className="n-review__form-content">
                                                                        <div className="n-review__form-content-field">
                                                                                <input name="review_title" type="text"  className={`form__input form__input_effect ${this.getValidationErrors('review_title') ? 'form__input-error' : ''}`} onChange={  this.getFormData } value={ review_title } placeholder="Review title" maxLength="254" tabIndex="1" />
                                                                                
                                                                                { this.getValidationErrors('review_title') &&  <div className="form__alert-error form__alert-error_effect"> { errors['review_title'] } </div> }
                                                                        </div>

                                                                        <div className="n-review__form-content-field">
                                                                                <input name="review_subtitle" type="text"  className={`form__input form__input_effect ${this.getValidationErrors('review_subtitle') ? 'form__input-error' : ''}`} onChange={  this.getFormData } value={ review_subtitle } placeholder="Review subtitle" maxLength="254" tabIndex="2" />
                                                                        
                                                                                { this.getValidationErrors('review_subtitle') &&  <div className="form__alert-error form__alert-error_effect"> { errors['review_subtitle'] } </div> }
                                                                        </div>

                                                                        <div className="n-review__form-content-prop n-review__form-content-prop_modifier">
                                                                                <div className="n-review__form-content-prop-inner">
                                                                                        <button type="button" className="btn app__button--blue content-prop-btn">Text</button>
                                                                                </div>

                                                                                <div className="n-review__form-content-field--textarea">
                                                                                        <textarea name="review_body" className={`form__input form__input_effect form__input--textarea ${this.getValidationErrors('review_body') ? 'form__input-error' : ''}`}  value={ review_body } onChange={(e) => { this.countCharacters(e); this.getFormData(e) }} tabIndex="3" rows="25"></textarea>
                                                                                        
                                                                                        { this.getValidationErrors('review_body') &&  <div className="form__alert-error form__alert-error_effect" style={{ transform: "translate(0.5rem,1rem)" }}> { errors['review_body'] } </div> }

                                                                                        <div className="words-counter words-counter_modifier">Words: <span className="words-counter-caption"> {  review_body ? review_body.replace(/\s/g, "").length : no_words }  </span></div>
                                                                                </div>
                                                                        </div>
                                                                </div>

                                                                {  /*--- N review  > Form > Publish  ---*/   }
                                                                <div className="n-review__form-publish n-review__form-publish_modifier">
                                                                        <header className="n-review__form-publish-header n-review__form-publish-header_modifier">
                                                                                <h2 className="n-review__form-publish-header--title">Publish</h2>
                                                                        </header>

                                                                        <div className="n-review__form-publish-status">
                                                                                <div className="n-review__form-publish-status-btn"> 
                                                                                        <i className="material-icons material-icons--key">vpn_key</i>  Status:    <span className="n-review__form-publish-status-btn-caption">Publication </span> <i className="material-icons material-icons-arrow">keyboard_arrow_right </i> 
                                                                                </div>

                                                                                <div className="n-review__form-publish-status-btn"> 
                                                                                        <i className="material-icons material-icons--key"> visibility</i> Visibility: <span className="n-review__form-publish-status-btn-caption">Public</span> <i className="material-icons material-icons-arrow">keyboard_arrow_right </i>
                                                                                </div>

                                                                                <div className="n-review__form-publish-status-btn">
                                                                                        <i className="material-icons material-icons--key">date_range</i> Publish:   <span className="n-review__form-publish-status-btn-caption"> Now </span> <i className="material-icons material-icons-arrow">keyboard_arrow_right </i>
                                                                                </div>
                                                                        </div>

                                                                        <div className="n-review__form-publish-run">
                                                                                <button type="button" className={`btn publish__button ${ review_changes ? 'app__button--white ' :  'app__button--white-disabled'}`}  onClick={ (e) => this.saveDraft(e,review_url) }>
                                                                                { isLoadingDraft &&  
                                                                                        <span className="loading__button--spinner" role="status"></span>  || <span className="submit__caption">  Save changes  </span> 
                                                                                 } </button>
                                                                                
                                                                                <button type="submit" className={`btn publish__button ${ review_changes ? 'app__button--blue ' :  'app__button--blue-disabled'}`}> 
                                                                                { isLoadingPub &&  
                                                                                        <span className="loading__button--spinner" role="status"></span>  || <span className="submit__caption">  Save & Publish </span> 
                                                                                } </button>
                                                                        </div>
                                                                </div>

                                                                 {  /*--- N review > Form > Review picture ---*/   }
                                                                <div className="n-review__form-bg n-review__form-bg_modifier">
                                                                        <header className="n-review__form-bg-header n-review__form-bg-header_modifier">
                                                                                <h2 className="n-review__form-bg-header--title">Review picture</h2>
                                                                        </header>

                                                                        <div className="n-review__form-bg-box">
                                                                                <label htmlFor="review_picture" className={`btn n-review__form-bg-box--btn ${ picture_title =="Picture Changed" ? 'app__button--tgreen' :  'app__button--tdark'}`}>
                                                                                        <i className="material-icons material-icons--add">add_photo_alternate</i> <span className="btn-caption"> { picture_title } </span>
                                                                                </label>
                                                                                
                                                                                <div className="n-review__form-bg-box-field">
                                                                                        <input  id="review_picture" type="file"  name="review_picture"  className="form__input--file"  onChange={ this.getFormPicture }  tabIndex="4" />

                                                                                        { this.getValidationErrors('review_picture') &&  <div className="form__alert-error form__alert-error_effect"> { errors['review_picture'] } </div> }
                                                                                </div>
                                                                        </div>
                                                                </div>

                                                                {  /*--- N review > Form  > Tags ---*/   }
                                                                <div className="n-review__form-tags n-review__form-tags_modifier">
                                                                        <header className="n-review__form-tags-header n-review__form-tags-header_modifier">
                                                                                <h2 className="n-review__form-tags-header--title">Tags</h2>
                                                                        </header>

                                                                        <div className="n-review__form-tags-box">
                                                                                <label className="n-review__form-tags-box--caption">Separate tags with commas</label>

                                                                                <div className="n-review__form-tags-box--field">
                                                                                        <input name="review_tags" type="text"  className={`form__input form__input_effect ${this.getValidationErrors('review_tags') ? 'form__input-error' : ''}`} onChange={ this.getFormData } value={ review_tags } placeholder="Enter tags here" maxLength="254" tabIndex="5" />
                                                                                        
                                                                                        { this.getValidationErrors('review_tags') &&  <div className="form__alert-error form__alert-error_effect"> { errors['review_tags'] } </div> }
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
