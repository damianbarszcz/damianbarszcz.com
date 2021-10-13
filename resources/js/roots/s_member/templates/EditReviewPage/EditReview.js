import  React from 'react';

{  /*  Components */  }
import { PubForm, Sidenav, AccountHeader } from '../../components';

function EditReview (props)  {
        const pub_url = props.match.params.pub_url;

        /*
        =======================  
         Render component
        =======================
        */
        return (
                <main>
                        <Sidenav />

                        <AccountHeader  functionTitle="Edytuj recenzje" typeFunction="library_books" />

                        <PubForm pubType="review" pubStyle="n-review" pubStatus="edit-pub" pub_url ={pub_url }   />
                </main>
        );
}

export default EditReview;
