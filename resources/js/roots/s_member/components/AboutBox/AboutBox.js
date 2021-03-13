import  React from 'react';

const AboutBox = () => {
    
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
                                {  /*---  About app > Header   ---*/   }
                                <header className="about-app__header about-app__header_modifier">
                                        <span className="about-app__header-square about-app__header-square_modifier"><i className="material-icons material-icons-outlined"> info </i> </span>

                                        <div className="about-app__header-content">
                                                <h1 className="about-app__header-content--title"> About application </h1>

                                                <p className="about-app__header-content--subtitle"> Dashboard | About application </p>
                                         </div>
                                 </header>

                                {  /*---  About app > Inner   ---*/   }
                                <div className="about-app__inner about-app__inner_modifier">
                                        <img src="../images/member/about_app/about_art.png"  alt="Application brand" />

                                        <div className="about-app__inner-content">     
                                                <h2 className="about-app__inner-content--title">Barszcz Blog</h2>

                                                <p className="about-app__inner-content-desc">App version : <strong> 1.1 </strong></p>

                                                <p className="about-app__inner-content-desc">Laravel version :  <strong> 8.0 </strong></p>

                                                <p className="about-app__inner-content-desc">React version:  <strong> 16.10.1 </strong></p>

                                                <p className="about-app__inner-content-desc">Copyright :  <strong>© 2021 Damian Barszcz </strong></p>
                                        </div>
                                </div>
                        </div>
                </section>
            </>
    );
}

export default AboutBox;