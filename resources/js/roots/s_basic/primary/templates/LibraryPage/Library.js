import  React, { useEffect } from 'react';

{  /*  Components */ }
import { LibraryManager, LastReviews, Popular,Navigation,Footer, TopReview,SearchReviews  } from '../../components';
import { popularReviews, lastReviewsDisplay, topReviewDisplay }  from '../../../../global/Publications';
import { libraryObjOne, libraryObjTwo, libraryObjThree,libraryObjFour  } from './Data';

/*
=======================
Display all components for
Library route
=======================
*/
function Library(props) {

        useEffect(() => {
                document.title = "Biblioteka | Dowiedz się więcej o książkach"; 
        }, []);

        const [searchTerm, getTerm] = React.useState('');

        const getReviews = { reviewsCollection: props.setReviews }


        /*
         =======================
        Render components
        =======================
        */
        return (
                <>
                        <Navigation />
                        <main>
                                <LibraryManager  libraryObjOne={ libraryObjOne } searchTerm = { searchTerm }  getTerm={getTerm} />
                                <TopReview libraryObjTwo={ libraryObjTwo} topReviewDisplay={ topReviewDisplay(getReviews) }  />
                                <LastReviews  libraryObjThree ={ libraryObjThree } lastReviewsDisplay = { lastReviewsDisplay(getReviews) } />
                                <Popular  libraryObjFour ={ libraryObjFour  } popularReviews = { popularReviews(getReviews) } />
                        </main>
                        <Footer />
                </>
        );
}

export default Library;