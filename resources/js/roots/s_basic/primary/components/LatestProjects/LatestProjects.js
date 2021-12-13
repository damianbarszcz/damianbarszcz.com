import  React from 'react';
import Moment from 'react-moment';
import LinesEllipsis from 'react-lines-ellipsis';

const LatestProjects = (props) => {
    
   /*
    =======================
     Render component
    =======================
    */
    return (
            <>
                    {  /*----------------------------------------*/   }
                    {  /*--------    Latest projects    -------*/   }
                    {  /*-----------------------------------------*/   }    
                        <section className="latest-projects latest-projects_theme">
                                <div className="latest-projects__block wide-container">
                                        {  /*---  Latest projects > Block > Header  ---*/   }
                                        <header className="latest-projects__header latest-projects__header_modifier">
                                                <h2 className="latest-projects__header--title"> { props.projectsObjTwo.headerTitle }  </h2>
                                        </header>

                                        {  /*---  Latest projects > Block > Inner  ---*/   }
                                        <div className="latest-projects__inner">
                                                {  props.latestProjects.slice(0,5).map(article =>
                                                <article key={ article.id } className="latest-projects__article latest-projects__article_modifier" style={{ background:  `url( ${article.pub_picture })` }}>
                                                        <a href={`/project/${article.pub_url}`} className="latest-projects__article-link latest-projects__article-link_effect" target="_self">
                                                                <div className="latest-projects__article-comment">
                                                                        <span className="latest-projects__article-comment--caption">Skomentuj </span>
                                                                </div>

                                                                <div className="latest-projects__article-timread"> 
                                                                        <span className="latest-projects__article-timread--caption"> <i className="material-icons material__icon"> schedule </i> { props.readingTime(article.pub_body) }  </span>
                                                                </div>

                                                                <header className="latest-projects__article-header latest-projects__article-header_modifier">  
                                                                        <p className="latest-projects__article-header--date"><Moment format="DD/MM/YYYY">{ article.date_of_publication }</Moment></p>

                                                                        <h3 className="latest-projects__article-header--title">   { article.pub_title }  </h3>

                                                                        <span className="latest-projects__article-header--subtitle"> <LinesEllipsis text={ article.pub_subtitle }  maxLine='2' ellipsis='...' trimRight /></span>
                                                                </header>
                                                        </a>
                                                </article>  ) }
                                    </div>
                            </div>
                     </section>
            </>
    );
}

export default LatestProjects;