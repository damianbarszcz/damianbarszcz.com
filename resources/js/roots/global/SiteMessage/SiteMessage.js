import React from 'react';

const SiteMessage = () => {
        return(
                <div className="site-message site-message_modifier" role="dialog">
                    <div className="site-message__inner">
                            <div className="site-message__artwork">
                                    <img src="../../images/global/site-warning.png" alt="Ostrzeżenie o budowie strony." />
                            </div>

                            <header className="site-message__header site-message__header_modifier">
                                    <p className="site-message__header--title">Uważaj!</p>
                                    <p className="site-message__header--desc">
                                            Obecnie strona znajduje sie w procesie budowy. Możliwe że niektóre elementy bloga nie funkcjonują poprawnie.
                                            Artykuły znajdujące się na stronie mają jedynie charakter wizualizacyjny.
                                    </p>
                            </header>
                    </div>
            </div>
        )
}

export default SiteMessage;