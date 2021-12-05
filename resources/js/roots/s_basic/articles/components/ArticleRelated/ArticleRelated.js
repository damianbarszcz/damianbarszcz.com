import  React from 'react';

const ArticleRelated = (props) => {
    
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
                <section className={`related related_theme ${props.sectionType}`}>
                        <div className="related__block g-container">
                                {  /*---  Related > Block > Header ---*/   }
                                <header className="related__header related__header_modifier">
                                        <h2 className="related__header--title"> { props.relatedHeaderTitle } </h2>
                                </header>

                                {  /*---  Related > Block > Rel-Inner ---*/   }
                                <div className="related__rel-inner">   { props.randArticles }   </div>
                        </div>
                </section>
            </>
    );
}

export default ArticleRelated;