import  React, { useEffect } from 'react';

{  /*  Components */  }
import { PubForm, Sidenav, AccountHeader } from '../../components';

function NewReview ()  {
        useEffect(() => {
                document.title = "Pulpit | Nowa recenzja";
        }, []);

         /*
        =======================  
         Render component
        =======================
        */
        return (
                <main>
                        <Sidenav />

                        <AccountHeader  functionTitle="Nowa recenzja" typeFunction="library_books" />

                        <PubForm pubType="review" pubStyle="n-review"  pubStatus="new-pub"  />
                </main>
        );
}

export default  NewReview;
