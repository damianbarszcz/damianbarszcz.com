import  React from 'react';
import Moment from 'react-moment';
import Disqus from "disqus-react"
import tinycolor from 'tinycolor2';

function ProjectBody(props) {
    const disqusShortname = "localhost-gzakevtbxu"
    const disqusConfig = {
        url: "https://damianbarszcz.com",
        identifier: props.id,
        title: props.pub_title
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
                <article  className={`article article_theme ${props.typeArticle}`}>
                        <div className="article__head" style={{backgroundColor: props.pub_color }}>
                                <div className="article__head-inner g-container">
                                        {  /*---  Article > Head > Header  ---*/   }
                                        <header className="article__head-header article__head-header_modifier">
                                                <h1 className={`article__head-header--title ${ tinycolor(props.pub_color)._r > 245 || tinycolor(props.pub_color)._g > 245 || tinycolor(props.pub_color)._b > 245 ? 'text-dark' : 'text-light'}`}> { props.pub_title } </h1>

                                                <p className={`article__head-header--caption ${ tinycolor(props.pub_color)._r > 245 || tinycolor(props.pub_color)._g > 245  || tinycolor(props.pub_color)._b > 245   ? 'text-dark' : 'text-light'}`}> { props.pub_subtitle } </p>

                                                <p className={`article__head-header--caption ${ tinycolor(props.pub_color)._r > 245 || tinycolor(props.pub_color)._g > 245 || tinycolor(props.pub_color)._b > 245  ? 'text-dark' : 'text-light'}`}><strong><Moment format="DD/MM/YYYY">{ props.date_of_publication }</Moment></strong></p>
                                        </header>         
                              
                                        {  /*---  Article > Head > Artwork  ---*/   }
                                        <div className="article__head-artwork" style={{ background: `url( ${ props.pub_picture } )` }}></div>
                                </div>
                        </div>
    
                        <div className="article__body g-container">
                                <div className="article__body-content article__body-content_modifier">
                                        <div dangerouslySetInnerHTML={{ __html:  props.pub_body }}></div> 
                                </div>

                                <div className="article__body-holders article__body-holders_modifier">
                                        <a href={`/help/search=${props.pub_tags}`} type="button" className="article__body-holders-tag article__body-holders-tag_effect" target="_self"> { props.pub_tags } </a>
                                </div> 

                                <div className="article__body-comment">
                                        <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
                                </div>
                        </div>
                </article>
            </>
    );
}

export default ProjectBody;