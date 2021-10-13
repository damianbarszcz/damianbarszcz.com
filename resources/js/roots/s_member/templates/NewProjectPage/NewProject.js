import  React, { useEffect } from 'react';

{  /*  Components */  }
import { PubForm, Sidenav, AccountHeader } from '../../components';

function NewProject ()  {
        useEffect(() => {
                document.title = "Pulpit | Nowy projekt";
        }, []);

         /*
        =======================  
         Render component
        =======================
        */
        return (
                <main>
                        <Sidenav />

                        <AccountHeader  functionTitle="Nowy projekt" typeFunction="devices" />

                        <PubForm pubType="project" pubStyle="n-project" pubStatus="new-pub"  />
                </main>
        );
}

export default  NewProject;
