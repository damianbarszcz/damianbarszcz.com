import  React, { useEffect,useState } from 'react';
import axios from 'axios';

{  /*  Components */ }
import { Footer, Navigation } from '../../../primary/components';
import { ProjectBody,ArticleRelated } from '../../components';
import { relatedDisplay } from '../../../../global/Publications';
import { ArticleObjOne } from '../ProjectPage/Data';

/*
=======================
Get single project article
with available actions
 =======================
*/
function Project(props){
        const [project, getProject] = useState({});
        const [randProjects, getRandProjects] = useState([]);

        useEffect(() => {
                const pub_url = props.match.params.pub_url;
                
                axios.get(`/api/basic/project/${pub_url}`).then(response => {
                        getProject(response.data); 
                });

                axios.get(`/api/basic/projects/random/${pub_url}`).then(response => { 
                        getRandProjects(response.data);
                });
        }, []);

        const setRandProjects = { randCollection: randProjects }
        
        /*
        =======================
         Render components
        =======================
        */
        return (
                <>
                        <Navigation articleTitle={ project.pub_title}  typeSection={'navigation'}  pub_url = {project.pub_url}  projects = { props.projects  }  reviews = { props.reviews } />
                        <main>
                                <ProjectBody  typeSection={'article'}  typeArticle ={ 'article--project' } pub_title = { project.pub_title } pub_subtitle = { project.pub_subtitle } pub_body = { project.pub_body }  
                                pub_picture = { project.pub_picture}  date_of_publication ={ project.date_of_publication } pub_tags = {project.pub_tags}  pub_url = {project.pub_url}  pub_color= { project.pub_color }   /> 

                                <ArticleRelated relatedHeaderTitle={ ArticleObjOne.related_title}  sectionType={'related--project'}randArticles= { relatedDisplay(setRandProjects) } />
                        </main>
                        <Footer />
                </>
        );
}

export default  Project;