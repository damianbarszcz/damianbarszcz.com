import  React from 'react';

const NewProject = (props) => {
    

   /*
    =======================
     Render component
    =======================
    */
    return (
            <>
                    {  /*----------------------------------------*/   }
                    {  /*--------     New project       -------*/   }
                    {  /*----------------------------------------*/   }    
                    <section className="new-project new-project_theme">
                            <div className="new-project__block g-container">
                                    {  /*--- New project > Block > Inner  ---*/   }
                                    <div className="new-project__inner"> { props.newProjectDisplay } </div>
                            </div>
                    </section>
            </>
    );
}

export default NewProject;