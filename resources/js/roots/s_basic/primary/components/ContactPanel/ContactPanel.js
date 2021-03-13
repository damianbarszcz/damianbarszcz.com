import  React from 'react';

{  /*  Components */ }
import ReCAPTCHA from "react-google-recaptcha";

function ContactPanel(props) {
        /*
        =======================
         Get success msg
        =======================
        */

       const getSuccess = () => {
                return (
                // Contact me > Block > Inner  > Success
                <div className="contact-me__success"> 
                        <div className="contact-me__success-artwork">
                                <img src="/images/contact/goal.png" srcSet="/images/contact/goal.png 1x, ../images/contact/goal.png 2x" alt="Sukces"/>
                        </div>
                                                                
                        <header className="contact-me__success-header contact-me__success-header_modifier">
                                <h2 className="contact-me__success-header--title"> Gratulacje </h2>

                                <p className="contact-me__success-header--desc"> Twoja wiadomość została pomyślnie wysłana! </p>
                        </header>
                </div>                        
                )
        }

   /*
    =======================
     Render component
    =======================
    */
    return (
            <>
                {  /*-----------------------------------------*/   }
                {  /*--------      Contact panel     -------*/   }
                {  /*-----------------------------------------*/   }    
                <section className="contact-me contact-me_theme">
                        <div className="contact-me__block g-container">
                                {  /*--- Contact me > Block > Inner  ---*/   }
                                <div className="contact-me__inner contact-me__inner_modifier">
                                        {  props.success &&  getSuccess() ||
                                                        
                                                // Contact me > Block > Inner  > Form
                                                <form name="contact-me__form" className="contact-me__form" onSubmit={ props.handleForm  } method="POST">
                                                        <div className="contact-me__form-inline">
                                                                <div className="contact-me__form-inner">
                                                                        <label  className="form__label form__label_effect" htmlFor="first-name"> Imie: </label>

                                                                        <input type="text" onChange={e => props.setName(e.target.value)}  value={ props.first_name } name="first_name"  className={`form__input form__input_effect ${props.errors['first_name'] ? 'form__input-error' : ''}`}  aria-label="Imię" />

                                                                        { props.errors['first_name']  && <div className="form__alert-error form__alert-error_effect">{ props.errors['first_name'] }</div>  }
                                                                </div>

                                                                <div className="contact-me__form-inner">
                                                                        <label  className="form__label form__label_effect" htmlFor="last-name"> Nazwisko: </label>

                                                                        <input type="text" onChange={e => props.setSurename(e.target.value)}   value={ props.last_name } name="last_name" className={`form__input form__input_effect ${props.errors['last_name'] ? 'form__input-error' : ''}`}  aria-label="Nazwisko" />

                                                                        { props.errors['last_name'] && <div className="form__alert-error form__alert-error_effect">{ props.errors['last_name'] }</div>  }
                                                                </div>
                                                        </div>

                                                        <div className="contact-me__form-inner">
                                                                <label  className="form__label form__label_effect" htmlFor="email"> Adres email: </label>

                                                                <input type="email" onChange={e => props.setEmail(e.target.value)}  value={ props.email_address } name="email_address" className={`form__input form__input_effect ${props.errors['email_address'] ? 'form__input-error' : ''}`}  aria-label="Adres email"/>

                                                                { props.errors['email_address'] && <div className="form__alert-error form__alert-error_effect">{ props.errors['email_address'] }</div>  }
                                                        </div>

                                                        <div className="contact-me__form-inner">
                                                                <label  className="form__label form__label_effect" htmlFor="subject"> Temat: </label>

                                                                <input type="text" onChange={e => props.setSubject(e.target.value)}  value={ props.subject } name="subject" className={`form__input form__input_effect ${props.errors['subject'] ? 'form__input-error' : ''}`} aria-label="Temat"/>

                                                                { props.errors['subject'] && <div className="form__alert-error form__alert-error_effect">{ props.errors['subject'] }</div>  }
                                                        </div>

                                                        <div className="contact-me__form-inner">
                                                                <label  className="form__label form__label_effect" htmlFor="message"> Wiadomość: </label>

                                                                <textarea rows="4" onChange={e => props.setMessage(e.target.value)}  value={ props.message  }  name="message" className={`form__input form__input_effect ${props.errors['message'] ? 'form__input-error' : ''}`}   aria-label="Wiadomość"> </textarea>

                                                                { props.errors['message'] && <div className="form__alert-error form__alert-error_effect">{ props.errors['message'] }</div>  }
                                                        </div>

                                                        <div className="contact-me__form-inner control-buttons">
                                                                <ReCAPTCHA name="recaptcha"  sitekey="6Le2FQ8UAAAAAAGC6__oyDjvb5lKK1_uas1hUuoT" onChange={ props.setRecaptcha  } >
                                                                        {  props.errors['recaptcha'] && <div className="form__alert-error form__alert-error_effect">{ props.errors['recaptcha'] }</div>  }
                                                                </ReCAPTCHA>

                                                                <button type="submit" className="btn--normal app__button--purple" value="submit"> 
                                                                        { props.loader && 
                                                                                <span className="loading__button--spinner" role="status"></span>
                                                                                                
                                                                                || <span className="submit__caption">  Wyślij </span> } 
                                                                </button>
                                                        </div>
                                                </form> }
                                        </div>
                                </div>
                        </section>
                 </>
        );
}

export default ContactPanel;