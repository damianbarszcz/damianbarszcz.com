import React  from 'react';
import LinesEllipsis from 'react-lines-ellipsis';

/*
=================================
Get new publication (Index Component)
=================================
*/
export function getNewPublication(props) {
        return  (
                props.newPubCollection.slice(0,1).map( article =>
                        <article key={ article.id } className="new-pub__article new-pub__article_modifier">
                        <a href={ `/${article.pub_category ? 'review' :  'project'}/${ article.pub_url }` }  className="new-pub__article-link new-pub__article-link_modifier" target="_self">
                                <div className="new-pub__article-artwork new-pub__article-artwork_modifier" style={{ background:  `url( ${article.pub_picture })` }}> </div>    
        
                                <header className="new-pub__article-header new-pub__article-header_modifier">
                                        <h1 className="new-pub__article-header--title">{ article.pub_title }</h1> 
                                                
                                        <span className="new-pub__article-header--desc">
                                                <LinesEllipsis text={ article.pub_subtitle } maxLine='2' ellipsis='...' trimRight />
                                        </span>
                                </header>
        
                                <div className="new-pub__article-category new-pub__article-category_modifier" data-article-category={ article.pub_category ? 'Book' :  'Project' } >{ article.pub_category ? 'Book' :  'Project' }  </div>
                        </a>
                </article>
                 )
        );   
}

/*
============================
Get project with left  & right side
============================
*/
    
export function getLeftSideProjects(props,a,b) {
        return props.projectsCollection.slice(a,b).map(article =>
    
        <article key={ article.id } className="projects__article projects__article_modifier">
                <a href={ `/project/${article.pub_url }`}  className="projects__article-link projects__article-link_modifier" target="_self">
                        <header className="projects__article-header">
                                <h2 className="projects__article-header--title">{ article.pub_title } </h2>
        
                                <span className="projects__article-header--desc">
                                        <LinesEllipsis text={ article.pub_subtitle } maxLine="2" ellipsis='...' trimRight />
                                </span>
                        </header>
        
                        <div className="projects__article-artwork" style={{ background: `url( ${ article.pub_picture } )` }}></div>
                </a>
         </article> )
}

export function getRightSideProjects(props,a,b) {
        return props.projectsCollection.slice(a,b).map(article =>
    
        <article key={ article.id } className="projects__article projects__article_modifier">
                <a href={ `/project/${article.pub_url }`}  className="projects__article-link projects__article-link_modifier" target="_self">
                        <header className="projects__article-header">
                                <h2 className="projects__article-header--title">{ article.pub_title } </h2>
        
                                <span className="projects__article-header--desc">
                                        <LinesEllipsis text={ article.pub_subtitle }  maxLine="3" ellipsis='...' trimRight />
                                </span>
                        </header>
        
                        <div className="projects__article-artwork" style={{ background: `url( ${ article.pub_picture } )` }}></div>
                 </a>
        </article> )
}

/*
 ===================================
 Display new project (Projects Component)
===================================
*/
 export function newProjectDisplay(props) {
        return props.projectsCollection.slice(0, 1).map(article =>
        <article key={ article.id } className="new-project__article">
                <a href={`/project/${article.pub_url}`} className="new-project__article-link new-project__article-link_modifier" target="_self">
                        <div className="new-project__article-artwork" style={{ background: `url( ${ article.pub_picture } )` }}></div>

                        <div className="new-project__article-content">
                                <header className="new-project__article-header">
                                        <h2 className="new-project__article-header--title">   { article.pub_title }  </h2>

                                        <span className="new-project__article-header--desc">  <LinesEllipsis text={ article.pub_subtitle } maxLine='4' ellipsis='...' trimRight /> </span>
                                </header>
                        </div>
                </a>
        </article>
        );
}

/*
 =======================================
Old latest-projects display (Projects Component)
=======================================
*/
export function oldProjectsDisplay(props) {
        return props.projectsCollection.slice(4, 8).map(article =>
        <article key={ article.id } className="old-projects__article old-projects__article_modifier">
                <a href={`/project/${article.pub_url}`} className="old-projects__article-link old-projects__article-link_effect" target="_self">
                        <div className="old-projects__article-artwork" style={{ background: `url( ${ article.pub_picture } )` }}></div>

                        <header className="old-projects__article-header">
                                <h3 className="old-projects__article-header--title"> { article.pub_title } </h3>

                                <span className="old-projects__article-header--desc"> <LinesEllipsis text={ article.pub_subtitle } maxLine='2' ellipsis='...' trimRight /> </span>
                        </header>
                </a>
        </article>
        );
}

/*
==================================
 Get reviews carousel (Index Component)
==================================
 */

export function getReviewsCarousel(props){
        return ( 
         <React.Fragment>
                 <div className="library-books__info" style={{ transform: `translateX(${ props.position }%)`}}>
                         <p className="library-books__info--desc">
                                 Recezje książek które przeczytałem i które polecam z zakresu programowania, biznesu, astronomii oraz rozwoju osobistego. 
                                 Pubikacje te stanowią dla mnie zarówno obowiązek jak I przyjemność.
                         </p>
                 </div>

                 { props.reviewsCollection.map(article =>
                 <article key={ article.id } className="library-books__article library-books__article_modifier"  style={{ transform: `translateX(${ props.position }%)`}}>
                         <a href={ `/review/${article.pub_url }`}  className="library-books__article-link library-books__article-link_modifier" target="_self">
                                 <div className="library-books__article-artwork" style={{ background: `url( ${ article.pub_picture } )` }}></div>

                                 <header className="library-books__article-header library-books__article-header_modifier">
                                         <h3 className="library-books__article-header--title">{ article.pub_title } </h3>

                                         <span className="library-books__article-header--desc"><LinesEllipsis text={ article.pub_subtitle }  maxLine='2' ellipsis='...' trimRight /> </span>
                                 </header>

                                 <div className="library-books__article-category library-books__article-category_modifier" data-book-category={ article.pub_category }>{ article.pub_category }</div>
                         </a>
                 </article>) }
         </React.Fragment>
         );
 }

/*
=======================================
Display popular reviews (Reviews Component)
=======================================
*/
export function popularReviews(props){
        return props.reviewsCollection.slice(0,4).map(article =>
        <article key={ article.id }  className="popular__article"  style={{ background:  `url( ${article.pub_picture })` }}>
                <a href={ `/review/${article.pub_url }`}  className="popular__article-link popular__article-link_modifier" target="_self">
                        <header className="popular__article-header">
                                <h3 className="popular__article-header--title">{ article.pub_title }</h3>

                                <div className="popular__article-header-category popular__article-header-category_modifier">{ article.pub_category }</div>
                        </header>
                </a>
        </article> );
}

/*
=======================
Display related article
=======================
*/

export function relatedDisplay(props) {
        return props.randArticle.slice(0,3).map(article =>

        <article key={ article.id } className="related__article related__article_modifier">
                <a href={`/${ article.pub_category ? 'review' : 'project' }/${article.pub_url}`}  className="related__article-link related__article-link_modifier" target="_self">
                        <div className="related__article-artwork" style={{ background: `url( ${ article.pub_picture } )` }}></div>

                        <header className="related__article-header">
                                <h2 className="related__article-header--title"> { article.pub_title } </h2>

                                <span className="related__article-header--desc"><LinesEllipsis text={ article.pub_subtitle }  maxLine='2' ellipsis='...' trimRight /></span>
                        </header>

                        { article.pub_category &&
                        <div className="related__article-category related__article-category_modifier" data-book-category={ article.pub_category }>{ article.pub_category }</div> }
                </a>
        </article>
    )
}

/*
=======================
Display last reviews
=======================
*/

export function lastReviewsDisplay(array){
        return array.slice(0,6).map(article =>
        <article key={ article.id } className="last-reviews__article  last-reviews__article_modifier">
                <a  href={ `/review/${article.pub_url }`}  className="last-reviews__article-link last-reviews__article-link_modifier" target="_self">
                        <div className="last-reviews__article-artwork" style={{ background: `url( ${ article.pub_picture } )` }}></div>

                        <header className="last-reviews__article-header last-reviews__article-header_modifier">
                                <h3 className="last-reviews__article-header--title">{ article.pub_title } </h3>

                                <span className="last-reviews__article-header--desc"><LinesEllipsis text={ article.pub_subtitle} maxLine='2' ellipsis='...' trimRight /></span>
                        </header>

                        <div className="last-reviews__article-category last-reviews__article-category_modifier" data-book-category={ article.pub_category }>{ article.pub_category }</div>
                </a>
        </article> );
}

export default {getNewPublication, getLeftSideProjects,   getRightSideProjects, getReviewsCarousel, newProjectDisplay,popularReviews, relatedDisplay,lastReviewsDisplay }

