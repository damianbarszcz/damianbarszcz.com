import  React, { useEffect } from 'react';

{  /*  Components */ }
import { PrivacySection,Navigation,Footer  } from '../../components';
import { privacyObjOne  } from './Data';

/*
=======================
Display all components for
Privacy me route
=======================
*/
function Privacy(props) {

        useEffect(() => {
                document.title = "Polityka prywatności | Damian Barszcz"; 
        }, []);

        /*
         =======================
        Render components
        =======================
        */
        return (
                <>
                        <Navigation typeSection={'navigation'} projects = { props.projects  }  reviews = { props.reviews } />
                        <main>
                                <PrivacySection privacyObjOne ={privacyObjOne} />
                        </main>
                        <Footer />
                </>
        );
}

export default Privacy;