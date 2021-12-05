import  React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import Moment from 'react-moment';

const NewPublication = (props) => {
    
        /*
        =======================
        Render component
        =======================
        */
        return (
                <>
                        {  /*-----------------------------------------*/   }
                        {  /*--------        New pub          --------*/   }
                        {  /*-----------------------------------------*/   }    
                        <section className="new-pub new-pub_theme">
                                <div className="new-pub__block g-container">
                                        {  /*---  New pub > Inner  ---*/   }
                                        <div className="new-pub__pub-inner">
                                                { props.newPublication.slice(0,1).map( article =>
                                                <article key={ article.id } className="new-pub__pub-article new-pub__pub-article_modifier">
                                                        <a href={ `/${article.pub_category ? 'review' :  'project'}/${ article.pub_url }` }  className="new-pub__pub-article-link new-pub__pub-article-link_modifier" target="_self">
                                                                <div className="new-pub__article-media">
                                                                        <img alt={ article.pub_title } className="new-pub__pub-article-media--artwork" src={ article.pub_picture }  />
                                                                </div>

                                                                <div className="new-pub__pub-article-content">
                                                                        <header className="new-pub__pub-article-header new-pub__pub-article-header_modifier">
                                                                                <h1 className="new-pub__pub-article-header--title">{ article.pub_title }</h1> 
                                                                                        
                                                                                <span className="new-pub__pub-article-header--desc">
                                                                                        <LinesEllipsis text={ article.pub_subtitle } maxLine='2' ellipsis='...' trimRight />
                                                                                </span>

                                                                                <span className="new-pub__pub-article-header--desc">
                                                                                        <strong><Moment format="DD/MM/YYYY">{ article.date_of_publication }</Moment></strong>
                                                                                </span>
                                                                        </header>
                                        
                                                                        <div className="new-pub__pub-article-category new-pub__pub-article-category_modifier" data-article-category={ article.pub_category ? 'Book' :  'Project' } >{ article.pub_category ? 'Recenzja' :  'Projekt' }  </div>
                                                                </div>
                                                        </a>
                                                 </article> )
                                                }
                                        </div>
                                </div>
                        </section>
                </>
        );
}

export default NewPublication;