import  React from 'react';

const LastReviews = (props) => {
    

   /*
    =======================
     Render component
    =======================
    */
    return (
            <>
                    {  /*----------------------------------------*/   }
                    {  /*--------       Last reviews     -------*/   }
                    {  /*----------------------------------------*/   }
                    <section className="last-reviews last-reviews_theme">
                            <div className="last-reviews__block g-container">
                                    {  /*--- Last reviews > Block > Header ---*/   }
                                    <header className="last-reviews__header last-reviews__header_modifier">
                                            <h2 className="last-reviews__header--title"> { props.libraryObjThree.headerTitle } </h2>
                                    </header>

                                    {  /*--- Last reviews > Block > Inner ---*/   }
                                    <div className="last-reviews__inner">    {  props.lastReviewsDisplay }   </div>
                            </div>
                    </section>
            </>
    );
}

export default LastReviews;