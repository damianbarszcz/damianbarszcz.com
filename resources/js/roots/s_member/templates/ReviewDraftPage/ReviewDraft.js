import  React from 'react';

{  /*  Components */  }
import { PubForm, Sidenav, AccountHeader } from '../../components';

function ReviewDraft (props)  {
        const pub_url = props.match.params.pub_url;

        /*
        =======================  
         Render component
        =======================
        */
        return (
                <main>
                        <Sidenav />

                        <AccountHeader  functionTitle="Szkic recenzji" typeFunction="library_books" />

                        <PubForm pubType="review" pubStyle="n-review" pubStatus="draft-pub" pub_url ={pub_url }   />
                </main>
        );
}

export default ReviewDraft;
