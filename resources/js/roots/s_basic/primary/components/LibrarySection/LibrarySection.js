import  React from 'react';
import { Link } from 'react-router-dom';

const LibrarySection = (props) => {
    

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
                                    <h2 className="library__header--title"> <strong className="strong-title">Biblioteka: </strong> Dowiedz się wiecej o książkach </h2>

                                    <Link to="/library" type="button" className="btn--normal app__button--red" target="_self"> Zobacz więcej  </Link>
                             </header>

                            {  /*---  Library > Books ---*/   }
                            <div className="library-books library-books_modifier">
                                    <div className="library-books__inner"> {  props.getReviewsCarousel } </div>

                                    {  /*---  Library > Books  > Buttons ---*/   }
                                    <div className="library-books__buttons">            
                                            { props.prevButton &&
                                            <button type="button" className="library-books__buttons-item library-books__buttons-item_modifier"  data-button="prev-button" onClick={ props.chooseLeft }>
                                                     <i className="material-icons ">chevron_left</i>
                                             </button> }
                                                        
                                            { props.nextButton &&
                                            <button type="button" className="library-books__buttons-item  library-books__buttons-item_modifier" data-button="next-button" onClick={ props.chooseRight }>
                                                     <i className="material-icons">chevron_right</i>
                                            </button> }
                                    </div>
                                </div>
                         </div>
                 </section>
            </>
    );
}

export default LibrarySection;