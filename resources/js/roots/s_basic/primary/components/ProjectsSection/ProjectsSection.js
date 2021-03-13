import  React from 'react';
import { Link } from 'react-router-dom';

const ProjectsSection = (props) => {
    
   /*
    =======================
     Render component
    =======================
    */
    return (
            <>
                    {  /*----------------------------------------*/   }
                    {  /*--------         Projects           -------*/  }
                    {  /*----------------------------------------*/   }    
                    <section className="projects projects_theme">
                            <div className="projects__block g-container">
                                    {  /*---  Projects > Header ---*/   }
                                    <header className="projects__header projects__header_modifier">
                                            <h2 className="projects__header--title"> <strong className="strong-title">Projekty: </strong> Strefa najlepszych rozwiązań </h2>

                                            <Link to="/projects" type="button" className="btn--normal app__button--blue" target="_self"> Zobacz więcej  </Link>
                                    </header>

                                    {  /*---  Projects > Inner  ---*/   }
                                    <div className="projects__inner projects__inner_modifier">
                                            <div className="projects__inner-left">{ props.getLeftSideProjects }</div>

                                            <div className="projects__inner-right">{ props.getRightSideProjects }</div>
                                    </div>
                             </div>
                    </section>
            </>
    );
}

export default ProjectsSection;