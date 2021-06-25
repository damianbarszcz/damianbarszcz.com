import  React, { useEffect } from 'react';

{  /*  Components */ }
import { Navigation, Footer,Biography, AboutBanner } from '../../components';
import { aboutObjOne, aboutObjTwo } from './Data';

/*
=======================
Display all components for
About me route
=======================
*/
function About () {
        useEffect(() => {
                document.title = "O mnie | Damian Barszcz";
        }, []);
        
       /*
        =======================
         Render component
        =======================
        */
        return (
                <>
                        <Navigation typeSection={'navigation'} />
                        <main>
                                <AboutBanner aboutObjOne = { aboutObjOne }   />
                                <Biography aboutObjTwo = { aboutObjTwo }  />
                        </main>
                        <Footer />
                </>
        );
}

export default About;
