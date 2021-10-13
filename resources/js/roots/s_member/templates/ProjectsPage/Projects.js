import React, { Component } from 'react';
import axios from 'axios'

{  /*  Components */ }
import { Sidenav,ProjectsPanel,AccountHeader,NoCollection  } from '../../components';

import { msgSuccess } from '../../../global/Msg';
import { deleteModal } from '../../../global/Modal';
import { AccountHeaderObj } from './Data';

class Projects extends Component {

        constructor(props){  
                super(props);   

                this.state = {  collection:[], project_title:'', project_url:'', password:'', errors:[], isLoading: false, 
                successMessage:false,  displayDeleteModal:false, msgAnimation:false, modalAnimation:false } 

                this.getModal = this.getModal.bind(this);
                this.exitModal = this.exitModal.bind(this);
                this.getYourPassword = this.getYourPassword.bind(this);
                this.deleteYourProject = this.deleteYourProject.bind(this);
        }
        
        /*
        =======================
         Get projects collection
        =======================
        */
        componentDidMount() {  
                document.title = "Pulpit | Projekty";

                axios.get(`/api/member/projects`)
                        .then(response => { 
                        
                        this.setState({  collection: response.data   });  
                        console.log(this.state.collection)

                }).catch(errors => { console.log(errors); })
        }

        /*
        ==========================
         Get modal  &  Exit modal
        ==========================
        */

        getModal(e, pub_title, pub_url){
                e.preventDefault();

                this.setState({  
                        project_title: pub_title,
                        project_url: pub_url,
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
         Delete single project
        ==========================
        */

        deleteYourProject(e, project_url){
                e.preventDefault();
                this.setState({ isLoading: true })

                const data = { password: this.state.password }

                //Run Laravel method
                 axios.post(`/api/member/projects/delete/${project_url}`, data)

                 .then(response => {
                         if (!response.error) {   
                                this.props.history.push('/member/projects')

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

                const { collection, project_title, project_url, password, displayDeleteModal, successMessage,msgAnimation, modalAnimation, isLoading } = this.state

                const getDescryption = { messageAnimate: msgAnimation, messageArtwork: '../images/member/global/successIcon.png', messageDescryption: 'Projekt został usunięty.' }

                const getFeatures = { modalAnimateState:modalAnimation,  exitModalFunction: ((e) => this.exitModal(e)), deleteYourPubFunction: ((e) =>this.deleteYourProject(e,project_url)), 
                        getYourPasswordFunction: ( (e) => this.getYourPassword(e) ), hasErrorForFunction: this.hasErrorFor('password'), modalPubTitle: project_title, modalErrors: this.state.errors['password'], 
                        modalIsLoading: isLoading, modalPassword: password, buttonTitle:"Usuń  projekt" }

                return (
                        <main>
                                { successMessage &&   msgSuccess(getDescryption)  }                                 
                                <Sidenav />

                                <AccountHeader  functionTitle={ AccountHeaderObj.title } typeFunction="devices " />

                                {collection.length != 0 ?
                                        <ProjectsPanel collection={ collection } getModal={ this.getModal } /> 
                                        :
                                        <NoCollection type="publication" noCollectionTitle="Brak projektów" noCollectionDesc="Akutalnie nie masz żadnych stworzonych projektów." 
                                        noCollectionHref="new-project" noCollectionBtnCaption="Stwórz projekt" />
                                 }

                                { displayDeleteModal  &&   deleteModal(getFeatures)  }  
                        </main>
                );
        }
}

export default Projects;
