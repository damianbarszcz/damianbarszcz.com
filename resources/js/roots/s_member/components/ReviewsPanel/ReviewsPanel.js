import  React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const ReviewsPanel = (props) => {
    

   /*
    =======================
     Render component
    =======================
    */
    return (
            <>
                        {  /*---------------------------------*/   }
                        {  /*--------   Reviews      --------*/   }
                        {  /*---------------------------------*/    }   
                        <section className="reviews reviews_theme">
                                <div className="reviews__block">
                                        {  /*---  Reviews > Block > Inner  ---*/   } 
                                        <div className="reviews__inner">
                                                {  /*---  Reviews > Block > Inner > Item ---*/   } 
                                                { props.collection.map(article => 
                                                <div key={ article.id } className="reviews__inner-item reviews__inner-item_modifier">
                                                        <header className="reviews__inner-item-header">
                                                                <h2 className="reviews__inner-item-header--title">{ article.pub_title }</h2>

                                                                <span className="reviews__inner-item-header--desc"> <LinesEllipsis text={ article.pub_subtitle } maxLine='3' ellipsis='...' trimRight /> </span>
                                                        </header>

                                                        <div className="reviews__inner-item-category">
                                                                <p className="reviews__inner-item-category--desc">Kategoria: <strong data-book-category={ article.pub_category }>{ article.pub_category }</strong></p>
                                                        </div>

                                                        <div className="reviews__inner-item-pub">
                                                                <span className="reviews__inner-item-pub--author">Autor:  <strong>Damian Barszcz</strong></span>

                                                                <span className="reviews__inner-item-pub--date">Data: <strong><Moment format="DD/MM/YYYY">{article.date_of_publication}</Moment>  </strong></span>
                                                        </div>

                                                        { article.pub_tags &&
                                                        <div className="reviews__inner-item-tags">
                                                                <div className="reviews__inner-item-tags-item reviews__inner-item-tags-item_modifier">{ article.pub_tags }</div>
                                                        </div> }
                                                        
                                                        <div className="reviews__inner-item-action">
                                                                <div className="reviews__inner-item-action-buttons">
                                                                        <Link to={`/member/reviews/edit/${article.pub_url}`}  className="btn--small app__button--blue" target="_self"> Edytuj </Link>
                                                                        <button  className="btn--small app__button--red" onClick={ (e) => props.getModal(e,article.pub_title, article.pub_url) } target="_self"> Usu?? </button>
                                                                </div>
                                                        </div>
                                                </div>) }
                                        </div>
                                </div>
                        </section>
            </>
    );
}

export default ReviewsPanel;