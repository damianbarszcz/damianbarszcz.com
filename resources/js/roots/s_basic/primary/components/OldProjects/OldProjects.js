import  React from 'react';

const OldProjects = (props) => {
    
   /*
    =======================
     Render component
    =======================
    */
    return (
            <>
              {  /*----------------------------------------*/   }
              {  /*--------      Old projects       -------*/  }
              {  /*----------------------------------------*/   }    
               <section className="old-projects old-projects_theme">
                        <div className="old-projects__block g-container">
                            {  /*---  Latest projects > Block > Lines ---*/   }
                                 <div className="old-projects__lines">
                                        <span className="old-projects__lines-part old-projects__lines-part"></span>
                                        <span className="old-projects__lines-part old-projects__lines-part"></span>
                                        <span className="old-projects__lines-part old-projects__lines-part"></span>
                                        <span className="old-projects__lines-part old-projects__lines-part"></span>
                                </div>
                                                
                                {  /*---  Latest projects > Block > Inner ---*/   }
                                 <div className="old-projects__inner">  { props.oldProjectsDisplay}   </div>
                        </div>
                 </section>
            </>
    );
}

export default OldProjects;