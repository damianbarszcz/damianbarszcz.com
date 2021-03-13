import React from 'react';

const CalendarPanel = (props) => {

    return(
        <>
            {  /*-------------------------------*/   }
            {  /*--------  Calendar   -------*/    }
            {  /*-------------------------------*/   }
            <section className="calendar calendar_theme">
                     <div className="calendar__block">
                        {  /*---  Calendar > Block > Header  ---*/   } 
                        <header className="calendar__header calendar__header_modifier">
                                <span className="calendar__header-square calendar__header-square_modifier"><i className="material-icons material-icons-outlined"> date_range </i> </span>

                                <div className="calendar__header-content">
                                        <h1 className="calendar__header-content--title"> Calendar </h1>

                                         <p className="calendar__header-content--subtitle"> Dashboard | Calendar</p>
                                </div>
                        </header>

                        {  /*---  Calendar > Block > Inner  ---*/   } 
                        <div className="calendar__inner">
                                <div className="calendar__inner-events">
                                        <div className="calendar__inner-events-news calendar__inner-events-news_modifier">  
                                                <div className="calendar__inner-events-news-artwork calendar__inner-events-news-artwork_modifier"  data-event="review-publication">
                                                        <i className="material-icons material-icons-outlined"> library_books </i> 
                                                </div> 

                                                <div className="calendar__inner-events-news-info">
                                                        <span className="calendar__inner-events-news-info--title" data-event-title="review-publication">Review publication </span>

                                                        <span className="calendar__inner-events-news-info--date">Remained: <strong>2 days  9 hour</strong></span>
                                                </div>
                                         </div>

                                        <div className="calendar__inner-events-news calendar__inner-events-news_modifier">  
                                                <div className="calendar__inner-events-news-artwork calendar__inner-events-news-artwork_modifier"  data-event="project-publication">
                                                        <i className="material-icons material-icons-outlined"> devices </i> 
                                                </div> 

                                                <div className="calendar__inner-events-news-info">
                                                        <span className="calendar__inner-events-news-info--title" data-event-title="project-publication">Project publication </span>

                                                        <span className="calendar__inner-events-news-info--date">Remained: <strong>2 days  9 hour</strong></span>
                                                 </div>
                                         </div>

                                        <div className="calendar__inner-events-news calendar__inner-events-news_modifier">  
                                                <div className="calendar__inner-events-news-artwork calendar__inner-events-news-artwork_modifier"  data-event="review-publication">
                                                         <i className="material-icons material-icons-outlined"> library_books </i> 
                                                 </div> 

                                                <div className="calendar__inner-events-news-info">
                                                        <span className="calendar__inner-events-news-info--title" data-event-title="review-publication">Review publication </span>

                                                        <span className="calendar__inner-events-news-info--date">Remained: <strong>2 days  9 hour</strong></span>
                                                 </div>
                                        </div>

                                        <div className="calendar__inner-events-news calendar__inner-events-news_modifier">  
                                                <div className="calendar__inner-events-news-artwork calendar__inner-events-news-artwork_modifier"  data-event="project-publication">
                                                        <i className="material-icons material-icons-outlined"> devices </i> 
                                                 </div> 

                                                <div className="calendar__inner-events-news-info">
                                                        <span className="calendar__inner-events-news-info--title" data-event-title="project-publication">Project publication </span>

                                                        <span className="calendar__inner-events-news-info--date">Remained: <strong>2 days  9 hour</strong></span>
                                                </div>
                                        </div>

                                        <div className="calendar__inner-events-actions">
                                                <button type="button" className="calendar__inner-events-actions-btn calendar__inner-events-actions-btn_modifier">
                                                        <i className="material-icons">chevron_right</i>
                                                </button>
                                        </div>
                                </div>

                                {  /*---  Calendar > Inner > Schedule   ---*/   }
                                <div className="calendar__inner-schedule calendar__inner-schedule_modifier">
                                        <header className="calendar__inner-schedule-month">
                                                <button type="button" className="calendar__inner-schedule-month--btn"> <i className="material-icons material-icons__arrow">chevron_left</i> </button>

                                                <button type="button" className="calendar__inner-schedule-month--btn"> August 2020 </button>

                                                <button type="button" className="calendar__inner-schedule-month--btn"> <i className="material-icons material-icons__arrow">chevron_right</i> </button>
                                        </header>

                                        <div className="calendar__inner-schedule-weekdays"> { props.weekItems }  </div>

                                        <div className="calendar__inner-schedule-days">  { props.monthItems} </div>
                                    </div>
                            </div>
                    </div>
             </section>
    </>
    )
}

export default CalendarPanel;