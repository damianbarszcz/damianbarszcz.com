import  React, { useEffect } from 'react';
import axios from 'axios';
import { RegisterPanel } from '../../components';

function Register() {

        const [name, getName] = React.useState('');
        const [surename, getSurename] = React.useState('');
        const [email, getEmail] = React.useState('');
        const [gender, getGender] = React.useState('');
        const [password, getPassword] = React.useState('');
        const [password_confirmation, getPasswordConfirmation] = React.useState('');
        const [role, getRole] = React.useState('');
        const [day, getDay] = React.useState('');
        const [month, getMonth] = React.useState('');
        const [year, getYear] = React.useState('');
        const [errors, setError] = React.useState([]);
        const [loader, isLoading] = React.useState(false);

        useEffect(() => {
                document.title = "Tworzenie konta | Damian Barszcz";
        }, []);

        const handleForm = (e) => {
                e.preventDefault();

                isLoading(true);

                axios.post('/register',  {
                        name: name,
                        surename: surename,
                        email: email,
                        gender: gender,
                        password: password,
                        password_confirmation: password_confirmation,
                        role: role,
                        month: month, 
                        year: year, 
                        day: day, 
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
                        getPassword('')
                         isLoading(false)
                } );
        }

        return (
                <main role="main">
                        <RegisterPanel handleForm= { handleForm }  getName={ getName }  getSurename = { getSurename } getGender={ getGender }
                        getEmail = { getEmail }  getPassword={ getPassword }  getPasswordConfirmation={ getPasswordConfirmation } getRole={ getRole }
                        name ={name}  surename={surename} email={email} password={password} password_confirmation={password_confirmation}
                        role={role} month={month} year={year} day={day} gender={gender}
                        getDay={ getDay } getMonth={ getMonth } getYear={ getYear } errors={errors} loader={ loader } isLoading={ isLoading }   
                        />
                 </main>
        );
 }

export default Register;