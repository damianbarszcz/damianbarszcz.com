import React  from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import Moment from 'react-moment';


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
         <>
                 { props.reviewsCarousel.map(article =>
                 <article key={ article.id } className="library-books__article library-books__article_modifier"  style={{ transform: `translateX(${ props.position }%)`}}>
                         <a href={ `/review/${article.pub_url }`}  className="library-books__article-link library-books__article-link_modifier" target="_self">
                                <div className="library-books__article-media" style={{ background:  `url( ${article.pub_picture })` }}> </div>

                                 <header className="library-books__article-header library-books__article-header_modifier">
                                         <h3 className="library-books__article-header--title">{ article.pub_title } </h3>

                                         <span className="library-books__article-header--desc"><LinesEllipsis text={ article.pub_subtitle }  maxLine='2' ellipsis='...' trimRight /> </span>
                                 </header>

                                 <div className="library-books__article-category library-books__article-category_modifier" data-book-category={ article.pub_category }>{ article.pub_category }</div>
                         </a>
                 </article>) }
         </>
         );
 }

/*
=======================================
Display popular reviews (Reviews Component)
=======================================
*/
export function popularReviews(props){
        return props.reviewsCollection.slice(0,4).map(article =>
        <article key={ article.id }  className="popular__article popular__article_modifier"  style={{ background:  `url( ${article.pub_picture })` }}>
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
        return props.randCollection.slice(0,3).map(article =>

        <article key={ article.id } className="related__rel-article related__rel-article_modifier">
                <a href={`/${ article.pub_category ? 'review' : 'project' }/${article.pub_url}`}  className="related__rel-article-link related__rel-article-link_modifier" target="_self">
                        <div className="related__rel-article-media" style={{ background:  `url( ${article.pub_picture })` }}> </div>

                        <header className="related__rel-article-header">
                                <h2 className="related__rel-article-header--title"> { article.pub_title } </h2>

                                <span className="related__rel-article-header--desc"><LinesEllipsis text={ article.pub_subtitle }  maxLine='2' ellipsis='...' trimRight /></span>
                        </header>

                        { article.pub_category &&
                        <div className="related__rel-article-category related__rel-article-category_modifier" data-book-category={ article.pub_category }>{ article.pub_category }</div> }
                </a>
        </article>
    )
}

/*
=======================
Display last reviews
=======================
*/

export function lastReviewsDisplay(props){
        return props.reviewsCollection.slice(1,7).map(article =>
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

/*
=======================
Top review
=======================
*/

export function topReviewDisplay(props){
        return props.reviewsCollection.slice(0,1).map(article =>
        <article key={ article.id } className="top-review__article  top-review__article_modifier">
                <a  href={ `/review/${article.pub_url }`}  className="top-review__article-link top-review__article-link_modifier" target="_self">
                        <div className="top-review__article-media">
                                <div className="top-review__article-media--artwork" style={{ background: `url( ${ article.pub_picture } )` }}></div>
                        </div>

                        <div className="top-review__article-content">
                                 <div className="top-review__article-category top-review__article-category_modifier" data-book-category={ article.pub_category }>{ article.pub_category }</div>

                                <header className="top-review__article-header top-review__article-header_modifier">
                                        <h3 className="top-review__article-header--title">{ article.pub_title } </h3>

                                        <span className="top-review__article-header--desc"><LinesEllipsis text={ article.pub_subtitle} maxLine='2' ellipsis='...' trimRight /></span>
                                </header>

                                <span className="top-review__article-header--desc">
                                        <br/>
                                        <strong><Moment format="DD/MM/YYYY">{ article.date_of_publication }</Moment></strong>
                                </span>
                        </div>
                </a>
        </article> );
}

export default {  getLeftSideProjects,   getRightSideProjects, getReviewsCarousel, newProjectDisplay,popularReviews, relatedDisplay,lastReviewsDisplay, topReviewDisplay }

