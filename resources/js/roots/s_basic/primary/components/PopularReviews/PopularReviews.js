import  React from 'react';

const PopularReviews = (props) => {
    

   /*
    =======================
     Render component
    =======================
    */
    return (
            <>
                {  /*--------------------------------------------*/   }
                {  /*--------      Popular Reviews    -------*/   }
                {  /*--------------------------------------------*/   }
                <section className="popular popular_theme">
                        <div className="popular__block g-container">
                                {  /*--- Popular  > Block > Header  ---*/   }
                                <header className="popular__header popular__header_modifier">
                                        <h2 className="popular__header--title"> { props.libraryObjFour.headerTitle } </h2>
                                 </header>
                                                
                                {  /*--- Last reviews > Block >  Inner  ---*/   }
                                 <div className="popular__inner">  
                                        { props.popularReviews.slice(0,4).map(article =>
                                        <article key={ article.id }  className="popular__article popular__article_modifier"  style={{ background:  `url( ${article.pub_picture })` }}>
                                                <a href={ `/review/${article.pub_url }`}  className="popular__article-link popular__article-link_modifier" target="_self">
                                                        <header className="popular__article-header">
                                                                <h3 className="popular__article-header--title">{ article.pub_title }</h3>

                                                                <div className="popular__article-header-category popular__article-header-category_modifier">{ article.pub_category }</div>
                                                        </header>
                                                </a>
                                        </article> )
                                        } 
                                 </div>
                        </div>
                 </section>
            </>
    );
}

export default PopularReviews;