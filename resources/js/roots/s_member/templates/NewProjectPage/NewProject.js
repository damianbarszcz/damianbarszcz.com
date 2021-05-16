import React, { Component } from 'react';
import { EditorState, convertToRaw  } from 'draft-js';
import '../../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import axios from 'axios';

{  /*  Components */ }
import { ProjectForm, Sidenav } from '../../components';
import { msgSuccess } from '../../../global/Msg';

class NewProject  extends Component {

        constructor(props){  
                super(props);   

                this.state = { 
                        project_title: '',  project_subtitle: '',  project_body:'', project_tags:'', project_picture:'', project_tags:'', project_visual:'',  errors: [], 
                        isLoadingPub: false, isLoadingDraft:false, successMessage:false, messageDraft:false,  msgAnimation:false, 
                        wordCounter:0,  editorState: EditorState.createEmpty()
                }

                this.getFormData = this.getFormData.bind(this);
                this.getFormPicture = this.getFormPicture.bind(this);
                this.createNewProject= this.createNewProject.bind(this);
                this.createNewDraft = this.createNewDraft.bind(this);

                this.onEditorStateChange = (editorState) =>{  
                        this.setState({   editorState, 
                                project_body:   draftToHtml(convertToRaw(editorState.getCurrentContent())), 
                                wordCounter: editorState.getCurrentContent().getPlainText('\u0001').replace(/\s/g, "").length,
                        }); 
                }
        }

        componentDidMount() {  document.title = "Pulpit |  Nowy projekt"; }

        /*
        =======================
         Get form data
        =======================
        */
        getFormData(e){
                e.preventDefault();

                const name = e.target.name;
                const value = e.target.value;

                this.setState({  [name] : value})
        }

        /*
        =======================
         Get form picture
        =======================
        */
        getFormPicture(e){
                this.setState({  
                        project_picture:e.target.files[0],
                        project_visual: URL.createObjectURL(e.target.files[0])
                })

                console.log(e.target.files[0]);
        }

         /*
        =======================
         Create new project
        =======================
        */
        createNewProject(e){
                e.preventDefault();

                const formData = new FormData();

                formData.append('project_picture', this.state.project_picture);
                formData.append('project_title', this.state.project_title);
                formData.append('project_subtitle', this.state.project_subtitle);
                formData.append('project_body', this.state.project_body);
                formData.append('project_tags', this.state.project_tags);

                this.setState({ isLoadingPub: true })

               //Run Laravel method
                axios.post("/api/member/new-project/create-project", formData)
                .then(response => {
                        if (!response.error) {   
                                this.props.history.push('/member/new-project')

                                 this.setState({ 
                                        project_title: '', project_subtitle: '', project_body:  '', project_tags: '', project_picture: '', project_visual:'', 
                                        errors:[], isLoadingPub: false, successMessage:true, editorState: EditorState.createEmpty(), wordCounter:0
                                }) 
                                
                                setTimeout(function(){ this.setState({ msgAnimation:true }); }.bind(this),5000);

                                setTimeout(function(){ this.setState({ successMessage:false, msgAnimation:false }); }.bind(this), 5500);
                        }
                })
                .catch(error => {  this.setState({ errors: error.response.data.errors, isLoadingPub: false}) })
        }

        /*
        =======================
         Create project draft
        =======================
        */

       createNewDraft (e){
                e.preventDefault();

                const formData = new FormData();

                formData.append('project_picture', this.state.project_picture);
                formData.append('project_title', this.state.project_title);
                formData.append('project_subtitle', this.state.project_subtitle);
                formData.append('project_body', this.state.project_body);
                formData.append('project_tags', this.state.project_tags);

                this.setState({ isLoadingDraft: true })

                //Run Laravel method
                axios.post("/api/member/new-project/draft-project", formData)
                .then(response => {
                        if (!response.error) {   
                                this.props.history.push('/member/new-project')

                                this.setState({ 
                                        project_title: '', project_subtitle: '', project_body: '', project_tags: '', project_picture: '', errors:[],
                                        isLoadingDraft: false, messageDraft:true, project_visual:'',editorState: EditorState.createEmpty(),wordCounter:0
                                }) 
                                
                                setTimeout(function(){ this.setState({ msgAnimation:true }); }.bind(this),5000);

                                setTimeout(function(){ this.setState({ messageDraft:false, msgAnimation:false }); }.bind(this), 5500);
                        }
                })
                .catch(error => {  this.setState({ errors: error.response.data.errors, isLoadingDraft: false}) })
        }
        
        /*
        =======================
         Render component
        =======================
        */
        render() {
                const { project_title, project_subtitle, project_picture, project_tags, project_visual, errors,  isLoadingPub, isLoadingDraft, 
                            successMessage, messageDraft, msgAnimation, wordCounter, editorState  } = this.state

                const getPubDescryption = { messageAnimate: msgAnimation, messageArtwork: '../images/member/global/successIcon.png', messageDescryption: 'Projekt został utworzony.' }

                const getDraftDescryption = { messageAnimate: msgAnimation, messageArtwork: '../images/member/global/successIcon.png', messageDescryption: 'Wersja robocza została utworzona.' }

                return (

                <>
                        <main>
                                { successMessage &&   msgSuccess(getPubDescryption )  }      

                                { messageDraft &&   msgSuccess(getDraftDescryption )  }   

                                <Sidenav />

                                <ProjectForm  project_title= { project_title }  project_subtitle={project_subtitle}  project_picture={project_picture} project_visual={project_visual} 
                                project_tags={project_tags}  isLoadingPub={isLoadingPub} isLoadingDraft={isLoadingDraft} wordCounter={wordCounter}  editorState ={ editorState } 
                                errors={ errors } onEditorStateChange={this.onEditorStateChange} createNewProject={this.createNewProject} 
                                createNewDraft={this.createNewDraft} getFormData={this.getFormData} getFormPicture={this.getFormPicture} />
                        </main>
                </>
                );
         }
}
export default NewProject;
