import  React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';

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
                                    <div className="last-reviews__rev-inner">    
                                        {  props.lastReviews.slice(1,7).map(article =>
                                                <article key={ article.id } className="last-reviews__rev-article  last-reviews__rev-article_modifier">
                                                        <a  href={ `/review/${article.pub_url }`}  className="last-reviews__rev-article-link last-reviews__rev-article-link_modifier" target="_self">
                                                                <div className="last-reviews__rev-article-media" style={{ background: `url( ${ article.pub_picture } )` }}></div>

                                                                <header className="last-reviews__rev-article-header last-reviews__rev-article-header_modifier">
                                                                        <h3 className="last-reviews__rev-article-header--title">{ article.pub_title } </h3>

                                                                        <span className="last-reviews__rev-article-header--desc"><LinesEllipsis text={ article.pub_subtitle} maxLine='2' ellipsis='...' trimRight /></span>
                                                                </header>

                                                                <div className="last-reviews__rev-article-category last-reviews__rev-article-category_modifier" data-book-category={ article.pub_category }>{ article.pub_category }</div>
                                                        </a>
                                                </article>  ) 
                                        } 
                                        </div>
                            </div>
                    </section>
            </>
    );
}

export default LastReviews;