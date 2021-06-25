import  React from 'react';
import Moment from 'react-moment';
import { ShareButtons } from '../../../primary/components';

const ArticleBody = (props) => {
    

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
                        {  /*---  Article > Block ---*/   }
                        <div className="article__block g-container">
                            {  /*---  Article > Block > Phero ---*/   }
                                <div className="article__phero">
                                     {  /*---  Article > Block > Phero > Artwork ---*/   }
                                        <div className="article__phero-artwork" style={{ background: `url( ${ props.pub_picture } )` }}></div>
                                      
                                        {  /*---  Article > Block > Phero > Header ---*/   }
                                        <header className="article__phero-header article__phero-header_modifier">
                                                <div className="article__phero-header--title">  <div dangerouslySetInnerHTML={{ __html:  props.pub_title }}></div> </div>

                                                <div className="article__phero-header--desc"> <div dangerouslySetInnerHTML={{ __html:  props.pub_subtitle }}></div></div>
                                        </header>                           
                                </div>

                                {  /*---  Article > Block > Component ---*/   }
                                <div className="article__component article__component_modifier">
                                        <div className="article__component-inner">
                                                <div className="article__component-info">
                                                        <span className="article__component-info--image"></span>
                                                        <span className="article__component-info--author"> Damian Barszcz   </span>
                                                        <span className="article__component-info--date"><strong> <Moment format="DD/MM/YYYY">{props.date_of_publication}</Moment></strong> </span>
                                                 </div>

                                                <div className="article__component-discussion">
                                                        <ShareButtons  typeSection= { props.typeSection } pubType={  props.pub_category ? 'review' : 'project'  } pubUrl={props.pub_url}  />
                                                </div>
                                            </div>
                                        </div>

                                        {  /*---  Article > Block > Content ---*/   }
                                        <div className="article__content">
                                                <div className="article__content-inner">
                                                        <div className="article__content--body">
                                                                <div dangerouslySetInnerHTML={{ __html:  props.pub_body }}></div> 
                                                        </div>
                                                </div>
                                        </div>
                                                
                                        {  /*---  Article > Block > Article holders ---*/   }
                                        { props.pub_tags &&
                                        <div className="article__holders">
                                                 <a href={`/help/search=${props.pub_tags.replace(/\s+/g, '-').toLowerCase()}`} type="button" className="article__holders-tag article__holders-tag_modifier" target="_self"> { props.pub_tags } </a>
                                        </div> }

                                        {  /*---  Article > Block > Discussion ---*/   }
                                        <div className="article__discussion">
                                                <div id="disqus_thread"></div>
                                        </div>
                                </div>
                        </article>
            </>
    );
}

export default ArticleBody;