import  React from 'react';

const TopReview = (props) => {
    

   /*
    =======================
     Render component
    =======================
    */
    return (
            <>
                   {  /*----------------------------------------*/   }
                    {  /*--------      Top Review       -------*/   }
                    {  /*----------------------------------------*/   }
                    <section className="top-review top-review_theme">
                            <div className="top-review__block g-container">
                                 {  /*--- Top review > Block > Header ---*/   }
                                    <header className="top-review__header top-review__header_modifier">
                                            <h2 className="top-review__header--title"> { props.libraryObjTwo.headerTitle } </h2>
                                    </header>

                                    {  /*--- Top Review > Block > Inner ---*/   }
                                    <div className="top-review__inner">   { props.topReviewDisplay }   </div>
                            </div>
                    </section>
            </>
    );
}

export default TopReview;