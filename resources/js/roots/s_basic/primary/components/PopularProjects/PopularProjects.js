import  React from 'react';
import Moment from 'react-moment';
import tinycolor from 'tinycolor2';
import Carousel from "react-multi-carousel";
import LinesEllipsis from 'react-lines-ellipsis';
import "react-multi-carousel/lib/styles.css";

const responsive = {
        desktop: {
                breakpoint: { max: 1920, min: 1366 },
                items: 4,
        },

        smallDesktop: {
                breakpoint: { max: 1366, min: 1200 },
                items: 3,
        },

        tablet: {
                breakpoint: { max: 1200, min: 576 },
                items: 2
        },
        mobile: {
                breakpoint: { max: 576, min: 0 },
                items: 1
        }
};

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
                                       {  /*---  Latest projects > Block > Inner  ---*/   }
                                        <header className="popular-projects__header popular-projects__header_modifier">
                                                <h1 className="popular-projects__header--title"> { props.projectsObjThree.headerTitle } </h1>
                                        </header> 

                                        <div className="popular-projects__inner">
                                                <Carousel responsive={responsive } draggable={false} >
                                                        { props.latestProjects.slice(5,10).map(article =>
                                                        <article key={ article.id } className="popular-projects__article popular-projects__article_modifier">
                                                                <a href={`/project/${article.pub_url}`} className="popular-projects__article-link popular-projects__article-link_effect" target="_self"  style={{backgroundColor: article.pub_color }}>
                                                                        <header className="popular-projects__article-header popular-projects__article-header_modifier">
                                                                                <p className={`popular-projects__article-header--date ${ tinycolor(article.pub_color)._r > 245|| tinycolor(article.pub_color)._g > 245 || tinycolor(article.pub_color)._b > 245  ? 'text-dark' : 'text-light'}`}><Moment format="DD/MM/YYYY">{ article.date_of_publication }</Moment></p>
                                                                                                                                        
                                                                                <h2 className={`popular-projects__article-header--title ${ tinycolor(article.pub_color)._r > 245 || tinycolor(article.pub_color)._g > 245|| tinycolor(article.pub_color)._b > 245   ? 'text-dark' : 'text-light'}`}>   { article.pub_title }  </h2>
                                                                                
                                                                                <p className={`popular-projects__article-header--desc ${ tinycolor(article.pub_color)._r > 245 || tinycolor(article.pub_color)._g > 245 || tinycolor(article.pub_color)._b > 245  ? 'text-dark' : 'text-light'}`}>    <LinesEllipsis text={ article.pub_subtitle } maxLine="2" ellipsis='...' trimRight /> </p>
                                                                        </header>
                                                                        <div className="popular-projects__article-artwork">
                                                                                <img src={ article.pub_picture }  alt={ article.pub_title }  className="popular-projects__article-artwork--image" />
                                                                         </div>
                                                                </a>
                                                        </article>)}
                                                </Carousel>
                                         </div>
                                </div>
                        </section>
                </>
        );
}

export default PopularProjects ;