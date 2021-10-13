import  React from 'react';

{  /*  Components */  }
import { PubForm, Sidenav, AccountHeader } from '../../components';

function EditProject (props)  {
        const pub_url = props.match.params.pub_url;

        /*
        =======================  
         Render component
        =======================
        */
        return (
                <main>
                        <Sidenav />

                        <AccountHeader  functionTitle="Edytuj projekt" typeFunction="devices" />

                        <PubForm pubType="project" pubStyle="n-project" pubStatus="edit-pub" pub_url ={pub_url }   />
                </main>
        );
}

export default EditProject;
