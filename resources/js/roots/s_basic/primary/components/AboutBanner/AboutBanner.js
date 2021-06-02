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
                                                        <span className="about-banner__header-data-caption"> { props.aboutObjOne.study_caption }  </span>
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
                                                <svg className="about-banner__box-timeline-inner" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 424.33 477.95" >
                                                        <rect className="timeline-vector" x="161.13" y="74.9" width="6.02" height="403.05" />
                                                        <rect className="timeline-vector" x="142.59" y="68.9" width="43.11" height="6" />
                                                        <ellipse className="timeline-vector" cx="163.64" cy="151.91" rx="8.02" ry="8" />
                                                        <ellipse className="timeline-vector" cx="163.64" cy="269.93" rx="8.02" ry="8" />
                                                        <ellipse className="timeline-vector" cx="163.64" cy="384.94" rx="8.02" ry="8" />
                                                        <rect className="timeline-vector" x="207.76" y="149.91" width="5.01" height="5" />
                                                        <rect className="timeline-vector" x="198.73" y="149.91" width="5.01" height="5" />
                                                        <rect className="timeline-vector" x="189.71" y="149.91" width="5.01" height="5" />
                                                        <rect className="timeline-vector" x="180.69" y="149.91" width="5.01" height="5" />
                                                        <rect className="timeline-vector" x="234.83" y="149.91" width="5.01" height="5" />
                                                        <rect className="timeline-vector" x="243.85" y="149.91" width="5.01" height="5" />
                                                        <rect className="timeline-vector" x="225.81" y="149.91" width="5.01" height="5" />
                                                        <rect className="timeline-vector" x="216.78" y="149.91" width="5.01" height="5" />
                                                       <rect className="timeline-vector" x="104.48" y="266.93" width="5.01" height="5" />
                                                       <rect className="timeline-vector" x="95.46" y="266.93" width="5.01" height="5" />
                                                        <rect className="timeline-vector" x="86.44" y="266.93" width="5.01" height="5" />
                                                        <rect className="timeline-vector" x="77.41" y="266.93" width="5.01" height="5" />
                                                        <rect className="timeline-vector" x="131.56" y="266.93" width="5.01" height="5" />
                                                        <rect className="timeline-vector" x="140.58" y="266.93" width="5.01" height="5" />
                                                        <rect className="timeline-vector" x="122.53" y="266.93" width="5.01" height="5" />
                                                        <rect className="timeline-vector" x="113.51" y="266.93" width="5.01" height="5" />
                                                        <rect className="timeline-vector" x="207.76" y="382.94" width="5.01" height="5" />
                                                        <rect className="timeline-vector" x="198.73" y="382.94" width="5.01" height="5" />
                                                        <rect className="timeline-vector" x="189.71" y="382.94" width="5.01" height="5" />
                                                        <rect className="timeline-vector" x="180.69" y="382.94" width="5.01" height="5" />
                                                        <rect className="timeline-vector" x="234.83" y="382.94" width="5.01" height="5" />
                                                        <rect className="timeline-vector" x="243.85" y="382.94" width="5.01" height="5" />
                                                        <rect className="timeline-vector" x="225.81" y="382.94" width="5.01" height="5" />
                                                        <rect className="timeline-vector" x="216.78" y="382.94" width="5.01" height="5" />
                                                          <text className="timeline-start-title" transform="translate(124.42 23.95)"> 
                                                                1996 - <tspan className="timeline-start-title">  
                                                                 <tspan x="-11.75" y="33.6"> { props.aboutObjOne.timeline.born } </tspan> </tspan>  
                                                        </text>

                                                        <text className="timeline__step  timeline__step--date" transform="translate(266.37 139.04)">2010 </text> 

                                                        <text className="timeline__step  timeline__step--desc" transform="translate(266.08 164.45)">
                                                                <tspan>{ props.aboutObjOne.timeline.get_knowledge } </tspan> 
                                                                <tspan x="0" y="28">{ props.aboutObjOne.timeline.knowledge_with } </tspan>
                                                                <tspan x="0" y="56">{ props.aboutObjOne.timeline.knowledge_computer } </tspan>
                                                        </text>

                                                            <text className="timeline__step  timeline__step--date" transform="translate(266.37 384.04)">2016 </text>

                                                            <text className="timeline__step  timeline__step--desc" transform="translate(266.08 409.45)">
                                                                <tspan x="0" y="0">{ props.aboutObjOne.timeline.study_start } </tspan>
                                                                <tspan x="0" y="28">{ props.aboutObjOne.timeline.study_place} </tspan>
                                                            </text>

                                                            <rect className="timeline-vector" x="77.41" y="275.93" width="5.01" height="5" />
                                                            <rect className="timeline-vector" x="77.41" y="284.93" width="5.01" height="5" />

                                                            <text className="timeline__step  timeline__step--date" transform="translate(20 311.04)">2014 </text>

                                                            <text className="timeline__step  timeline__step--desc" transform="translate(0.41 336.45)">
                                                                    <tspan x="20" y="0">{ props.aboutObjOne.timeline.learn_start } </tspan>
                                                                    <tspan x="20" y="28">{ props.aboutObjOne.timeline.learn_programming }</tspan>
                                                            </text>
                                                    </svg>
                                            </div>
                                    </div>
                            </div>
                     </section>
            </>
    );
}

export default AboutBanner;