import React, { Component } from 'react';
import axios from 'axios';

{  /*  Components */ }
import { Footer, Navigation } from '../../../primary/components';
import { ProjectBody,ProjectRelated } from '../../components';

class ArticleProject extends Component {

        constructor(props) { 
                super(props); this.state = { project: [], rand_projects: [] } 
        }

        componentDidMount() {
                const pub_url = this.props.match.params.pub_url;

                axios.get(`/api/basic/project/${pub_url}`).then(response => { this.setState({ project: response.data }); });

                axios.get(`/api/basic/projects/random/${pub_url}`).then(response => { this.setState({ rand_projects: response.data }); console.log(this.state.rand_projects)});
        }

        /*
        =======================
         Render components
        =======================
        */
       
        render() {
                const { project } = this.state;

                const getRandArticle = { randArticle: this.state.rand_projects }

                document.title = project.pub_title;

                return (

                <>
                        <Navigation articleTitle={ project.pub_title}  styleComponent={ 'nav-light' } linkComponent={'projects'}   nameComponent= {'Projects'} />

                        <main>
                                <ProjectBody  project = { project } getRandArticle={ getRandArticle } /> 
                                <ProjectRelated getRandArticle= { getRandArticle} />
                        </main>

                        <Footer />
                </>
                )
        }
}
export default ArticleProject ;