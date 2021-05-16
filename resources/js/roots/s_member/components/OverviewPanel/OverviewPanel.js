import  React from 'react';
import Calendar from 'react-calendar';
import Moment from 'react-moment';
import 'react-calendar/dist/Calendar.css';

const OverviewPanel = (props) => {
    

   /*
    =======================
     Render component
    =======================
    */
    return (
                 <>
                        {  /*-------------------------------*/   }
                        {  /*--------  Overview  -------*/    }
                        {  /*-------------------------------*/   }
                        <section className="overview overview_theme">
                                <div className="overview__block">
                                        {  /*---  Overview > Block > Header ---*/   }
                                        <header className="overview__header overview__header_modifier">
                                                <span className="overview__header-square overview__header-square_modifier"><i className="material-icons material-icons-outlined"> home </i> </span>

                                                <div className="overview__header-content">
                                                        <h1 className="overview__header-content--title"> Przegląd  </h1>
                                                        
                                                        <p className="overview__header-content--subtitle"> Pulpit | Przegląd </p>
                                                </div>
                                        </header>

                                        <div className="overview__inner">
                                                 {  /*---  Overview > Block > Inner > Pub   ---*/   }
                                                <div className="overview__inner-pub overview__inner-pub_modifier">
                                                        <header className="overview__inner-header overview__inner-header_modifier">
                                                                <h1 className="overview__inner-header--title"><strong>Publikacje </strong></h1>

                                                                <p className="overview__inner-header--subtitle"><strong>Wszystkie</strong></p>
                                                        </header>

                                                        <div className="overview__inner-content overview__inner-content_modifier">
                                                                { props.pubCollection.slice(0,9).map((article,i) =>
                                                                <a key={ i + 1 } href={ `/${article.pub_category ? 'review' :  'project'}/${article.pub_url }`}  className="overview__inner-content-link overview__inner-content-link_modifier" target="_self">
                                                                        <span className="overview__inner-content-link--id">{ i + 1 }</span>        
                                                                        <span className="overview__inner-content-link--title">{article.pub_title}</span>    
                                                                        <span className="overview__inner-content-link--date"><Moment format="DD/MM/YYYY">{article.date_of_publication}</Moment></span>    
                                                                        <span className="overview__inner-content-link--ico"><i className="material-icons">keyboard_arrow_right</i></span>    
                                                                </a>)}
                                                        </div>
                                                </div>
                                                
                                                {  /*---  Overview > Block > Inner > About  ---*/   }
                                                <div className="overview__inner-about overview__inner-about_modifier">
                                                        <header className="overview__inner-header overview__inner-header_modifier">
                                                                <h2 className="overview__inner-header--title"><strong>Statystyki publikacji</strong></h2>
                                                        </header>

                                                        <div className="overview__inner-stats">
                                                                <div className="overview__inner-stats-item">
                                                                        <div className="overview__inner-stats-item-artwork"> <i className="material-icons material-icons-outlined"> turned_in_not </i> </div>

                                                                        <span className="overview__inner-stats-item-caption"> Wszystkie  </span>

                                                                        <span className="overview__inner-stats-item-counter"> { props.projectsPubCounter[0] + props.reviewsPubCounter[1] } </span>
                                                                </div>

                                                                <div className="overview__inner-stats-item">
                                                                        <div className="overview__inner-stats-item-artwork"> <i className="material-icons material-icons-outlined"> library_books </i> </div>

                                                                        <span className="overview__inner-stats-item-caption"> Recenzje </span>

                                                                        <span className="overview__inner-stats-item-counter"> {props.reviewsPubCounter[1] } </span>
                                                                </div>

                                                                <div className="overview__inner-stats-item">
                                                                        <div className="overview__inner-stats-item-artwork"> <i className="material-icons material-icons-outlined"> devices </i> </div>

                                                                        <span className="overview__inner-stats-item-caption"> Projekty </span>

                                                                        <span className="overview__inner-stats-item-counter"> { props.projectsPubCounter[0] }  </span>
                                                                </div>

                                                                <div className="overview__inner-stats-item">
                                                                        <div className="overview__inner-stats-item-artwork"> <i className="material-icons material-icons-outlined"> file_copy </i> </div>
                                                                        
                                                                        <span className="overview__inner-stats-item-caption"> Szkice </span>

                                                                        <span className="overview__inner-stats-item-counter">{  props.draftsPubCounter[2] }</span>
                                                                </div>
                                                        </div>
                                                </div>

                                                {  /*---  Overview > Inner > Events   ---*/   }
                                                <div className="overview__inner-events overview__inner-events_modifier">
                                                        <header className="overview__inner-header overview__inner-header_modifier">
                                                                <h2 className="overview__inner-header--title"><strong>Wydarzenia</strong></h2>
                                                        </header>

                                                        <div className="overview__inner-events-box">
                                                                <div className="overview__inner-events-news overview__inner-events-news_modifier">
                                                                        <div className="overview__inner-events-news-artwork overview__inner-events-news-artwork_modifier" data-event="review-publication">
                                                                                <i className="material-icons material-icons-outlined"> library_books </i> 
                                                                        </div>

                                                                        <div className="overview__inner-events-news-info">
                                                                                <span className="overview__inner-events-news--title" data-event-title="review-publication"> Review publication </span>

                                                                                <span className="overview__inner-events-news--date">Remained: <strong>2 days  9 hour</strong> </span>
                                                                        </div>
                                                                </div>  

                                                                <div className="overview__inner-events-news overview__inner-events-news_modifier">
                                                                        <div className="overview__inner-events-news-artwork  overview__inner-events-news-artwork_modifier" data-event="project-publication">
                                                                                <i className="material-icons material-icons-outlined"> devices </i>
                                                                        </div>

                                                                        <div className="overview__inner-events-news-info">
                                                                                <span className="overview__inner-events-news--title" data-event-title="project-publication"> Project publication </span>

                                                                                <span className="overview__inner-events-news--date">Remained: <strong>2 days  9 hour</strong> </span>
                                                                        </div>
                                                                </div>  

                                                                <div className="overview__inner-events-news overview__inner-events-news_modifier">
                                                                        <div className="overview__inner-events-news-artwork  overview__inner-events-news-artwork_modifier" data-event="review-publication">
                                                                                <i className="material-icons material-icons-outlined"> library_books </i> 
                                                                        </div>

                                                                        <div className="overview__inner-events-news-info">
                                                                                <span className="overview__inner-events-news--title" data-event-title="review-publication"> Review publication </span>

                                                                                <span className="overview__inner-events-news--date">Remained: <strong>2 days  9 hour</strong> </span>
                                                                        </div>
                                                                </div>  
                                                        </div>
                                                </div>
                                                
                                                {  /*---  Overview > Inner > Schedule  ---*/   }
                                                <div className="overview__inner-schedule overview__inner-schedule_modifier">
                                                        <header className="overview__inner-header overview__inner-header_modifier">
                                                                <h2 className="overview__inner-header--title"><strong>Harmonogram publikacji</strong></h2>
                                                        </header>
                                                        
                                                        <div className="overview__inner-schedule-inner">
                                                                <Calendar />
                                                        </div>
                                                </div>
                                                
                                                {  /*---  Overview > Inner > Statistics   ---*/   }
                                                <div className="overview__inner-statistics overview__inner-statistics_modifier">
                                                        <header className="overview__inner-header overview__inner-header_modifier">
                                                                <h2 className="overview__inner-header--title"><strong>Statystyka</strong></h2>
                                                        </header>

                                                        <div className="overview__inner-box">
                                                                <div className="overview__inner-box-art">
                                                                        <img src="../images/member/overview/statistics.png"alt="Barszcz statistics"/>
                                                                </div>

                                                                <p className="overview__inner-box--caption">Funkcja statystyka jest wyłączona.</p>
                                                                
                                                                <div className="overview__inner-box-button">
                                                                        <a href="/member/statistics" type="button" className="btn--small app__button--blue" target="_self">Aktywuj  Statystykę </a>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </section>
                </>
    );
}

export default OverviewPanel;