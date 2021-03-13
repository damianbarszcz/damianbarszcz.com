import  React, { useEffect } from 'react';
import { popularReviews, lastReviewsDisplay }  from '../../../../global/Publications';

{  /*  Components */ }
import { LibraryManager, LastReviews, Popular,Navigation,Footer  } from '../../components';

function Library(props) {

        useEffect(() => {
                document.title = "Biblioteka | Dowiedz się więcej o książkach"; 
        }, []);

        const [searchTerm, getTerm] = React.useState('');

        const getReviews = { reviewsCollection: props.setReviews }

        let searchResults = props.setReviews.filter(article =>  
                article.pub_title.toLowerCase().includes(searchTerm.toLowerCase()) 
                || article.pub_subtitle.toLowerCase().includes(searchTerm.toLowerCase()) 
                || article.pub_category.toLowerCase().includes(searchTerm.toLowerCase()) 
        );

        /*
         =======================
        Render components
        =======================
        */
        return (
                <>
                        <Navigation  linkComponent={'library'} styleComponent={ 'nav-dark' } nameComponent= {'Books'} />
                        <LibraryManager  searchTerm = { searchTerm }  getTerm={getTerm}/>
                        <LastReviews searchTerm = { searchTerm } searchResults = {searchResults}  lastReviewsDisplay = { lastReviewsDisplay(props.setReviews) }   lastReviewsDisplays = 
                        { lastReviewsDisplay(searchResults) } />
                        <Popular  popularReviews = { popularReviews(getReviews) } />
                        <Footer />
                </>
        );
}

export default Library;