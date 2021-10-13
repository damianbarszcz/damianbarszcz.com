import React, {useState} from 'react';

export default function CookieDialog (){
        const [cookieVisible, getCookieVisible] = useState(false);

        const acceptCookies = () =>{
                getCookieVisible(false);
        }

        return(
                <>
                { cookieVisible &&
                <div className="cookie-modal cookie-modal_modifier">
                        <div className="cookie-modal__dialog cookie-modal__dialog_modifier">
                                <div className="cookie-modal__artwork">
                                        <img src="../../images/global/cookie-dialog.png" alt="" />
                                </div>

                                <header className="cookie-modal__header cookie-modal__header_modifier">
                                        <p className="cookie-modal__header--tite"><strong>Krótka i słodka wiadomość</strong></p>
                                        <p className="cookie-modal__header--desc">
                                                Pliki cookie służą tylko do śledzenia wizyt na stronie, nie są przechowywane żadne dane osobowe. 
                                        </p>
                                </header>

                                <div className="cookie-modal__box">
                                        <button type="button" className="btn--small cookie-dialog__box--btn app__button--blue" onClick={acceptCookies}>Akceptuje</button>
                                </div>
                        </div>
                </div>}
                </>
        )
}