import  React from 'react';
import Moment from 'react-moment';

const ProjectHero = (props) => {
    

   /*
    =======================
     Render component
    =======================
    */
    return (
            <>
                {  /*------------------------------------------*/   }
                {  /*--------         Project hero      -------*/   }
                {  /*------------------------------------------*/   }    
                <section className="project-hero project-hero_theme">
                        <div className="project-hero__block wide-container">
                                {  props.projects.slice(0,1).map(article =>
                                <article key={ article.id }  className="project-hero__article project-hero__article_modifier" style={{ background:  `url( ${article.pub_picture })` }}>
                                         <a href={`/project/${article.pub_url}`} className="project-hero__article-link project-hero__article-link_effect" target="_self">
                                                <header className="project-hero__article-header project-hero__article-header_modifier">
                                                        <a href={`/help/search=${article.pub_tags.replace(/\s+/g, '-').toLowerCase()}`}  className="project-hero__article-header--tags">{ article.pub_tags }</a>

                                                        <h1 className="project-hero__article-header--title"> { article.pub_title }</h1>

                                                        <p className="project-hero__article-header--desc"> { article.pub_subtitle }</p>

                                                        <p className="project-heros__article-header--date"><Moment format="DD/MM/YYYY">{ article.date_of_publication }</Moment></p>
                                                </header>
                                        </a>
                                </article> ) }
                         </div>
                </section>
            </>
    );
}

export default ProjectHero;