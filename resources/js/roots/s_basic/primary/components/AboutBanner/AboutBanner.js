import  React from 'react';

const AboutBanner = (props) => {
    
   /*
    =======================
     Render component
    =======================
    */
    return (
            <>
                {  /*----------------------------------------*/   }
                {  /*--------    About Banner     -------*/   }
                {  /*----------------------------------------*/   }    
                <section className="about-banner about-banner_theme" role="banner">
                        <div className="about-banner__block g-container">
                                <div className="about-banner__inner">
                                        {  /*--- About banner > Block > Inner > Header ---*/   }
                                        <header className="about-banner__header">
                                                <h1 className="about-banner__header--title"> 
                                                        <span style={{color:'rgb(200, 200, 200'}}>{ props.aboutObjOne.letter.first }</span> 
                                                        <span style={{color:'rgb(255, 191, 115)'}}>{ props.aboutObjOne.letter.second  }</span>
                                                        <span style={{color:'rgb(47, 152, 247)'}}>{ props.aboutObjOne.letter.third  }</span>
                                                        <span style={{color:'rgb(30, 193, 119)'}}>{ props.aboutObjOne.letter.fourth }</span>
                                                        <span style={{color:'rgb(255, 48, 98)'}}>{ props.aboutObjOne.letter.fifth }</span> 
                                                </h1>
                                                
                                                <div className="about-banner__header-data">
                                                        <span className="about-banner__header-data-caption"> { props.aboutObjOne.birth_title } </span>
                                                        <span className="about-banner__header-data-caption"> { props.aboutObjOne.birth_date } </span>
                                                </div> 

                                                <div className="about-banner__header-data">
                                                        <span className="about-banner__header-data-caption"> { props.aboutObjOne.nat_title } </span>
                                                        <span className="about-banner__header-data-caption"> { props.aboutObjOne.nat_caption }  </span>
                                                </div>

                                                <div className="about-banner__header-data">
                                                        <span className="about-banner__header-data-caption"> { props.aboutObjOne.study_title }   </span> 	 
                                                        <span className="about-banner__header-data-caption"> 
                                                                { props.aboutObjOne.study_caption_one }  <br/>
                                                                { props.aboutObjOne.study_caption_two } 
                                                        </span>

                                                </div>

                                                <div className="about-banner__header-data">
                                                        <span className="about-banner__header-data-caption"> { props.aboutObjOne.occupation_title }  </span>    
                                                        <span className="about-banner__header-data-caption"> { props.aboutObjOne.occupation_caption }  </span>
                                                </div>
                                        </header>

                                        {  /*--- About banner > Block > Inner > Artwork ---*/   }
                                        <div className="about-banner__artwork">
                                                <img  className="about-banner__artwork--hero" src="../images/about-me/profile.jpg" alt="Zdjęcie profilowe autora blogu" />
                                        </div>

                                        {  /*--- About banner > Block > Inner > Timeline ---*/   }
                                        <div className="about-banner__box-timeline">
                                                <svg className="about-banner__box-timeline-inner" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 379.7 507.85">
                                                        <text className="timeline__step  timeline__step--date" transform="translate(232 170)">2010</text>
                                                        <text className="timeline__step  timeline__step--date" transform="translate(-30  225)">2014</text>
                                                        <text className="timeline__step  timeline__step--date"transform="translate(233 354)">2016</text>
                                                        <text className="timeline__step  timeline__step--date" transform="translate(-30 403)">2021</text>
                                                        <text className="timeline-start-title" transform="translate(119.36 19.55)">1996 -
                                                                <tspan className="cls-3" x="65.09" y="0"></tspan>
                                                                <tspan className="cls-3"><tspan x="0" y="27.6">Zamość</tspan></tspan>
                                                        </text>

                                                        <text  className="timeline__step  timeline__step--desc" transform="translate(232 200)">
                                                                { props.aboutObjOne.timeline.step_2010 }
                                                        </text>
                                                        
                                                        <text  className="timeline__step  timeline__step--desc"transform="translate(-30 255)">
                                                                { props.aboutObjOne.timeline.step_2014 }
                                                        </text>
                                                        
                                                        <text  className="timeline__step  timeline__step--desc" transform="translate(233 384)">
                                                                { props.aboutObjOne.timeline.step_2016 }
                                                        </text>
                                                        
                                                        <text  className="timeline__step  timeline__step--desc" transform="translate(-30 433)">
                                                                 { props.aboutObjOne.timeline.step_2021 }
                                                        </text>
                                                        <rect className="timeline-vector" x="160.7" y="79.85" width="7" height="425"/>
                                                        <rect className="timeline-vector" x="136.7" y="72.85" width="55" height="7"/>
                                                        <rect className="timeline-vector" x="177.7" y="128.85" width="5" height="5"/>
                                                        <rect className="timeline-vector" x="188.7" y="128.85" width="5" height="5"/>
                                                        <rect className="timeline-vector" x="199.7" y="128.85" width="5" height="5"/>
                                                        <rect className="timeline-vector" x="210.7" y="128.85" width="5" height="5"/>
                                                        <rect className="timeline-vector"  x="220.7" y="128.85" width="5" height="5"/>
                                                        <rect className="timeline-vector" x="231.7" y="128.85" width="5" height="5"/>
                                                        <rect className="timeline-vector" x="242.7" y="128.85" width="5" height="5"/>
                                                        <rect className="timeline-vector" x="242.7" y="138.85" width="5" height="5"/>
                                                        <rect className="timeline-vector" x="158.7" y="125.85" width="11" height="12"/>
                                                        <rect className="timeline-vector" x="158.7" y="200.85" width="11" height="12"/>
                                                        <rect className="timeline-vector" x="470" y="297" width="5" height="5" transform="translate(620.7 505.85) rotate(-180)"/>
                                                        <rect className="timeline-vector"x="459" y="297" width="5" height="5" transform="translate(598.7 505.85) rotate(-180)"/>
                                                        <rect className="timeline-vector"x="448" y="297" width="5" height="5" transform="translate(576.7 505.85) rotate(-180)"/>
                                                        <rect className="timeline-vector"x="437" y="297" width="5" height="5" transform="translate(554.7 505.85) rotate(-180)"/>
                                                        <rect className="timeline-vector"x="427" y="297" width="5" height="5" transform="translate(534.7 505.85) rotate(-180)"/>
                                                        <rect className="timeline-vector"x="416" y="297" width="5" height="5" transform="translate(512.7 505.85) rotate(-180)"/>
                                                        <rect className="timeline-vector"x="405" y="297" width="5" height="5" transform="translate(490.7 505.85) rotate(-180)"/>
                                                        <rect className="timeline-vector" x="394" y="297" width="5" height="5" transform="translate(468.7 505.85) rotate(-180)"/>
                                                        <rect className="timeline-vector" x="158.7" y="310.85" width="11" height="12"/>
                                                        <rect className="timeline-vector" x="568" y="419" width="5" height="5" transform="translate(816.7 749.85) rotate(-180)"/>
                                                        <rect className="timeline-vector" x="568" y="408" width="5" height="5" transform="translate(816.7 727.85) rotate(-180)"/>
                                                        <rect className="timeline-vector" x="557" y="408" width="5" height="5" transform="translate(794.7 727.85) rotate(-180)"/>
                                                        <rect className="timeline-vector" x="546" y="408" width="5" height="5" transform="translate(772.7 727.85) rotate(-180)"/>
                                                        <rect className="timeline-vector" x="536" y="408" width="5" height="5" transform="translate(752.7 727.85) rotate(-180)"/>
                                                        <rect className="timeline-vector" x="525" y="408" width="5" height="5" transform="translate(730.7 727.85) rotate(-180)"/>
                                                        <rect className="timeline-vector" x="514" y="408" width="5" height="5" transform="translate(708.7 727.85) rotate(-180)"/>
                                                        <rect className="timeline-vector" x="503" y="408" width="5" height="5" transform="translate(686.7 727.85) rotate(-180)"/>
                                                        <rect className="timeline-vector" x="158.7" y="381.85" width="11" height="12"/>
                                                        <rect className="timeline-vector" x="469" y="539" width="5" height="5" transform="translate(618.7 929.85) rotate(-180)"/>
                                                        <rect className="timeline-vector" x="458" y="539" width="5" height="5" transform="translate(596.7 929.85) rotate(-180)"/>
                                                        <rect className="timeline-vector" x="447" y="539" width="5" height="5" transform="translate(574.7 929.85) rotate(-180)"/>
                                                        <rect className="timeline-vector" x="436" y="539" width="5" height="5" transform="translate(552.7 929.85) rotate(-180)"/>
                                                        <rect className="timeline-vector" x="426" y="539" width="5" height="5" transform="translate(532.7 929.85) rotate(-180)"/>
                                                        <rect className="timeline-vector" x="415" y="539" width="5" height="5" transform="translate(510.7 929.85) rotate(-180)"/>
                                                        <rect className="timeline-vector" x="404" y="539" width="5" height="5" transform="translate(488.7 929.85) rotate(-180)"/>
                                                        <rect className="timeline-vector" x="393" y="539" width="5" height="5" transform="translate(466.7 929.85) rotate(-180)"/>
                                                </svg>
                                        </div>
                                    </div>
                            </div>
                     </section>
            </>
    );
}

export default AboutBanner;