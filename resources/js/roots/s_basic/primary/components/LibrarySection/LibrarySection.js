import  React, {useState} from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import { Link } from 'react-router-dom';

const LibrarySection = (props) => {

        /*
        ============================
        Library section articles carousel
        ============================
        */
        const getReviewContent = () =>{                
                return props.reviews.map(article =>
                        <article key={ article.id } className="library__books-article library__books-article_modifier"  style={{ transform: `translateX(${props.position}px)`}}>
                                <a href={ `/review/${article.pub_url }`}  className="library__books-article-link library__books-article-link_modifier" target="_self">
                                        <div className="library__books-article-media" style={{ background:  `url( ${article.pub_picture })` }}></div>

                                        <header className="library__books-article-header library__books-article-header_modifier">
                                                <h3 className="library__books-article-header--title">{ article.pub_title } </h3>

                                                <span className="library__books-article-header--desc"><LinesEllipsis text={ article.pub_subtitle }  maxLine='2' ellipsis='...' trimRight /> </span>
                                        </header>

                                        <div className="library__books-article-category library__books-article-category_modifier" data-book-category={ article.pub_category }>{ article.pub_category }</div>
                                </a>
                        </article>
                ) 
        }

   /*
    =======================
     Render component
    =======================
    */
    return (
            <>
                {  /*---------------------------------------*/   }
                {  /*--------          Library           -------*/  }
                {  /*---------------------------------------*/   }    
                 <section className="library library_theme">
                        <div className="library__block g-container">
                                {  /*---  Library > Header ---*/   }
                                <header className="library__header library__header_modifier">
                                         <h2 className="library__header--subtitle">{props.indexObjTwo.subTitle}  </h2>

                                        <h1 className="library__header--title"> {props.indexObjTwo.title}  </h1>

                                        <p className="library__header--desc"> {props.indexObjTwo.descryption} </p>

                                        <Link to="/library" type="button" className="btn--normal app__button--red library__header--button" target="_self"> Zobacz więcej  </Link>
                                </header>
                          
                                {  /*---  Library > Books ---*/   }
                                 <div className="library__books library__books_modifier">
                                        <div className="library__books-inner"> 
                                                 { getReviewContent() }
                                        </div>

                                        <div className="library__books-switchers">
                                                { props.prevButton &&
                                                <button type="button"  data-button-type="prev-button" className="library__books-switchers-item library__books-switchers-item_effect" onClick={ props.chooseLeft }>
                                                        <i className="material-icons material__icon"> chevron_left  </i>
                                                </button> }
                                                { props.nextButton  &&
                                                <button type="button" data-button-type="next-button" className="library__books-switchers-item library__books-switchers-item_effect" onClick={ props.chooseRight }>
                                                        <i className="material-icons material__icon"> chevron_right </i>
                                                </button> }
                                        </div>
                                </div>
                         </div>
                 </section>
            </>
    );
}

export default LibrarySection;