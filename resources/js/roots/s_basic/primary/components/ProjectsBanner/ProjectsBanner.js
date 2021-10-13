import  React from 'react';
import Typewriter from 'typewriter-effect';

const ProjectsBanner = (props) => {

   /*
    =======================
     Render component
    =======================
    */
    return (
            <>
                {  /*------------------------------------------*/   }
                {  /*--------    Projects banner    -------*/   }
                {  /*------------------------------------------*/   }    
                <section className="projects-banner projects-banner_theme">
                        <div className="projects-banner__block g-container">
                            {  /*---  Projects banner > Header ---*/   }
                            <header className="projects-banner__header projects-banner__header_modifier">
                                    <h1 className="projects-banner__header--title"> 
                                            <strong>{ props.projectsObjOne.headerStrongTitle } </strong> 
                                            <Typewriter options={{  strings: [props.projectsObjOne.headerTitle ], autoStart: true, loop: true}} />
                                     </h1>
                             </header>
                         </div>
                </section>
            </>
    );
}

export default ProjectsBanner;