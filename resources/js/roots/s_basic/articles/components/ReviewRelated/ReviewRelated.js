import  React from 'react';
import { relatedDisplay } from '../../../../global/Publications';


const ReviewRelated = (props) => {
    
   /*
    =======================
     Render component
    =======================
    */
    return (
            <>
                {  /*-----------------------------------*/   }
                {  /*--------        Related      -------*/   }
                {  /*-----------------------------------*/   }    
                <section className="related related_theme related--book">
                        <div className="related__block g-container">
                            {  /*---  Related > Block > Header ---*/   }
                            <header className="related__header related__header_modifier">
                                    <h2 className="related__header--title">
                                            <strong className="strong-title"> Zobacz również: </strong>    Dowiedz się więcej o książkach
                                    </h2>
                            </header>

                            {  /*---  Related > Block > Inner ---*/   }
                            <div className="related__inner">   { relatedDisplay(props.getRandArticle) }   </div>
                        </div>
                </section>
            </>
    );
}

export default ReviewRelated;