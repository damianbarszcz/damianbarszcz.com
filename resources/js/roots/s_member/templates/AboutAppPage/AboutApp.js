import  React, { useEffect } from 'react';

{  /*  Components */ }
import { Sidenav, AboutBox,AccountHeader } from '../../components';
import { AccountHeaderObj,  AboutBoxObjOne } from './Data';

function AboutApp ()  {
        useEffect(() => {
                document.title = "Pulpit | O aplikacji";
        }, []);

        /*
        =======================  
         Render component
        =======================
        */
        return (
                <main>
                        <Sidenav />
                        <AccountHeader  functionTitle={ AccountHeaderObj.title } typeFunction="info" />
                        <AboutBox AboutBoxObjOne={ AboutBoxObjOne }  />
                </main>
        );
    }

    export default AboutApp;
