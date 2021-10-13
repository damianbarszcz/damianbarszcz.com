import  React, { useEffect,useState } from 'react';
import axios from 'axios';

{  /*  Components */ }
import { ContactBanner, ContactPanel,Footer,Navigation  } from '../../components';
import { contactObjOne,contactObjTwo,contactObjThree } from './Data';

/*
=======================
Display all components for
Contact route
=======================
*/
export default function Contact (props) {
        useEffect(() => {
                document.title = "Kontakt | Damian Barszcz";
        }, []);

        const [first_name, setName] = useState('');
        const [last_name, setSurename] = useState('');
        const [email_address, setEmail] = useState('');
        const [subject , setSubject ] = useState('');
        const [message , setMessage ] = useState('');
        const [errors, setError] = useState([]);
        const [loader, isLoading] = useState(false);
        const [success, successPage] = useState(false);
        const [recaptcha, setRecaptcha] = useState('');

        // Submit message to Autor blog
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

        // Get value for Captcha
        const getRecaptcha = (recaptchaValue) => {
                setRecaptcha(recaptchaValue)
        }

       /*
        =======================
         Render component
        =======================
        */
        return (
                <>
                        <Navigation typeSection={'navigation'} projects = { props.projects  }  reviews = { props.reviews } />
                        <main>
                                <ContactBanner  contactObjOne = { contactObjOne } />
                                <ContactPanel  contactObjTwo={contactObjTwo} contactObjThree = { contactObjThree } handleForm ={ handleForm }  getRecaptcha={ getRecaptcha } setName={ setName } setSurename ={ setSurename } 
                                setEmail={ setEmail } setSubject={ setSubject } setMessage={ setMessage } errors={ errors } loader={ loader } success={ success } setRecaptcha={ setRecaptcha }  />
                        </main>
                        <Footer />
                </>
        );
}
