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
                                            <h2 className="last-reviews__header--title">Ostatnie recezje</h2>
                                    </header>

                                    {  /*--- Last reviews > Block > Inner ---*/   }
                                    <div className="last-reviews__inner">
                                             { props.searchTerm=="" &&  props.lastReviewsDisplay ||  props.lastReviewsDisplays }

                                            { (props.searchResults.length == 0 && !props.searchTerm=="" )  ?
                                                    <div className="last-reviews__noarticle last-reviews__noarticle_modifier">
                                                         <header className="last-reviews__noarticle-header last-reviews__noarticle-header_modifier">
                                                                <h2 className="last-reviews__noarticle-header--title">Upps :(</h2>
     
                                                                <p className="last-reviews__noarticle-header--caption">Nie odnaleziono książek z tej kategorii.</p>
                                                        </header>
                                                </div> : '' }
                                     </div>
                            </div>
                    </section>
            </>
    );
}

export default LastReviews;