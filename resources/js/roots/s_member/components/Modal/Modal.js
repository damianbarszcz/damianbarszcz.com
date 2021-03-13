import React  from 'react';

/*
============================
  Get publication modal
============================
*/

export function pubModal(props){
        return (
        <div className={`pub-modal pub-modal_modifier ${ props.modalAnimate ? 'pub-modal--fadeIn' : 'pub-modal--fadeOut'}`} role="dialog" aria-hidden="true">
                <div className="pub-modal__dialog pub-modal__dialog_modifier" role="document">
                        {  /*---  Pub modal > Dialog > Close  ---*/   }
                        <button className="pub-modal__dialog-close pub-modal__dialog-close_effect" type="button" onClick={ (e) => props.exitModal(e) } aria-label="Close"><i className="material-icons">close</i></button>
                        
                        {  /*---  Pub modal > Dialog > Inner  ---*/   }
                        <div className="pub-modal__dialog-inner">
                                {  /*---  Pub modal > Dialog > Rev  ---*/   }
                                <div className="pub-modal__dialog-rev">
                                        <header className="pub-modal__dialog-rev-header">
                                                <h1 className="pub-modal__dialog-rev-header--title">New review</h1>

                                                <p className="pub-modal__dialog-rev-header--desc">Create a review of your favorite book.</p>
                                        </header>

                                        <div className="pub-modal__dialog-rev-art">
                                                <img src="/images/member/global/book.png" alt="Create book review" />
                                        </div>

                                        <div className="pub-modal__dialog-rev-box">
                                                <a href="/member/new-review" type="button" className="btn--small  app__button--white">Create review</a>
                                         </div>
                                </div>

                                {  /*---  Pub modal > Dialog > Proj  ---*/   }
                                <div className="pub-modal__dialog-proj">
                                        <header className="pub-modal__dialog-proj-header">
                                                <h1 className="pub-modal__dialog-proj-header--title">New project</h1>

                                                <p className="pub-modal__dialog-proj-header--desc">Create a project in the field of programming.</p>
                                        </header>

                                        <div className="pub-modal__dialog-proj-art">
                                                <img src="/images/member/global/project.png"  alt="Create project" />
                                        </div>
                                                            
                                        <div className="pub-modal__dialog-proj-box">
                                                <a href="/member/new-project" type="button" className="btn--small app__button--blue">Create project</ a>
                                        </div>
                                </div>
                        </div>
                </div>
        </div> )
}


{  /*-----------------------------------*/   }
{  /*--------     Form modal    -------*/   }
{  /*-----------------------------------*/   }

        export function profileModal(){
        <div className={`form-modal form-modal_modifier ${ modalAnimation ? 'form-modal--fadeIn' : 'form-modal--fadeOut'}`} role="dialog" aria-hidden="true">
                <div className="form-modal__dialog form-modal__dialog_modifier" role="document">
                        <button className="form-modal__dialog-close close" type="button" onClick={ (e) => this.exitModal(e,0) } aria-label="Close"><i className="material-icons">close</i></button>
                        <div className="form-modal__dialog-inner">
                                { info === 1  ?
                                <div>
                                        <header className="form-modal__dialog-header">
                                                <h1 className="form-modal__dialog-header--title">Change avatar</h1>
                                        </header> 

                                        <form  name="form-modal__dialog-form" className="form-modal__dialog-form" method="POST">
                                                <div className="form-modal__dialog-form-inner">
                                                        <span className="personal-info__profile-body-link--icon"><img src={ this.props.user.avatar }  className="img-fluid"  alt="img-fluid" /></span>                    
                                                </div>

                                                <div className="delete-modal__dialog-form-button">
                                                        <button type="submit" className="btn delete-modal__button  app__button--red"> 
                                                                <span className="submit__caption">  Save Changes </span> 
                                                        </button>
                                                </div>
                                        </form> 
                                </div> 
                                
                                :  info === 2 ?
                                
                                <div>
                                       <header className="form-modal__dialog-header">
                                                 <h1 className="form-modal__dialog-header--title">Add biogram</h1>
                                        </header> 
                        
                                        <form  name="form-modal__dialog-form" className="form-modal__dialog-form" method="POST">
                                               <div className="form-modal__dialog-form-inner">
                                                        <label className="form-modal__dialog-form--label"> More information about yourself </label>
                        
                                                       <textarea name="biogram" className={`form__input form__input_effect`}  value={ this.props.user.biogram} placeholder="Enter your biogram" onChange={ this.getFormData }  row="6"></textarea>                           
                                                </div>
                        
                                                <div className="delete-modal__dialog-form-button">
                                                         <button type="submit" className="btn delete-modal__button  app__button--red"> 
                                                                <span className="submit__caption">  Save Changes </span> 
                                                          </button>
                                                </div>
                                        </form> 
                                   </div>

                                   : info === 3 ?

                                   <div>
                                        <header className="form-modal__dialog-header">
                                                <h1 className="form-modal__dialog-header--title">Change of name</h1>
                                        </header> 

                                        <form  name="form-modal__dialog-form" className="form-modal__dialog-form" onSubmit={ this.changeName } method="POST">
                                                <div className="form-modal__dialog-form-inner">
                                                        <label className="form-modal__dialog-form--label"> Name: </label>

                                                        <input name="name" type="text"  className={`form__input form__input_effect ${this.getValidationErrors('name') ? 'form__input-error' : ''}`} placeholder="Name" value= { this.props.user.name }  onChange={ this.getFormData }  />                           
                                                
                                                        { this.getValidationErrors('name') &&  <div className="form__alert-error form__alert-error_effect"> { errors['name'] } </div> }
                                                </div>

                                                <div className="form-modal__dialog-form-inner">
                                                        <label className="form-modal__dialog-form--label"> Surename: </label>

                                                        <input name="surename" type="text"  className={`form__input form__input_effect ${this.getValidationErrors('surename') ? 'form__input-error' : ''}`}  placeholder="Surename" value={ this.props.user.surename } onChange={ this.getFormData }  />                           
                                                
                                                        { this.getValidationErrors('surename') &&  <div className="form__alert-error form__alert-error_effect"> { errors['surename'] } </div> }
                                                </div>

                                                <div className="delete-modal__dialog-form-button">
                                                        <button type="submit" className="btn delete-modal__button  app__button--red"> 
                                                                <span className="submit__caption">  Save Changes </span> 
                                                        </button>
                                                </div>
                                        </form> 
                                </div> 

                               : info  === 4 ?

                               <div>
                                        <header className="form-modal__dialog-header">
                                                <h1 className="form-modal__dialog-header--title">Date of birth</h1>
                                        </header> 
                
                                        <form  name="form-modal__dialog-form" className="form-modal__dialog-form" method="POST">
                                                <div className="form-modal__dialog-form-inner">
                                                        <label className="form-modal__dialog-form--label"> Update your birthday: </label>
                        
                                                        <input name="name" type="text"  className={`form__input form__input_effect`} placeholder="Name" value= { this.props.user.birthday } onChange={ this.getFormData }  />                           
                                                </div>
                        
                                                <div className="delete-modal__dialog-form-button">
                                                        <button type="submit" className="btn delete-modal__button  app__button--red"> 
                                                                <span className="submit__caption">  Save Changes </span> 
                                                        </button>
                                                </div>
                                        </form> 
                                </div>

                                : info  === 5 ?

                                <div>
                                        <header className="form-modal__dialog-header">
                                                <h1 className="form-modal__dialog-header--title">Your gender</h1>
                                        </header> 
                        
                                        <form  name="form-modal__dialog-form" className="form-modal__dialog-form" method="POST">
                                                <div className="form-modal__dialog-form-inner">
                                                        <label className="form-modal__dialog-form--label"> Gender: </label>
                        
                                                        <input name="gender" type="text"  className={`form__input form__input_effect`} placeholder="Name" value= { this.props.user.gender}  onChange={ this.getFormData }  />                           
                                                </div>
                        
                                                <div className="delete-modal__dialog-form-button">
                                                        <button type="submit" className="btn delete-modal__button  app__button--red"> 
                                                                <span className="submit__caption">  Save Changes </span> 
                                                        </button>
                                                </div>
                                        </form> 
                                </div>

                                : info  === 6 ?

                                <div>
                                      <header className="form-modal__dialog-header">
                                              <h1 className="form-modal__dialog-header--title">Address email</h1>
                                      </header> 
                      
                                      <form  name="form-modal__dialog-form" className="form-modal__dialog-form" method="POST">
                                              <div className="form-modal__dialog-form-inner">
                                                      <label className="form-modal__dialog-form--label"> Set your email address: </label>
                      
                                                      <input name="name" type="text"  className={`form__input form__input_effect`} placeholder="Email address" value= { this.props.user.email }  onChange={ this.getFormData }  maxLength="254" />                           
                                              </div>
                      
                                              <div className="delete-modal__dialog-form-button">
                                                      <button type="submit" className="btn delete-modal__button  app__button--red"> 
                                                              <span className="submit__caption">  Save Changes </span> 
                                                      </button>
                                              </div>
                                      </form> 
                                </div>

                                : info  === 7 ?

                                <div>
                                        <header className="form-modal__dialog-header">
                                                <h1 className="form-modal__dialog-header--title">Phone number</h1>
                                        </header> 
                        
                                        <form  name="form-modal__dialog-form" className="form-modal__dialog-form" method="POST">
                                                <div className="form-modal__dialog-form-inner">
                                                        <label className="form-modal__dialog-form--label"> Your number has added: </label>
                        
                                                        <input name="name" type="text"  className={`form__input form__input_effect`} placeholder="Phone number" value= { this.props.user.phone }  onChange={ this.getFormData }  maxLength="254" />                           
                                                </div>
                        
                                                <div className="delete-modal__dialog-form-button">
                                                        <button type="submit" className="btn delete-modal__button  app__button--red"> 
                                                                <span className="submit__caption">  Save Changes </span> 
                                                        </button>
                                                </div>
                                        </form> 
                                </div>

                                : info  === 8 ?

                                <div>
                                        <header className="form-modal__dialog-header">
                                                <h1 className="form-modal__dialog-header--title">Change your password</h1>
                                        </header> 
                        
                                        <form  name="form-modal__dialog-form" className="form-modal__dialog-form" method="POST">
                                                <div className="form-modal__dialog-form-inner">
                                                        <label className="form-modal__dialog-form--label"> New Password: </label>
                        
                                                        <input name="new-password" type="text"  className={`form__input form__input_effect`} placeholder="New password" value="" maxLength="254" onChange={ this.getFormData }  />                           
                                                </div>

                                                <div className="form-modal__dialog-form-inner">
                                                        <label className="form-modal__dialog-form--label"> Confirm new password: </label>
                        
                                                        <input name="confirm-password" type="text"  className={`form__input form__input_effect`} placeholder="Confirm new password" value="" maxLength="254" onChange={ this.getFormData }  />                           
                                                </div>
                        
                                                <div className="delete-modal__dialog-form-button">
                                                        <button type="submit" className="btn delete-modal__button  app__button--red"> 
                                                                <span className="submit__caption">  Save Changes </span> 
                                                        </button>
                                                </div>
                                        </form> 
                                </div> : ''
                                }
                        </div> 
                </div>
         </div>  }


{  /*-----------------------------------*/   }
{  /*--------   Delete modal   --------*/   }
{  /*-----------------------------------*/   }

 export function deleteModal(props,e){
        return <div className={`delete-modal delete-modal_modifier ${ props.modalAnimateState  ? 'delete-modal--fadeIn' : 'delete-modal--fadeOut'}`} role="dialog" aria-hidden="true">
                <div className="delete-modal__dialog delete-modal__dialog_modifier" role="document">
                        <button className="delete-modal__dialog-close delete-modal__dialog-close_effect" type="button" onClick={ (e) => props.exitModalFunction(e) } aria-label="Close"><i className="material-icons">close</i></button>
                       
                       {  /*---  Delete modal > Dialog > Artwork  ---*/   }
                        <div className="delete-modal__dialog-artwork delete-modal__dialog-artwork_modifier">
                                <img src="../images/member/global/error.png" alt="Error artwork" />
                        </div>

                        {  /*---  Delete modal > Dialog > Header ---*/   }
                        <header className="delete-modal__dialog-header delete-modal__dialog-header_modifier">
                                <h1 className="delete-modal__dialog-header--title">Are your sure ?</h1>

                                <p className="delete-modal__dialog-header--desc">Do you really want to delete ? </p> 
                                <p className="delete-modal__dialog-header--desc"><strong>{ props.modalPubTitle } </strong></p> 
                                <p className="delete-modal__dialog-header--desc" style={{ color: '#ff3062'}}> This process cannot be undone.</p>
                        </header>

                        {  /*---  Delete modal > Form ---*/   }
                        <form  name="delete-modal__form" className="delete-modal__dialog-form" method="POST" onSubmit={ (e) => props.deleteYourPubFunction(e) }>
                                <div className="delete-modal__dialog-form-inner">
                                        <label className="form__label form__label_effect"> Enter your password to confirm: </label>

                                        <input name="password" type="password"  className={`form__input form__input_effect ${ props.hasErrorForFunction ? 'form__input-error' : ''}`}  onChange={ (e) => props.getYourPasswordFunction(e) } value={ props.modalPassword } placeholder="Your password" maxLength="254" tabIndex="1" />
                                                                        
                                        { props.hasErrorForFunction &&  <div className="form__alert-error form__alert-error_effect"> { props.modalErrors } </div> }
                                </div>

                                <div className="delete-modal__dialog-form-button">
                                        <button type="submit" className="btn--small  app__button--red" value="submit"> 
                                                 { props.modalIsLoading && 
                                                        <span className="loading__button--spinner" role="status"></span>
                                                                                        
                                                 || <span className="submit__caption">  { props.buttonTitle } </span> } 
                                        </button>
                                </div>
                        </form>
                </div>
        </div>
 }

export default { pubModal, profileModal, deleteModal }