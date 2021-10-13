import  React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import { Link } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
        desktop: {
                breakpoint: { max: 1920, min: 1366 },
                items: 3,
        },

        smallDesktop: {
                breakpoint: { max: 1366, min: 1200 },
                items: 3,
        },

        tablet: {
                breakpoint: { max: 1200, min: 768 },
                items: 2
        },
        mobile: {
                breakpoint: { max:768, min: 0 },
                items: 1
        }
};

const LibrarySection = (props) => {
        const pubCollection = props.collection.slice(0,1).map(article=> article.pub_category)

        /*
        ============================
        Library section articles carousel
        ============================
        */
        const getReviewContent = () =>{                
                let startElementNumber = 0;

                if(pubCollection[0]){  startElementNumber = 1;  }

                else{   startElementNumber = 0;  }

                return props.reviews.slice(startElementNumber).map(article =>
                        <article key={ article.id } className="library-books__article library-books__article_modifier"  style={{ transform: `translateX(${ props.position }%)`}}>
                                <a href={ `/review/${article.pub_url }`}  className="library-books__article-link library-books__article-link_modifier" target="_self">
                                        <div className="library-books__article-media" style={{ background:  `url( ${article.pub_picture })` }}></div>

                                        <header className="library-books__article-header library-books__article-header_modifier">
                                                <h3 className="library-books__article-header--title">{ article.pub_title } </h3>

                                                <span className="library-books__article-header--desc"><LinesEllipsis text={ article.pub_subtitle }  maxLine='2' ellipsis='...' trimRight /> </span>
                                        </header>

                                        <div className="library-books__article-category library-books__article-category_modifier" data-book-category={ article.pub_category }>{ article.pub_category }</div>
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
                        <div className="library__block">
                            {  /*---  Library > Header ---*/   }
                            <div className="g-container">
                            <header className="library__header library__header_modifier">
                                   <h2 className="library__header--subtitle">{props.indexObjTwo.subTitle} </h2>

                                    <h1 className="library__header--title"> {props.indexObjTwo.title} </h1>

                                    <p className="library__header--desc"> {props.indexObjTwo.descryption} </p>

                                    <Link to="/library" type="button" className="btn--normal app__button--red library__header--button" target="_self"> Zobacz więcej  </Link>
                             </header>
                             </div>

                                {  /*---  Library > Books ---*/   }
                                 <div className="library-books library-books_modifier  wide-container">
                                        <div className="library-books__inner"> 
                                                <Carousel responsive={responsive } draggable={false} >
                                                        { getReviewContent() }
                                                </Carousel>
                                        </div>
                                </div>
                         </div>
                 </section>
            </>
    );
}

export default LibrarySection;