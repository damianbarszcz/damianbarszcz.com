import  React, { useEffect } from 'react';

{  /*  Components */ }
import { Sidenav, AboutBox } from '../../components';

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
                <>
                        <Sidenav />
                        <main>
                                <AboutBox />
                        </main>
                </>
        );
    }

    export default AboutApp;
