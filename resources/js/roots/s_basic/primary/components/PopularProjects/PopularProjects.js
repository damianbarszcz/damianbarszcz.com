import  React from 'react';
import Moment from 'react-moment';
import tinycolor from 'tinycolor2';
import LinesEllipsis from 'react-lines-ellipsis';

const PopularProjects = (props)  => {

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
                        <section className="popular-projects popular-projects_theme">
                                <div className="popular-projects__block wide-container">
                                       <div className="popular-projects__head">
                                                <header className="popular-projects__header popular-projects__header_modifier">
                                                        <h2 className="popular-projects__header--title"> { props.projectsObjThree.headerTitle } </h2>
                                                </header> 

                                                <div className="popular-projects__switchers">
                                                        <button type="button"  className="popular-projects__switchers-item popular-projects__switchers-item_effect" onClick={ props.chooseLeft }>
                                                                <i className="material-icons material__icon"> chevron_left  </i>
                                                        </button> 

                                                        <button type="button" className="popular-projects__switchers-item popular-projects__switchers-item_effect" onClick={ props.chooseRight }>
                                                                <i className="material-icons material__icon"> chevron_right </i>
                                                        </button> 
                                                </div>
                                        </div>
                                       
                                        <div className="popular-projects__inner">
                                                { props.latestProjects.slice(5,10).map(article =>
                                                <article key={ article.id } className="popular-projects__article popular-projects__article_modifier"   style={{ transform: `translateX(${props.position}px)`}}>
                                                        <a href={`/project/${article.pub_url}`} className="popular-projects__article-link popular-projects__article-link_effect" target="_self"  style={{backgroundColor: article.pub_color }}>
                                                                <header className="popular-projects__article-header popular-projects__article-header_modifier">
                                                                        <p className={`popular-projects__article-header--date ${ tinycolor(article.pub_color)._r > 245|| tinycolor(article.pub_color)._g > 245 || tinycolor(article.pub_color)._b > 245  ? 'text-dark' : 'text-light'}`}><Moment format="DD/MM/YYYY">{ article.date_of_publication }</Moment></p>
                                                                                                                                        
                                                                        <h3 className={`popular-projects__article-header--title ${ tinycolor(article.pub_color)._r > 245 || tinycolor(article.pub_color)._g > 245|| tinycolor(article.pub_color)._b > 245   ? 'text-dark' : 'text-light'}`}>   { article.pub_title }  </h3>
                                                                                
                                                                        <div className={`popular-projects__article-header--desc ${ tinycolor(article.pub_color)._r > 245 || tinycolor(article.pub_color)._g > 245 || tinycolor(article.pub_color)._b > 245  ? 'text-dark' : 'text-light'}`}><LinesEllipsis text={ article.pub_subtitle } maxLine="2" ellipsis='...' trimRight /></div>
                                                                </header>
                                                                 <div className="popular-projects__article-artwork">
                                                                        <img src={ article.pub_picture }  alt={ article.pub_title }  className="popular-projects__article-artwork--image" />
                                                                </div>
                                                        </a>
                                                </article>)}
                                         </div>
                                </div>
                        </section>
                </>
        );
}

export default PopularProjects ;