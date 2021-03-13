import  React from 'react';

const LatestProjects = (props) => {
    

   /*
    =======================
     Render component
    =======================
    */
    return (
            <>
                    {  /*----------------------------------------*/   }
                    {  /*--------    Latest projects    -------*/   }
                    {  /*-----------------------------------------*/   }    
                    <section className="latest-projects latest-projects_theme">
                            <div className="latest-projects__block g-container">
                                    {  /*---  Latest projects > Block > Header  ---*/   }
                                    <header className="latest-projects__header">
                                            <h2 className="latest-projects__header--title">Ostatnie projekty</h2>
                                    </header>
                                    {  /*---  Latest projects > Block > Inner  ---*/   }
                                    <div className="projects__inner">
                                            <div className="projects__inner-left">  { props.getLeftSideProjects } </div>

                                            <div className="projects__inner-right"> { props.getRightSideProjects } </div>
                                    </div>
                            </div>
                     </section>
            </>
    );
}

export default LatestProjects;