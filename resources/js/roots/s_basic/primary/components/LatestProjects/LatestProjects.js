import  React from 'react';
import Moment from 'react-moment';

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
                                                                <header className="latest-projects__article-header">
                                                                        <h2 className="latest-projects__article-header--title">   { article.pub_title }  </h2>

                                                                        <p className="latest-projects__article-header--date"><Moment format="DD/MM/YYYY">{ article.date_of_publication }</Moment></p>
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