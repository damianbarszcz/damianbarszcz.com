import React  from 'react';

/*
============================
  Msg success
============================
*/

export function msgSuccess(props){
        return(
        <div className={`msg-success msg-success_modifier ${ props.messageAnimate ? 'msg-success--fadeOutSide' : 'msg-success--fadeInSide'}`}> 
                <div className="msg-success__inner">
                        <div className="msg-success__inner-art">
                                <img src={ props.messageArtwork }  alt="Success artwork" />
                        </div>

                        <div className="msg-success__inner-info">
                                <p className="msg-success__inner-info--title"> Sukces </p>

                                <p className="msg-success__inner-info--desc"> { props.messageDescryption }</p>
                        </div>
                </div>
        </div> )
}

export default msgSuccess;