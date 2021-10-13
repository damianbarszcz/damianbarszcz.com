import  React from 'react';

const AccountHeader = (props) => {
    
    /*
     =======================
      Render component
     =======================
     */
        return (
                <header className="account__header account__header_modifier">
                        <span className="account__header-square account__header-square_modifier">
                                <i className="material-icons material-icons-outlined"> { props.typeFunction } </i> 
                        </span>
 
                        <div className="account__header-content">
                                <h1 className="account__header-content--title">   { props.functionTitle } </h1>
 
                                <p className="account__header-content--subtitle"> Pulpit | { props.functionTitle } </p>
                        </div>
                </header>
        )
}

export default  AccountHeader;