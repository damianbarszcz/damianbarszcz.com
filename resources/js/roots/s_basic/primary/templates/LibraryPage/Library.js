import  React, { useEffect } from 'react';

{  /*  Components */ }
import { LibraryBanner, LastReviews, Popular,Navigation,Footer, TopReview } from '../../components';
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

        const getReviews = { reviewsCollection: props.setReviews }

        /*
         =======================
        Render components
        =======================
        */
        return (
                <>
                        <Navigation typeSection={'navigation'} />
                        <main>
                                <LibraryBanner libraryObjOne={libraryObjOne} />
                                <TopReview libraryObjTwo={ libraryObjTwo} topReviewDisplay={ topReviewDisplay(getReviews) }  />
                                <LastReviews  libraryObjThree ={ libraryObjThree } lastReviewsDisplay = { lastReviewsDisplay(getReviews) } />
                                <Popular  libraryObjFour ={ libraryObjFour  } popularReviews = { popularReviews(getReviews) } />
                        </main>
                        <Footer />
                </>
        );
}

export default Library;