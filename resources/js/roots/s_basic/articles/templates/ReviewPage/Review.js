import  React, { useEffect,useState } from 'react';
import axios from 'axios';

{  /*  Components */ }
import { Footer, Navigation } from '../../../primary/components';
import { ReviewBody, ArticleRelated } from '../../components';
import { relatedDisplay } from '../../../../global/Publications';
import { ArticleObjOne } from './Data';

/*
=======================
Get single review article
with available actions
 =======================
*/
function Review(props) {
        const [review, getReview] = useState({});
        const [randReviews, getRandReviews] = useState([]);

        useEffect(() => {
                const pub_url = props.match.params.pub_url;
                
                axios.get(`/api/basic/review/${pub_url}`).then(response => {
                        getReview(response.data); 
                });

                axios.get(`/api/basic/reviews/random/${pub_url}`).then(response => { 
                        getRandReviews(response.data);
                });
        }, []);

        const setRandReviews = { randCollection: randReviews }
        
        /*
        =======================
         Render components
        =======================
        */
        return(
                <>
                        <Navigation articleTitle={ review.pub_title}  typeSection={'navigation'}  pub_url = {review.pub_url}  pub_category= {review.pub_category} projects = { props.projects  }  reviews = { props.reviews } />
                        <main>
                                <ReviewBody  typeSection={'article'} typeArticle={ 'article--book' } pub_title = { review.pub_title } pub_subtitle = { review.pub_subtitle } pub_body = { review.pub_body }   pub_color = { review.pub_color  }
                                pub_picture = { review.pub_picture}  date_of_publication ={ review.date_of_publication } pub_tags = { review.pub_tags} pub_url = {review.pub_url}  pub_category= {review.pub_category}  /> 

                                <ArticleRelated  sectionType={'related--book' } relatedHeaderTitle={ ArticleObjOne.related_title} randArticles = {relatedDisplay(setRandReviews)} />
                        </main>
                         <Footer />
                </>
        );
}

export default  Review;
