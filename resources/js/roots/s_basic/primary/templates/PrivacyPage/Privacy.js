import  React, { useEffect } from 'react';

{  /*  Components */ }
import { PrivacySection,Navigation,Footer  } from '../../components';

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
                        <Navigation   styleComponent={ 'nav-light' } />
                        <PrivacySection />
                        <Footer />
                </>
        );
}

export default Privacy;