import  React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

const ProjectsSection = (props) => {
    
   /*
    =======================
     Render component
    =======================
    */
    return (
            <>
                    {  /*----------------------------------------*/   }
                    {  /*--------         Projects           -------*/  }
                    {  /*----------------------------------------*/   }    
                    <section className="projects projects_theme">
                            <div className="projects__block wide-container">
                                        {  /*---  Projects > Header ---*/   }
                                        <header className="projects__header projects__header_modifier">
                                                <h2 className="projects__header--subtitle">{props.indexObjOne.subTitle} </h2>

                                                <h1 className="projects__header--title"> {props.indexObjOne.title}</h1>

                                                <p className="projects__header--desc"> {props.indexObjOne.descryption}</p>

                                                <Link to="/projects" type="button" className="btn--normal app__button--white projects__header--button" target="_self"> Zobacz więcej  </Link>
                                        </header>
                                        
                                        {  /*---  Projects > Inner  ---*/   }
                                        <div className="projects__inner projects__inner_modifier">
                                                <div className="projects__inner--top">
                                                {  props.projects.slice(1,3).map(article =>
                                                        <article key={ article.id } className="projects__article projects__article_modifier" style={{ background:  `url( ${article.pub_picture })` }}> 
                                                                 <a href={`/project/${article.pub_url}`} className="projects__article-link projects__article-link_effect" target="_self">
                                                                        <header className="projects__article-header projects__article-header_modifier">
                                                                                <h2 className="projects__article-header--title"> { article.pub_title }</h2>

                                                                                <span className="projects__article-header--date"><Moment format="DD/MM/YYYY">{article.date_of_publication}</Moment></span>
                                                                        </header>
                                                                </a>
                                                        </article>
                                                 ) }
                                                </div>

                                                <div className="projects__inner--bottom">
                                                {  props.projects.slice(3,6).map(article =>
                                                        <article  key={ article.id }  className="projects__article projects__article_modifier" style={{ background:  `url( ${article.pub_picture })` }}> 
                                                                <a href={`/project/${article.pub_url}`} className="projects__article-link projects__article-link_effect" target="_self">
                                                                        <header className="projects__article-header projects__article-header_modifier">
                                                                                <h2 className="projects__article-header--title">{ article.pub_title }</h2>

                                                                                <span className="projects__article-header--date"><Moment format="DD/MM/YYYY">{article.date_of_publication}</Moment></span>
                                                                         </header>
                                                                </a>
                                                        </article>   
                                                ) }
                                                </div>
                                        </div>
                             </div>
                    </section>
            </>
    );
}

export default ProjectsSection;