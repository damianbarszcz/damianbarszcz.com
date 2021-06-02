import React, { Component } from 'react';
import axios from 'axios';

{  /*  Components */ }
import { Navigation, Footer,SearchResult }  from '../../components';

class Search extends Component {

        constructor(props){   
                super(props);    
                
                this.state = { resultsCollection:[], searchTerm:'' } 
        }

        componentDidMount() { 
                document.title = "Wyszukiwanie | Damian Barszcz"; 

                const pub_url = this.props.match.params.slug;

                this.setState({searchTerm: pub_url.slice(7, 1000).replace(/-/g, " ")  }); 

                axios.get(`/api/basic/collection`).then(response => { 
                        this.setState({resultsCollection: response.data }); 
                        console.log(response.data)
                });
        }
        
       /*
        =======================
         Render components
        =======================
        */
        render() {
                const { searchTerm,resultsCollection  } = this.state

                let searchResults =  resultsCollection.filter(article =>  
                           article.pub_title.toLowerCase().includes(searchTerm.toLowerCase()) 
                        || article.pub_subtitle.toLowerCase().includes(searchTerm.toLowerCase()) 
                        || article.pub_category &&  article.pub_category.toLowerCase().includes(searchTerm.toLowerCase())     
                );

                return (
                <>   
                        <Navigation styleComponent={ 'nav-light' } />
                        <main>
                                <SearchResult  searchResults = { searchResults } searchTerm={ searchTerm } />
                        </main>
                        <Footer />
                </>
                );
        }
}

export default Search;