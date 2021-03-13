import  React from 'react';

const LibraryManager = (props) => {
    

   /*
    =======================
     Render component
    =======================
    */
    return (
            <>
                    {  /*-----------------------------------------*/   }
                    {  /*--------   Library manager  --------*/   }
                    {  /*-----------------------------------------*/   }
                     <section className="library-manager library-manager_theme">
                            <div className="library-manager__block g-container">
                                    {  /*--- Library manager > Block > Header  ---*/   }
                                    <header className="library-manager__header">
                                            <h1 className="library-manager__header--title"><strong className="strong-title">Biblioteka: </strong> Dowiedz się więcej o książkach</h1>
                                    </header>

                                    {  /*--- Library manager > Block > Inner  ---*/   }
                                    <div className="library-manager__inner">
                                            <div className="library-manager__search">
                                                    <form className="library-manager__search-form"  method="GET">
                                                            <button type="button" className="form__button form__button--search"> <i className="material__icon--nav material-icons"> search </i> </button>

                                                            <input type="text" className="form__input form__search form__search_effect" aria-label="Wyszukaj recezje" value={ props.searchTerm }  onChange={ e => props.getTerm(e.target.value) } placeholder="Wyszukaj recenzje"  />
                                                    </form>
                                                </div>
                                     </div>
                                </div>
                        </section>
            </>
    );
}

export default LibraryManager;