import  React from 'react';

const NewPublication = (props) => {
    
        /*
        =======================
        Render component
        =======================
        */
        return (
                <>
                        {  /*-----------------------------------------*/   }
                        {  /*--------        New pub          --------*/   }
                        {  /*-----------------------------------------*/   }    
                        <section className="new-pub new-pub_theme">
                                <div className="new-pub__block g-container">
                                        {  /*---  New pub > Inner  ---*/   }
                                        <div className="new-pub__inner">{  props.getNewPublication }</div>
                                </div>
                        </section>
                </>
        );
}

export default NewPublication;