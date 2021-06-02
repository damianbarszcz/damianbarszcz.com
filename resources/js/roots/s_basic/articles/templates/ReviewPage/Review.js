import React, { Component } from 'react';
import axios from 'axios';

{  /*  Components */ }
import { Footer, Navigation } from '../../../primary/components';
import { ReviewBody,ReviewRelated } from '../../components';

class ArticleBook extends Component {

        constructor(props) {  super(props); this.state = { review: [], rand_reviews: [] } }

        componentDidMount() {
                const pub_url = this.props.match.params.pub_url;

                axios.get(`/api/basic/review/${pub_url}`).then(response => { this.setState({ review: response.data }); });

                axios.get(`/api/basic/reviews/random/${pub_url}`).then(response => { 
                        this.setState({  rand_reviews: response.data  });
                        console.log(this.state.rand_reviews)
                 });
        }

        /*
        =======================
         Render components
        =======================
        */
        render() {
                const { review } = this.state;

                const getRandArticle = { randArticle: this.state.rand_reviews }

                document.title = review.pub_title;

                return (

                <>
                        <Navigation articleTitle={ review.pub_title}  styleComponent={ 'nav-light' }  articleTitle={ review.pub_title}  styleComponent={ 'nav-light' } linkComponent={'review'}   nameComponent= {'Books'}/>
                        <main>
                                <ReviewBody  review = { review } getRandArticle={ getRandArticle } /> 
                                <ReviewRelated getRandArticle= { getRandArticle} />
                        </main>
                         <Footer />
            </>
        )
    }
}

export default   ArticleBook;
