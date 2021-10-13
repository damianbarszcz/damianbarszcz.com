import  React from 'react';

const NoCollection = (props) => {
    
   /*
    =======================
     Render component
    =======================
    */
    return (
                <>
                        {  /*--------------------------------*/   }
                        {  /*------ No Collection -------*/   }
                        {  /*--------------------------------*/   }
                        <div className="no-collection">
                                <header  className="no-collection__header">
                                        <h1 className="no-collection__header--title">{ props.noCollectionTitle } </h1>
                                        
                                        <p className="no-collection__header--desc">{ props.noCollectionDesc } </p>
                                </header>

                                {  props.type == "publication" &&
                                <div className="no-collection__inner">
                                        <a href={`/member/${props.noCollectionHref}`} type="button" className="btn--small app__button--blue">{ props.noCollectionBtnCaption } </a>
                                </div> }
                        </div>
                 </>
    );
}

export default NoCollection;