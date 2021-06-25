import  React from 'react';
import Moment from 'react-moment';
import Color  from "color-thief-react";
import tinycolor from 'tinycolor2';


function PopularProjects (props)  {

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
                                       {  /*---  Latest projects > Block > Inner  ---*/   }
                                        <header className="popular-projects__header">
                                                <h1 className="popular-projects__header--title">Popularne</h1>
                                        </header>

                                        <div className="popular-projects__inner">
                                              { props.latestProjects.slice(5).map(article =>
                                               <article key={ article.id } className="popular-projects__article popular-projects__article_modifier">
                                                        <Color src={article.pub_picture} crossOrigin="anonymous" format="hex">
                                                        {({ data }) => (
                                                                <a href={`/project/${article.pub_url}`} className="popular-projects__article-link popular-projects__article-link_effect" target="_self"  style={{backgroundColor: data}}>
                                                                <header className="popular-projects__article-header popular-projects__article-header_modifier">
                                                                        <p className={`popular-projects__article-header--date ${ tinycolor(data)._r > 200 || tinycolor(data)._g > 200 || tinycolor(data)._b > 200   ? 'text-dark' : 'text-light'}`}><Moment format="DD/MM/YYYY">{ article.date_of_publication }</Moment></p>
                                                                                                                        
                                                                       <h2 className={`popular-projects__article-header--title ${ tinycolor(data)._r > 200 || tinycolor(data)._g > 200  || tinycolor(data)._b > 200    ? 'text-dark' : 'text-light'}`}>   { article.pub_title }  </h2>
                                                                
                                                                        <p className={`popular-projects__article-header--desc ${ tinycolor(data)._r > 200 || tinycolor(data)._g > 200  || tinycolor(data)._b > 200   ? 'text-dark' : 'text-light'}`}>   { article.pub_subtitle }  </p>
                                                                </header>
                                                                <div className="popular-projects__article-artwork">
                                                                         <img src={article.pub_picture}  alt={article.pub_title }  className="popular-projects__article-artwork--image" />
                                                                </div>
                                                                </a>)}
                                                        </Color>
                                                </article>  )}
                                         </div>
                                </div>
                        </section>
            </>
    );
}

export default PopularProjects ;