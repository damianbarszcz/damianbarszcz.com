import React, { useState,useEffect} from 'react';
import axios from 'axios';

{  /*  Components */ }
import { Navigation, Footer,SearchResult, SearchManager }  from '../../components';

/*
=======================
Display all components for
Search route
=======================
*/
function Search(props){
        const [resultsCollection,getResultsCollection] =  useState([]);
        const [searchTerm, getSearchTerm] = useState('');

        useEffect(() => {
                document.title = "Wyszukiwanie | Damian Barszcz"; 

                const pub_url = props.match.params.slug;

                getSearchTerm(pub_url.slice(7, 1000).replace(/-/g, " ")); 

                axios.get(`/api/basic/collection`).then(response => { 
                        getResultsCollection(response.data); 
                });
        }, []);

        let searchResults =  resultsCollection.filter(article =>  
                 article.pub_title.toLowerCase().includes(searchTerm.toLowerCase()) 
             || article.pub_subtitle.toLowerCase().includes(searchTerm.toLowerCase()) 
             || article.pub_tags.toLowerCase().includes(searchTerm.toLowerCase()) 
             || article.pub_category &&  article.pub_category.toLowerCase().includes(searchTerm.toLowerCase())     
         );

        return (
                <>   
                        <Navigation  typeSection={'navigation'}/>
                        <main>
                                <SearchManager searchTerm={ searchTerm } getSearchTerm={getSearchTerm} />
                                <SearchResult  searchResults = { searchResults } searchTerm={ searchTerm } />
                        </main>
                        <Footer />
                </>
        );
}


export default Search;