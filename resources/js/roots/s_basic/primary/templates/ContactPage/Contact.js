import  React, { useEffect } from 'react';
import axios from 'axios';

{  /*  Components */ }
import { ContactBanner, ContactPanel,Footer,Navigation  } from '../../components';
import { aboutObjOne } from './Data';

function Contact () {
        useEffect(() => {
                document.title = "Kontakt | Damian Barszcz";
        }, []);

        const [first_name, setName] = React.useState('');
        const [last_name, setSurename] = React.useState('');
        const [email_address, setEmail] = React.useState('');
        const [subject , setSubject ] = React.useState('');
        const [message , setMessage ] = React.useState('');
        const [errors, setError] = React.useState([]);
        const [loader, isLoading] = React.useState(false);
        const [success, successPage] = React.useState(false);
        const [recaptcha, setRecaptcha] = React.useState('');

        const handleForm = (e) => {
                e.preventDefault();

                isLoading(true);

                axios.post("/api/contact/send-message", {
                        first_name: first_name,
                        last_name: last_name,
                        email_address: email_address,
                        subject: subject,
                        message: message,
                        recaptcha: recaptcha,
                })

                .then(response => {
                        if (!response.error) {  
                                isLoading(false)
                                successPage(true)
                        }
                })

                .catch(error => {  
                        setError(error.response.data.errors) 
                        isLoading(false)
                } );
        }

        const getRecaptcha = (recaptchaValue) => {
                setRecaptcha(recaptchaValue)
                console.log("Captcha value:", recaptchaValue);
        }

        return (
                <>
                        <Navigation styleComponent={ 'nav-light' } />
                        <main>
                                <ContactBanner  aboutObjOne = { aboutObjOne } />
                                <ContactPanel handleForm ={ handleForm }  getRecaptcha={ getRecaptcha } setName={ setName } setSurename ={ setSurename } 
                                setEmail={ setEmail } setSubject={ setSubject } setMessage={ setMessage } errors={ errors } loader={ loader } success={ success } setRecaptcha={ setRecaptcha }  />
                        </main>
                        <Footer />
                </>
                );
        }


export default  Contact;