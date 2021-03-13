import  React, { useEffect } from 'react';
import axios from 'axios';
import { LoginPanel } from '../../components';

function Login() {

        const [email, setEmail] = React.useState('');
        const [password, setPassword] = React.useState('');
        const [errors, setError] = React.useState([]);
        const [loader, isLoading] = React.useState(false);
        const [isPasswordOn, runIsPasswordOn] = React.useState(false);

        useEffect(() => {
                document.title = "Sign in | Damian Barszcz";
        }, []);

        const handleForm = (e) => {
                e.preventDefault();

                isLoading(true);

                axios.defaults.withCredentials = true;

                axios.get('/sanctum/csrf-cookie').then(()=> {

                        axios.post('/login',  {
                                email: email,
                                password: password
                        })

                        .then(response => {
                                if (!response.error) {  
                                        if(!location.reload()){
                                                props.history.push(`/member/overview`)
                                        }
                                }
                        })

                        .catch(error => {  
                                setError(error.response.data.errors) 
                                setPassword('')
                                isLoading(false)
                        } );
                });
        }

        const passwordVisibility = () =>{
                runIsPasswordOn(!isPasswordOn);
        }

        return (
                <main role="main">
                        <LoginPanel handleForm= { handleForm }  setEmail = { setEmail } setPassword={ setPassword } email={ email } password= { password }
                         errors={errors} loader={loader} isLoading={isLoading}  passwordVisibility={passwordVisibility} isPasswordOn={isPasswordOn} />
                 </main>
        );
 }

export default Login;