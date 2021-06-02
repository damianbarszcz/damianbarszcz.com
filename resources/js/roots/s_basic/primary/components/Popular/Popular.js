import  React from 'react';

const Popular = (props) => {
    

   /*
    =======================
     Render component
    =======================
    */
    return (
            <>
                {  /*----------------------------------------*/   }
                {  /*--------          Popular          -------*/   }
                {  /*----------------------------------------*/   }
                <section className="popular popular_theme">
                        <div className="popular__block g-container">
                                {  /*--- Popular  > Block > Header  ---*/   }
                                <header className="popular__header popular__header_modifier">
                                        <h2 className="popular__header--title"> { props.libraryObjFour.headerTitle } </h2>
                                 </header>
                                                
                                {  /*--- Last reviews > Block >  Inner  ---*/   }
                                 <div className="popular__inner">  { props.popularReviews } </div>
                        </div>
                 </section>
            </>
    );
}

export default Popular;