import  React, { useEffect } from 'react';

{  /*  Components */ }
import { Sidenav, PersonalInfo,AccountHeader } from '../../components';
import  msgSuccess  from '../../../global/Msg';

function  Personal (props) { 
        const [successMessage, getMessage ] = React.useState(false);
        const [modal, personalModal ] = React.useState(false);
        const [isName, getName] = React.useState(false);
        const [isEmail, getEmail] = React.useState(false);
        const [isPhone, getPhone] = React.useState(false);
        const [isPassword, getPassword] = React.useState(false);
        const [ isBirthday, getBirthday] = React.useState(false);
        const [ isBiogram, getBiogram] = React.useState(false);

        const [name, setName] = React.useState('');
        const [surename, setSurename] = React.useState('');
        const [email, setEmail] = React.useState('');
        const [phone, setPhone] = React.useState('');
        const [password, setPassword] = React.useState('');
        const [password_confirmation, setConfirmPassword] = React.useState('');
        const [day, setDay] = React.useState('');
        const [month, setMonth] = React.useState('');
        const [year, setYear] = React.useState('');

        const [biogram, setBiogram] = React.useState('');
        const [error, setError] = React.useState('');
        const [loader, isLoading] = React.useState(false);

        useEffect(() => {
                document.title = "Pulpit | Dane personalne";
        }, []);

        const getModal =(e,isInput) => {
                e.preventDefault();
                
                if(isInput == "isName"){     getName(true);   getEmail(false); getPhone(false);  getPassword(false);  getBiogram(false);}

                if(isInput == "isEmail"){   getEmail(true); getName(false);   getPhone(false); getPassword(false);   getBiogram(false); }

                if(isInput == "isPhone"){   getPhone(true); getName(false);   getEmail(false);  getPassword(false);  getBiogram(false);}

                if(isInput == "isPassword"){   getPhone(false); getName(false);   getEmail(false);  getPassword(true); getBiogram(false);}

                if(isInput == "isBiogram"){ getBiogram(true);   getPhone(false); getName(false);   getEmail(false);  getPassword(false);   }

                personalModal(true);
        }

        const exitModal = (e) => {
                personalModal(false);

                e.preventDefault();     
        }

        const handleForm = (e) => {
                
        }

        return (
         <main>
                { successMessage && msgSuccess(getMsg)  }
                <Sidenav />  
                <AccountHeader  functionTitle="Dane personalne" typeFunction="account_circle " />

                <PersonalInfo getModal ={ getModal }  user={ props.user} />

                { modal &&
                <div className={`personal-modal personal-modal_modifier`} role="dialog" aria-hidden="true">
                        <div className="personal-modal__dialog pub-modal__dialog_modifier" role="document">
                                {  /*---  Pub modal > Dialog > Close  ---*/   }
                                <button className="personal-modal__dialog-close personal-modal__dialog-close_effect" type="button" onClick={ (e) => exitModal(e) } aria-label="Close"><i className="material-icons">close</i></button>
                                
                                {  /*---  Pub modal > Dialog > Inner  ---*/   }
                                <div className="personal-modal__dialog-inner">
                                        {  isName &&
                                        <>
                                        <header className="personal-modal__dialog-header">
                                                <h1 className="personal-modal__dialog-header--title">Nazwa</h1>

                                                <p className="personal-modal__dialog-header--desc">Zmiana imienia i nazwiska b??dzie widoczna w Twoim koncie. </p>
                                        </header>

                                        <form noValidate  onSubmit={ (e) => handleForm(e, "setName") }  method="POST">
                                                <div className="personal-modal__dialog-content">
                                                        <div className="personal-modal__dialog-content-field">
                                                                <input name="name" type="text"  className={`form__input form__input_effect ${ error['name'] ? 'form__input-error' : ''}`} onChange={ (e)  => setName(e.target.value) } value={ name } placeholder="Imi??" maxLength="254" tabIndex="1" />
                                                                                                        
                                                                { error['name'] &&  <div className="form__alert-error form__alert-error_effect"> { error['name'] } </div> }
                                                        </div>

                                                        <div className="personal-modal__dialog-content-field">
                                                                <input name="surename" type="text"  className={`form__input form__input_effect ${ error['surename'] ? 'form__input-error' : ''}`} onChange={ (e)  => setSurename(e.target.value) } value={ surename } placeholder="Nazwisko" maxLength="254" tabIndex="2" />
                                                                                                        
                                                                { error['surename'] &&  <div className="form__alert-error form__alert-error_effect"> { error['surename'] } </div> }
                                                        </div>

                                                        <div className="personal-modal__dialog-content-field">
                                                                <button type="submit" className="btn--small app__button--blue"> 
                                                                { loader &&  
                                                                        <span className="loading__button--spinner" role="status"></span>  || <span className="submit__caption">  Zapisz zmiany </span> 
                                                                } </button>
                                                        </div>
                                                </div>
                                         </form>  
                                         </> }

                                         {  isEmail &&
                                        <>
                                                <header className="personal-modal__dialog-header">
                                                        <h1 className="personal-modal__dialog-header--title">Adres e-mail</h1>

                                                        <p className="personal-modal__dialog-header--desc">Zarz??dzaj adresami e-mail powi??zanymi z Twoim kontem. </p>
                                                </header>

                                                <form noValidate  onSubmit={ (e) => handleForm(e, "setEmail") }  method="POST">
                                                        <div className="personal-modal__dialog-content">
                                                                <div className="personal-modal__dialog-content-field">
                                                                        <input name="email" type="email"  className={`form__input form__input_effect ${ error['email'] ? 'form__input-error' : ''}`} onChange={ (e)  => setEmail(e.target.value) } value={ email } placeholder="Adres email" maxLength="254" tabIndex="1" />
                                                                                                                
                                                                        { error['email'] &&  <div className="form__alert-error form__alert-error_effect"> { error['email'] } </div> }
                                                                </div>

                                                                <div className="personal-modal__dialog-content-field">
                                                                        <button type="submit" className="btn--small app__button--blue"> 
                                                                        { loader &&  
                                                                                <span className="loading__button--spinner" role="status"></span>  || <span className="submit__caption">  Zapisz zmiany </span> 
                                                                        } </button>
                                                                </div>
                                                        </div>
                                                </form> 
                                         </> }

                                         {  isPhone &&
                                        <>
                                                <header className="personal-modal__dialog-header">
                                                        <h1 className="personal-modal__dialog-header--title">Numer telefonu</h1>

                                                        <p className="personal-modal__dialog-header--desc">Ten numer telefonu zosta?? dodany do Twojego konta. </p>
                                                </header>

                                                <form noValidate  onSubmit={ (e) => handleForm(e, "setPhone") }  method="POST">
                                                        <div className="personal-modal__dialog-content">
                                                                <div className="personal-modal__dialog-content-field">
                                                                        <input name="phone" type="text"  className={`form__input form__input_effect ${ error['phone'] ? 'form__input-error' : ''}`} onChange={ (e)  => setPhone(e.target.value) } value={ phone } placeholder="Numer telefonu" maxLength="254" tabIndex="1" />
                                                                                                                
                                                                        { error['phone'] &&  <div className="form__alert-error form__alert-error_effect"> { error['phone'] } </div> }
                                                                </div>

                                                                <div className="personal-modal__dialog-content-field">
                                                                        <button type="submit" className="btn--small app__button--blue"> 
                                                                        { loader &&  
                                                                                <span className="loading__button--spinner" role="status"></span>  || <span className="submit__caption">  Zapisz zmiany </span> 
                                                                        } </button>
                                                                </div>
                                                        </div>
                                                </form> 
                                         </> }

                                         {  isPassword &&
                                        <>
                                                <header className="personal-modal__dialog-header">
                                                        <h1 className="personal-modal__dialog-header--title">Twoje has??o</h1>

                                                        <p className="personal-modal__dialog-header--desc">Utw??rz silne has??o i nie u??ywaj go na innych kontach. </p>
                                                </header>

                                                <form noValidate  onSubmit={ (e) => handleForm(e, "setPassword") }  method="POST">
                                                        <div className="personal-modal__dialog-content">
                                                                <div className="personal-modal__dialog-content-field">
                                                                        <input name="password" type="text"  className={`form__input form__input_effect ${ error['password'] ? 'form__input-error' : ''}`} onChange={ (e)  => setPassword(e.target.value) } value={ password } placeholder="Nowe has??o" maxLength="254" tabIndex="1" />
                                                                                                                
                                                                        { error['password'] &&  <div className="form__alert-error form__alert-error_effect"> { error['password'] } </div> }
                                                                </div>

                                                                <div className="personal-modal__dialog-content-field">
                                                                        <input name="password_confirmation" type="text"  className={`form__input form__input_effect ${ error['password_confirmation'] ? 'form__input-error' : ''}`} onChange={ (e)  => setConfirmPassword(e.target.value) } value={ password_confirmation } placeholder="Powt??rz nowe has??o" maxLength="254" tabIndex="2" />
                                                                                                                
                                                                        { error['password_confirmation'] &&  <div className="form__alert-error form__alert-error_effect"> { error['password_confirmation'] } </div> }
                                                                </div>

                                                                <div className="personal-modal__dialog-content-field">
                                                                        <button type="submit" className="btn--small app__button--blue"> 
                                                                        { loader &&  
                                                                                <span className="loading__button--spinner" role="status"></span>  || <span className="submit__caption"> Zmie?? has??o </span> 
                                                                        } </button>
                                                                </div>
                                                        </div>
                                                </form> 
                                         </> }



                                         {  isBiogram &&
                                        <>
                                                <header className="personal-modal__dialog-header">
                                                        <h1 className="personal-modal__dialog-header--title">Biogram</h1>

                                                        <p className="personal-modal__dialog-header--desc">Data urodzenia mo??e s??u??y?? do ochrony konta i personalizacji us??ug. </p>
                                                </header>

                                                <form noValidate  onSubmit={ (e) => handleForm(e, "setBiogram") }  method="POST">
                                                        <div className="personal-modal__dialog-content">
                                                                <div className="personal-modal__dialog-content-field">
                                                                        <input name="biogram" type="text"  className={`form__input form__input_effect ${ error['biogram'] ? 'form__input-error' : ''}`} onChange={ (e)  => setBiogram(e.target.value) } value={ biogram } placeholder="Biogram" maxLength="254" tabIndex="1" />
                                                                                                                
                                                                        { error['biogram'] &&  <div className="form__alert-error form__alert-error_effect"> { error['biogram'] } </div> }
                                                                </div>

                                                                <div className="personal-modal__dialog-content-field">
                                                                        <button type="submit" className="btn--small app__button--blue"> 
                                                                        { loader &&  
                                                                                <span className="loading__button--spinner" role="status"></span>  || <span className="submit__caption"> Zapisz</span> 
                                                                        } </button>
                                                                </div>
                                                        </div>
                                                </form> 
                                         </> }
                                </div>
                        </div>
                </div>
                }
        </main>
        );
}

export default Personal;
