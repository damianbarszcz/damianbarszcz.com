import  React from 'react';
import Moment from 'react-moment';
import LinesEllipsis from 'react-lines-ellipsis';

function Archives(props)  {

   /*
    =======================
     Render component
    =======================
    */
    return (
            <>
                    {  /*----------------------------------------*/   }
                    {  /*--------        Archives            -------*/   }
                    {  /*-----------------------------------------*/   }    
                        <section className="archives archives_theme">
                                <div className="archives__block g-container">
                                       {  /*---  Archives  > Block > Header  ---*/   }
                                        <header className="archives__header archives__header_modifier">
                                                <h2 className="archives__header--title">{ props.projectsObjFour.headerTitle } </h2>

                                                <p className="archives__header--desc"> { props.projectsObjFour.headerDesc } </p>
                                        </header>

                                        {  /*---  Archives  > Block > Inner  ---*/   }
                                        <div className="archives__inner">
                                                { props.latestProjects.slice(10,18).map(article =>
                                               <article key={ article.id } className="archives__article archives__article_modifier">
                                                        <a href={`/project/${article.pub_url}`} className="archives__article-link archives__article-link_effect" target="_self">
                                                                <div className="archives__article-wrapper">
                                                                        <div className="archives__article-artwork">
                                                                                <img src={article.pub_picture}  alt={article.pub_title }  className="archives__article-artwork--image" />
                                                                        </div>

                                                                        <header className="archives__article-header archives__article-header_modifier">
                                                                                <h3 className="archives__article-header--title">{ article.pub_title }</h3>
                                                                        
                                                                                <div className="archives__article-header--desc"><LinesEllipsis text={ article.pub_subtitle } maxLine='2' ellipsis='...' trimRight /></div>

                                                                                <p className="archives__article-header--date"><Moment format="DD/MM/YYYY">{ article.date_of_publication }</Moment></p>
                                                                        </header>
                                                                </div>
                                                        </a>
                                                </article>  )}
                                        </div>
                                </div>
                        </section>
            </>
    );
}

export default Archives;