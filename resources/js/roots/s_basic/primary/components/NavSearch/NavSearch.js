import React from 'react';

const NavSearch = (props) =>{
    return(
    <div className={`${props.typeSection}__search`}>
            <form className={`${props.typeSection}__search-form`} onSubmit={ props.searchPublication } method="GET">
                    <button type="button" className="form__button form__button--search"> <i className="material__icon material-icons"> search </i> </button>

                    <input name="search_tag" type="text" className="form__input form__input_effect" value={ props.search_tag }  onChange={props.handleSearchData}   aria-label="Wyszukaj" placeholder="Wyszukaj" />

                    <button type="button" className="form__button form__button--close" onClick={ props.closeSearchForm }> <i className="material__icon material-icons"> close </i> </button>
            </form>
    </div> )
}

export default NavSearch;