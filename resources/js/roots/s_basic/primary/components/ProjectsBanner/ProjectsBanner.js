import  React from 'react';

const ProjectsBanner = () => {
    

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
                <section className="projects-banner projects-banner_theme" role="banner">
                        <div className="projects-banner__block g-container">
                                 {  /*--- Projects banner > Block > Header  ---*/   }
                                <header className="projects-banner__header projects-banner__header_modifier">
                                        <h1 className="projects-banner__header--title">
                                                 <strong className="strong-title"> Projekty: </strong> Strefa najlepszych rozwiązań
                                        </h1>
                                </header>
                         </div>
                </section>
            </>
    );
}

export default ProjectsBanner;