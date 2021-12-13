import  React from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import LinesEllipsis from 'react-lines-ellipsis';

function ProjectsSection(props){
        const pubCollection = props.collection.slice(0,1).map(article=> article.pub_category)

        /*
        ============================
        Project section articles carousel
        ============================
        */
        const getProjectContent = (startElementNumber,endElementNumber) =>{
                return  props.projects.slice(startElementNumber, endElementNumber).map(article =>
                <article key={ article.id } className="projects__article projects__article_modifier" style={{ background:  `url( ${article.pub_picture })` }}> 
                        <a href={`/project/${article.pub_url}`} className="projects__article-link projects__article-link_effect" target="_self">
                                <div className="projects__article-comment">
                                        <span className="projects__article-comment--caption">Skomentuj </span>
                                </div>

                                <div className="projects__article-timread"> 
                                        <span className="projects__article-timread--caption"> <i className="material-icons material__icon"> schedule </i> { props.readingTime(article.pub_body) }  </span>
                                </div>

                                <header className="projects__article-header projects__article-header_modifier">
                                        <span className="projects__article-header--date"><Moment format="DD/MM/YYYY">{article.date_of_publication}</Moment></span>

                                        <h2 className="projects__article-header--title"> { article.pub_title }</h2>

                                        <span  className="projects__article-header--subtitle"> <LinesEllipsis text={ article.pub_subtitle }  maxLine='2' ellipsis='...' trimRight /></span>
                                </header>
                        </a>
                </article>
                 ) 
        }

        /*
        ============================
        Project section content on top
        ============================
        */
        const getProjectContentPart1 = () =>{
                let startElementNumber = 0;
                let endElementNumber = 0;

                if(pubCollection[0]){  startElementNumber = 0;  endElementNumber = 2;  }

                else{   startElementNumber = 1; endElementNumber = 3;  }

                return  getProjectContent(startElementNumber,endElementNumber);         
        }

        /*
        ============================
        Project section content on bottom
        ============================
        */
        const getProjectContentPart2 = () =>{
                let startElementNumber = 0;
                let endElementNumber = 0;

                if(pubCollection[0]){ startElementNumber =2; endElementNumber = 5;  }

                else{ startElementNumber = 3; endElementNumber = 6;  }

                return  getProjectContent(startElementNumber,endElementNumber);
        }

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
                                                <div className="projects__inner--top"> { getProjectContentPart1() }  </div>

                                                <div className="projects__inner--bottom">  { getProjectContentPart2() }  </div>
                                        </div>
                                </div>
                        </section>
                </>
        );
}

export default ProjectsSection;