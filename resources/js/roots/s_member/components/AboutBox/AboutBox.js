import  React from 'react';

const AboutBox = (props) => {
    
   /*
    =======================
     Render component
    =======================
    */
    return (
            <>
                {  /*--------------------------------*/   }
                {  /*--------  About App  -------*/   }
                {  /*--------------------------------*/   }
                <section className="about-app about-app_theme">
                        <div className="about-app__block">
                                {  /*---  About app > Inner   ---*/   }
                                <div className="about-app__inner about-app__inner_modifier">
                                        <img src="../images/member/about_app/about_art.png" alt="Application brand" />

                                        <div className="about-app__inner-content">     
                                                <h2 className="about-app__inner-content--title">{ props.AboutBoxObjOne.title }</h2>

                                                <p className="about-app__inner-content-desc">{ props.AboutBoxObjOne.appVerCaption } <strong> { props.AboutBoxObjOne.appVerNumber }  </strong></p>

                                                <p className="about-app__inner-content-desc">{ props.AboutBoxObjOne.laravelVerCaption }  <strong> { props.AboutBoxObjOne.laravelVerNumber }  </strong></p>

                                                <p className="about-app__inner-content-desc">{ props.AboutBoxObjOne.reactVerCaption }   <strong> { props.AboutBoxObjOne.reactVerNumber }  </strong></p>

                                                <p className="about-app__inner-content-desc"><strong>{ props.AboutBoxObjOne.appCopyright }  </strong></p>
                                        </div>
                                </div>
                        </div>
                </section>
            </>
    );
}

export default AboutBox;