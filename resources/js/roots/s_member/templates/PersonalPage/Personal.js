import  React, { useEffect } from 'react';
import axios from 'axios';

{  /*  Components */ }
import { Sidenav, PersonalInfo } from '../../components';
import  msgSuccess  from '../../../global/Msg';

function  Personal (props) { 
        const [successMessage, getMessage ] = React.useState(false);

        useEffect(() => {
                document.title = "Dashboard | Personal info";
        }, []);

        const getModal =() => {
                e.preventDefault();
        }

        return (
         <>
         
                { successMessage && msgSuccess(getMsg)  }
                <Sidenav />  
                <PersonalInfo getModal ={ getModal }  user={ props.user} />
        </>
        );
}

export default Personal;
