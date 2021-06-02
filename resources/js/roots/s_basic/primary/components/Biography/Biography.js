import  React from 'react';

const Biography = (props) => {
   /*
    =======================
     Render component
    =======================
    */
    return (
            <>
                {  /*----------------------------------------------*/   }
                {  /*--------    Biography section    --------*/   }
                {  /*----------------------------------------------*/   }    
                 <section className="biography biography_theme">
                        <div className="biography__block g-container">
                                {  /*--- Biography  > Block >  Info ---*/   }
                                    <div className="biography--info">
                                             <p className="biography--info-desc">
                                                      { props.aboutObjTwo.first_desc_part }
                                            </p>

                                            <p className="biography--info-desc">
                                                  { props.aboutObjTwo.second_desc_part }
                                            </p>
                                </div>
                         </div>
                    </section>
            </>
    );
}

export default Biography;