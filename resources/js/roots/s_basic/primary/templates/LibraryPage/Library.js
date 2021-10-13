import  React, { useEffect } from 'react';

{  /*  Components */ }
import { LibraryBanner, LastReviews, PopularReviews, Navigation,Footer, TopReview, NoReviews  } from '../../components';
import { libraryObjOne, libraryObjTwo, libraryObjThree,libraryObjFour,libraryObjFive  } from './Data';

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

        /*
        =======================
        Render components
        =======================
        */
        return (
                <>
                        <Navigation typeSection={'navigation'} projects = { props.projects  }  reviews = { props.reviews } />
                        <main>
                                {   props.reviews.length  > 0 ?
                                <>
                                <LibraryBanner libraryObjOne={ libraryObjOne } />
                                <TopReview  libraryObjTwo={ libraryObjTwo} recommendedReview = { props.reviews  }  />
                                {   props.reviews.length > 1 &&
                                        <LastReviews  libraryObjThree ={ libraryObjThree } lastReviews = { props.reviews } />
                                }
                                {   props.reviews.length > 5 &&
                                        <PopularReviews  libraryObjFour ={ libraryObjFour  } popularReviews = { props.reviews } />
                                }       
                                </> 
                                : <NoReviews libraryObjFive ={ libraryObjFive } />
                                }
                        </main>
                        <Footer />
                </>
        );
}

export default Library;