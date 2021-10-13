import  React from 'react';

const NoReviews = (props) => {
    

   /*
    =======================
     Render component
    =======================
    */
    return (
            <>
                {  /*----------------------------------------*/   }
                {  /*--------      No Reviews       -------*/   }
                {  /*----------------------------------------*/   }
                <section className="no-projects no-projects_theme">
                        <div className="no-projects__block g-container">
                                <div className="no-projects__inner">
                                        {  /*--- No projects  > Block > Header  ---*/   }
                                        <div className="no-projects__inner-box">
                                                <img className="no-projects__inner-box-artwork-image" src="../images/projects/no-projects/no-projects.png"  alt="" />
                                        </div>

                                        <header className="no-projects__header no-projects__header_modifier">
                                                <h1 className="no-projects__header--title"> { props.libraryObjFive.headerTitle } </h1>

                                                <p className="no-projects__header--caption"> { props.libraryObjFive.headerCaption } </p>
                                        </header>
                                 </div>
                        </div>
                 </section>
            </>
    );
}

export default NoReviews;