import  React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import Moment from 'react-moment';

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
                                    <div className="top-review__inner">  
                                        { props.recommendedReview.slice(0,1).map(article =>
                                                <article key={ article.id } className="top-review__article  top-review__article_modifier">
                                                        <a  href={ `/review/${article.pub_url }`}  className="top-review__article-link top-review__article-link_modifier" target="_self">
                                                                <div className="top-review__article-media">
                                                                        <img alt={ article.pub_title } className="top-review__article-media--artwork" src={ article.pub_picture }  />
                                                                </div>

                                                                <div className="top-review__article-content">
                                                                        <div className="top-review__article-category top-review__article-category_modifier" data-book-category={ article.pub_category }>{ article.pub_category }</div>

                                                                        <header className="top-review__article-header top-review__article-header_modifier">
                                                                                <h3 className="top-review__article-header--title">{ article.pub_title } </h3>

                                                                                <span className="top-review__article-header--desc"><LinesEllipsis text={ article.pub_subtitle} maxLine='2' ellipsis='...' trimRight /></span>
                                                                        </header>

                                                                        <span className="top-review__article-header--desc">
                                                                                <br/>
                                                                                <strong><Moment format="DD/MM/YYYY">{ article.date_of_publication }</Moment></strong>
                                                                        </span>
                                                                </div>
                                                        </a>
                                                </article> )}
                                         </div>
                                 </div>
                    </section>
            </>
    );
}

export default TopReview;