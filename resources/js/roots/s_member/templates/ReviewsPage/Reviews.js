import React, { Component } from 'react';
import axios from 'axios';

{  /*  Components */ }
import { Sidenav,ReviewsPanel,AccountHeader,NoCollection  } from '../../components';
import { msgSuccess } from '../../../global/Msg';
import { deleteModal } from '../../../global/Modal';

class Reviews extends Component {

        constructor(props){  
                super(props);

                this.state = {  collection:[], review_title:'', review_url:'', password:'',  errors:[], isLoading: false,
                successMessage:false,  displayDeleteModal:false,  msgAnimation:false, modalAnimation:false } 

                this.getModal = this.getModal.bind(this);
                this.exitModal = this.exitModal.bind(this);
                this.getYourPassword = this.getYourPassword.bind(this);
                this.deleteYourReview = this.deleteYourReview.bind(this);
        }

        /*
        =======================
         Get reviews collection
        =======================
        */

       componentDidMount() {  
                document.title = "Pulpit |  Recenzje";

                axios.get(`/api/member/reviews`)
                        .then(response => { 
                        
                        this.setState({  collection: response.data   });  

                }).catch(errors => { console.log(errors); })
        }

        /*
        ==========================
        Get modal  &  Exit Modal
        ==========================
        */

        getModal(e, pub_title, pub_url){
                e.preventDefault();

                this.setState({  
                        review_title: pub_title,
                        review_url: pub_url,
                        displayDeleteModal:true,
                        modalAnimation:true,
                });
        }

        exitModal(e){
                e.preventDefault();

                this.setState({  
                        modalAnimation:false,
                        displayDeleteModal:false
                });
        }

        /*
        ==========================
        Get your password
        ==========================
        */

        getYourPassword(e){
                e.preventDefault();

                const name = e.target.name;
                const value = e.target.value;

                this.setState({  [name] : value });
        }

        /*
        ==========================
        Delete single review
        ==========================
        */

        deleteYourReview(e,review_url){
                e.preventDefault();

                this.setState({ isLoading: true })

                const data = { password: this.state.password }

                //Run Laravel method
                axios.post(`/api/member/reviews/delete/${review_url}`, data)

                .then(response => {
                        if (!response.error) {   
                                this.props.history.push('/member/reviews')

                                this.setState({   
                                        collection: response.data,
                                        password:'', 
                                        errors:'',
                                        isLoading: false, 
                                        successMessage:true, 
                                        displayDeleteModal:false, 
                                });

                                setTimeout(function(){ this.setState({ msgAnimation:true }); }.bind(this),5000);

                                setTimeout(function(){ this.setState({ successMessage:false, msgAnimation:false }); }.bind(this), 5500);
                        }
                })
                .catch(error => {
                        this.setState({
                                errors: error.response.data.errors,
                                isLoading: false,
                                password:''
                        })
                })
        }

        /*
        =======================
        Get validation errors
        =======================
        */

        hasErrorFor (field) {   return !!this.state.errors[field]   }

        /*
        =======================
        Render component
        =======================
        */

        render() {

                const { collection, review_title, review_url, password, displayDeleteModal, successMessage,modalAnimation, msgAnimation, isLoading } = this.state

                const getDescryption = { messageAnimate: msgAnimation, messageArtwork: '../images/member/global/successIcon.png', messageDescryption: 'Recenzja została usunięta.' }

                const getFeatures = { modalAnimateState:modalAnimation,  exitModalFunction: ((e) => this.exitModal(e)), deleteYourPubFunction: ((e) =>this.deleteYourReview(e,review_url)), 
                getYourPasswordFunction: ( (e) => this.getYourPassword(e) ), hasErrorForFunction: this.hasErrorFor('password'), modalPubTitle: review_title, modalErrors: this.state.errors['password'], 
                modalIsLoading: isLoading, modalPassword: password, buttonTitle:"Usuń recenzje" }

                return (
                        <main>
                                { successMessage &&   msgSuccess(getDescryption)  }
                                <Sidenav />
                                <AccountHeader  functionTitle="Recenzje" typeFunction="library_books " />

                                { collection.length != 0 ?
                                        <ReviewsPanel collection={ collection } getModal={ this.getModal } /> 
                                        :
                                        <NoCollection type="publication" noCollectionTitle="Brak recenzji" noCollectionDesc="Akutalnie nie masz żadnych stworzonych recenzji." 
                                        noCollectionHref="new-review" noCollectionBtnCaption="Stwórz recenzje" />
                                 }
                                {  displayDeleteModal  &&   deleteModal(getFeatures)  }
                        </main>
                );
        }
}

export default Reviews;
