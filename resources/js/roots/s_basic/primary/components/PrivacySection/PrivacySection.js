import  React from 'react';

const PrivacySection = (props) => {

   /*
    =======================
     Render component
    =======================
    */
    return (
            <>
                    {  /*----------------------------------------*/   }
                    {  /*--------            Privacy         -------*/   }
                    {  /*----------------------------------------*/   }    
                    <section className="privacy privacy_theme">
                            <div className="privacy__block g-container">
                                    <div className="privacy__inner">
                                        <div className="privacy__inner-item">
                                                <h1 className="privacy__inner-item--title">{ props.privacyObjOne.sectionTitle } </h1>

                                                <p className="privacy__inner-item--desc">
                                                        { props.privacyObjOne.sectionDesc }
                                                </p>
                                        </div>
                                        
                                        <div className="privacy__inner-item">
                                                <h2 className="privacy__inner-item--title">{ props.privacyObjOne.headingOneTitle } </h2>

                                                <p className="privacy__inner-item--desc">
                                                        { props.privacyObjOne.headingOneDesc }
                                                </p>
                                        </div>

                                        <div className="privacy__inner-item">
                                                <h2 className="privacy__inner-item--title">{ props.privacyObjOne.headingTwoTitle }</h2>

                                                <p className="privacy__inner-item--desc">
                                                        { props.privacyObjOne.headingTwoDesc }
                                                </p>
                                        </div>
                                           
                                        <div className="privacy__inner-item">
                                            <h2 className="privacy__inner-item--title">{ props.privacyObjOne.headingThreeTitle } </h2>

                                            <p className="privacy__inner-item--desc">
                                                { props.privacyObjOne.headingThreeDesc }
                                            </p>
                                        </div>

                                        <div className="privacy__inner-item">      
                                                <h2 className="privacy__inner-item--title">{ props.privacyObjOne.headingFourTitle }</h2>

                                                <p className="privacy__inner-item--desc">
                                                   { props.privacyObjOne.headingFourDesc }
                                                </p>
                                        </div>
                                </div>
                        </div>
                    </section>
            </>
    );
}

export default PrivacySection;