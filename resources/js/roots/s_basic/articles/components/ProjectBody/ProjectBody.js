import  React from 'react';
import Moment from 'react-moment';
import { scrollToDiscussion } from '../../../../global/onChange';

const ProjectBody = (props) => {
    

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
                <article  className="article article--project article_theme">
                        {  /*---  Article > Block ---*/   }
                        <div className="article__block g-container">
                            {  /*---  Article > Block > Phero ---*/   }
                            <div className="article__phero">
                                {  /*---  Article > Block > Phero > Header ---*/   }
                                <header className="article__phero-header article__phero-header_modifier">
                                        <div className="article__phero-header--title">  <div dangerouslySetInnerHTML={{ __html:  props.project.pub_title }}></div> </div>

                                        <div className="article__phero-header--desc"> <div dangerouslySetInnerHTML={{ __html:  props.project.pub_subtitle }}></div></div>
                                </header>
                                                        
                                {  /*---  Article > Block > Phero > Artwork ---*/   }
                                        <div className="article__phero-artwork" style={{ background: `url( ${ props.project.pub_picture } )` }}></div>
                                </div>

                                {  /*---  Article > Block > Component ---*/   }
                                <div className="article__component article__component_modifier">
                                        <div className="article__component-inner">
                                                <div className="article__component-info">
                                                        <span className="article__component-info--image"></span>
                                                        <span className="article__component-info--author"> Damian Barszcz </span>
                                                        <span className="article__component-info--date"> <Moment format="DD/MM/YYYY">{props.project.date_of_publication}</Moment> </span>
                                                 </div>

                                                <div className="article__component-discussion">
                                                        <div className="article__component-discussion-share">
                                                                <a href="https://www.facebook.com/sharer/sharer.php?u=damianbarszcz.com" className="article__component-discussion-share-social" target="_blank"> <span className="social__icon fab fa-facebook"></span> </a>
                                                                <a href="htarticle__component-sharetps://twitter.com/intent/tweet" className="article__component-discussion-share-social" target="_blank"> <i className="social__icon fab fa-twitter"></i> </a>
                                                                <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site http://www.damianbarszcz.com." className="article__component-discussion-share-social" target="_blank"> <span className="social__icon fas fa-envelope"></span> </a>
                                                        </div>

                                                        <div className="article__component-discussion-join">
                                                                <a type="button"  className="btn--small app__button--blue" onClick= { () => scrollToDiscussion() } >Dyskusja</a>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>

                                        {  /*---  Article > Block > Content ---*/   }
                                        <div className="article__content">
                                                <div className="article__content-inner">
                                                        <div className="article__content--body">
                                                                <div dangerouslySetInnerHTML={{ __html:  props.project.pub_body }}></div> 
                                                        </div>
                                                </div>
                                        </div>
                                                
                                        {  /*---  Article > Block > Article holders ---*/   }
                                        { props.project.pub_tags &&
                                        <div className="article__holders">
                                                <div className="article__holders-tags">
                                                        <a href={'/search?search=' + `${props.project.pub_tags}`} type="button" className="btn--small app__button--dark" target="_self"> { props.project.pub_tags } </a>
                                                </div>
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

export default ProjectBody;