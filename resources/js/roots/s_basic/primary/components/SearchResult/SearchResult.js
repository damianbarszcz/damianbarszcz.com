import  React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';

const SearchResult  = (props) => {
    

   /*
    =======================
     Render component
    =======================
    */
    return (
            <>
                {  /*----------------------------------------*/   }
                {  /*--------       GL search         -------*/   }
                {  /*----------------------------------------*/   }    
                <section className="gl-search gl-search_theme" role="banner">
                        <div className="gl-search__block g-container">
                                {  /*--- Gl search > Block > Header ---*/   }
                                <header className="gl-search__header">
                                        <h1 className="gl-search__header--title">Wyniki wyszukiwania frazy "{ props.searchTerm }" </h1>
                                </header>
                                                
                                <div className="gl-search__gl-inner">    
                                        { props.searchResults.map((article,i) => 
                                        <article key={ i + 1 } className="gl-search__gl-article  gl-search__gl-article_modifier">
                                                <a  href={ `/${article.pub_category ? 'review' :  'project'}/${article.pub_url }`}   className="gl-search__gl-article-link gl-search__gl-article-link_modifier" target="_self">
                                                        <div className="gl-search__gl-article-media" style={{ background: `url( ${ article.pub_picture } )` }}></div>

                                                        <header className="gl-search__gl-article-header last-reviews__gl-article-header_modifier">
                                                                 <h3 className="gl-search__gl-article-header--title">{ article.pub_title }   </h3>

                                                                <div className="gl-search__gl-article-header--desc"><LinesEllipsis text={ article.pub_subtitle} maxLine='2' ellipsis='...' trimRight /></div>
                                                        </header>

                                                        { article.pub_category  &&
                                                        <div className="gl-search__gl-article-category gl-search__gl-article-category_modifier" data-book-category={ article.pub_category }>{ article.pub_category }</div> ||  '' }
                                                </a>
                                        </article> ) }

                                        { props.searchResults.length == 0  ?
                                        <div className="gl-search__gl-noarticle gl-search__gl-noarticle_modifier">
                                                <header className="gl-search__gl-noarticle-header gl-search__gl-noarticle-header_modifier">
                                                        <h2 className="gl-search__gl-noarticle-header--title">Upps :(</h2>
     
                                                        <p className="gl-search__gl-noarticle-header--desc">NIe odnaleziono wynik??w dla frazy "{ props.searchTerm }".</p>
                                                </header>
                                        </div> : '' }
                                </div> 
                        </div>                
                </section>
        </>
    );
}

export default SearchResult;