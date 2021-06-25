import React  from 'react';

const SearchManager = (props) => {

        return (
        <section className="search-manager search-manager_theme"> 
                <div className="search-manager__block g-container">
                        <div className="search-manager__inner">
                                <header className="search-manager__header">
                                        <h1 className="search-manager__header--title">Czego szukasz ?</h1>
                                </header>

                                <form className="search-manager__form"  method="GET">
                                        <input type="search"   className="form__input search-manager__form--input"  onChange={e => props.getSearchTerm(e.target.value)}  value={ props.searchTerm } placeholder="Wyszukaj artykuł"/>

                                        <button type="button" className="form__button search-manager__form--button"> <i className="material__icon--nav material-icons" > search </i> </button>
                                </form>
                        </div>
                </div>
        </section>
        );
}

export default SearchManager;