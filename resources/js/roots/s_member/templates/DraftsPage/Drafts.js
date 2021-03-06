import React, { Component } from 'react';
import axios from 'axios'

{  /*  Components */ }
import { Sidenav,DraftsPanel,AccountHeader,NoCollection  } from '../../components';
import { msgSuccess } from '../../../global/Msg';
import { deleteModal } from '../../../global/Modal';

class Drafts extends Component {

        constructor(props){   
                super(props);    
                
                this.state = { draftsCollection:[],  pub_title:'', password:'', errors:[], no_words: 0,
                successMessage:false, messageAnimation:false,  isLoading: false, deleteModal:false, modalAnimation:false,displayDeleteModal:false } 

                this.getModal = this.getModal.bind(this);
                this.exitModal = this.exitModal.bind(this);
                this.getYourPassword = this.getYourPassword.bind(this);
                this.deleteYourDraft= this.deleteYourDraft.bind(this);
        }

        /*
        =========================
         Get drafts collection
        =========================
        */
         componentDidMount() {  
                document.title = "Pulpit | Szkice";

                axios.get(`/api/member/drafts`)
                        .then(response => { 
                        
                        this.setState({  draftsCollection: response.data   });  
                        console.log(response.data);

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
                        pub_title: pub_title,
                        pub_url: pub_url,
                        displayDeleteModal :true,
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
        Delete single project
        ==========================
        */
       deleteYourDraft(e, pub_url){
                e.preventDefault();
                this.setState({ isLoading: true })

                const data = { password: this.state.password }

                //Run Laravel method
                axios.post(`/api/member/drafts/delete/${pub_url}`, data)

                .then(response => {
                        if (!response.error) {   
                                this.props.history.push('/member/drafts')

                                this.setState({   
                                        draftsCollection: response.data,
                                        password:'', 
                                        errors:'',
                                        isLoading: false, 
                                        successMessage:true, 
                                        displayDeleteModal:false, 
                                });

                                setTimeout(function(){ this.setState({ messageAnimation:true }); }.bind(this),5000);

                                setTimeout(function(){ this.setState({ successMessage:false, messageAnimation:false }); }.bind(this), 5500);
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
         Render component
        =======================
        */
        render() {

                const { draftsCollection, pub_title, pub_url, password, displayDeleteModal, successMessage,modalAnimation, isLoading,no_words } = this.state

                const getDescryption = { messageAnimate: modalAnimation, messageDescryption: 'Wersja robocza zosta??a usuni??ta.' }

                const getFeatures = { modalAnimateState:modalAnimation,  exitModalFunction: ((e) => this.exitModal(e)), deleteYourPubFunction: ((e) =>this.deleteYourDraft(e,pub_url)), 
                        getYourPasswordFunction: ( (e) => this.getYourPassword(e) ), hasErrorForFunction:this.state.errors['password'], modalPubTitle: pub_title, modalErrors: this.state.errors['password'], 
                        modalIsLoading: isLoading, modalPassword: password, buttonTitle:"Usu?? szkic" }

                return (
                        <main>
                                { successMessage &&   msgSuccess(getDescryption)  }          
                                <Sidenav />
                                <AccountHeader  functionTitle="Szkice" typeFunction="file_copy" />
                                { draftsCollection.length != 0 ?
                                <DraftsPanel draftsCollection={ draftsCollection } no_words={ no_words } getModal={ this.getModal } />
                                :
                                <NoCollection type="draft" noCollectionTitle="Brak szkic??w" noCollectionDesc="Akutalnie nie masz ??adnych stworzonych szkic??w publikacji." 
                                        noCollectionHref="new-review" noCollectionBtnCaption="Stw??rz recenzje" />
                                }
                                {  displayDeleteModal  &&   deleteModal(getFeatures)  }
                                
                         </main>
                );
        }
}

export default  Drafts;