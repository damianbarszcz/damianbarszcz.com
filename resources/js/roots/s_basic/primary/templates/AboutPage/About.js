import  React, { useEffect } from 'react';

{  /*  Components */ }
import { Navigation, Footer,Biography, AboutBanner } from '../../components';
import { aboutObjOne, aboutObjTwo } from './Data';

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
                        <Navigation styleComponent={ 'nav-light' } />
                        <AboutBanner aboutObjOne = { aboutObjOne }   />
                        <Biography aboutObjTwo = { aboutObjTwo }  />
                        <Footer />
                </>
        );
}

export default About;
