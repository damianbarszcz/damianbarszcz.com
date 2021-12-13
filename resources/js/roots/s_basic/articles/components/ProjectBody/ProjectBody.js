import  React from 'react';
import Moment from 'react-moment';
import Disqus from "disqus-react";
import tinycolor from 'tinycolor2';

function ProjectBody(props) {
        const disqusShortname = "localhost-gzakevtbxu"
        const disqusConfig = {
                url: "https://damianbarszcz.com",
                identifier: props.id,
                title: props.pub_title
        }

        const readingTime = (article) => {
                const text = article;
                const wpm = 300;
                const words =500;
                const time = Math.ceil(words / wpm);
                return time + " min. czytania";
        }

   /*
    =======================
     Render component
    =======================
    */
    return (
            <>
                {  /*-----------------------------------*/    }
                {  /*--------        Article        -------*/   }
                {  /*-----------------------------------*/    }    
                <article  className={`article article_theme ${ props.typeArticle }`}   style={{backgroundColor: props.pub_color }}>
                        <div className="article__head">
                                <header className="article__header article__header_modifier">
                                        <div className="article__header-inner g-container">
                                                <div className="article__header-data">
                                                        <div className={`article__header--date  ${ tinycolor(props.pub_color)._r > 245 || tinycolor(props.pub_color)._g > 245 || tinycolor(props.pub_color)._b > 253    ? 'text-dark' : 'text-light'}`}><Moment format="DD/MM/YYYY">{ props.date_of_publication }</Moment></div>
                                                </div>
                                                
                                                <h1 className={`article__header--title ${ tinycolor(props.pub_color)._r > 245 || tinycolor(props.pub_color)._g > 245 || tinycolor(props.pub_color)._b > 253    ? 'text-dark' : 'text-light'}`}> { props.pub_title } </h1>

                                                <p className={`article__header--subtitle ${ tinycolor(props.pub_color)._r > 245 || tinycolor(props.pub_color)._g > 245 || tinycolor(props.pub_color)._b > 253    ? 'text-dark' : 'text-light'}`}> { props.pub_subtitle } </p>

                                                <div className="article__header-timread"> 
                                                        <span className={`article__header-timread--caption ${ tinycolor(props.pub_color)._r > 245 || tinycolor(props.pub_color)._g > 245 || tinycolor(props.pub_color)._b > 253    ? 'text-dark' : 'text-light'}`}> 
                                                                <i className="material-icons material__icon"> schedule </i> { readingTime(props.pub_body) }  
                                                        </span>
                                                </div>
                                        </div>
                                </header>       

                                <figure className="article__head-media">
                                        <img src={ props.pub_picture }  className="article__head-media--artwork" alt={`Obraz artykułu + ${props.pub_title}`} />
                                </figure>
                         </div>
  
                        <div className="article__body article__body_modifier">
                                <div className="article__body-inner" dangerouslySetInnerHTML={{ __html:  props.pub_body }}></div> 
                        </div>
      
                        <div className="article__properties article__properties_modifier">
                                <div className="article__properties-inner g-container">
                                        <div className="article__properties-holders">
                                                <a href={`/help/search=${props.pub_tags}`} type="button" className="article__properties-holders-tag article__properties-holders-tag_effect" style={{backgroundColor: props.pub_color}} target="_self"> 
                                                        { props.pub_tags } 
                                                </a>
                                         </div>

                                        <div className="article__properties-author">
                                                <header className="article__properties-author-header">
                                                        <h3 className="article__properties-author-header--title">Autor</h3>
                                                </header>

                                                <div className="article__properties-author-inner">
                                                        <figure className="article__properties-author-media">
                                                                <img src="../../images/global/author.jpg" className="article__properties-author-media--artwork" alt="Obraz autora Damian Barszcz"/>
                                                        </figure >

                                                        <div className="article__properties-author-info">
                                                                <div className="article__properties-author-info--name"><strong>inż. Damian Barszcz</strong></div>
                                                                <div className="article__properties-author-info--role">Twórca bloga</div>
                                                         </div>
                                                </div>
                                        </div>
                                </div>
                        </div>

                        <div className="article__comment article__comment_modifier">
                                <div className="article__comment-inner g-container">
                                        <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
                                </div>
                        </div>
                </article>
            </>
    );
}

export default ProjectBody;