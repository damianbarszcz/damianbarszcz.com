import  React from 'react';

const ContactBanner = (props) => {
    

   /*
    =======================
     Render component
    =======================
    */
    return (
            <>
                {  /*-----------------------------------------*/   }
                {  /*--------    Contact banner   -------*/   }
                {  /*-----------------------------------------*/   }    
                <section className="contact-banner contact-banner_theme" role="banner">
                    <div className="contact-banner__block g-container"> 
                             {  /*--- Contact banner > Block > Header ---*/   }
                               <header className="contact-banner__header contact-banner__header_modifier">
                                   <h1 className="contact-banner__header--title"> {props.aboutObjOne.title } </h1>

                                    <p className="contact-banner__header--desc">
                                            {props.aboutObjOne.descryption}
                                     </p>
                                </header>
                       </div>
                  </section>
            </>
    );
}

export default ContactBanner ;