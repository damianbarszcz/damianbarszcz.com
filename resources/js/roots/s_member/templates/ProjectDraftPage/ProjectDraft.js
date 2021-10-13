import  React from 'react';

{  /*  Components */  }
import { PubForm, Sidenav, AccountHeader } from '../../components';

function ProjectDraft (props)  {
        const pub_url = props.match.params.pub_url;

        /*
        =======================  
         Render component
        =======================
        */
        return (
                <main>
                        <Sidenav />

                        <AccountHeader  functionTitle="Szkic projektu" typeFunction="devices" />

                        <PubForm pubType="project" pubStyle="n-project" pubStatus="draft-pub" pub_url ={pub_url }   />
                </main>
        );
}

export default ProjectDraft;
