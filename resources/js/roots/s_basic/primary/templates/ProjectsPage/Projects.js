import React, { Component } from 'react';

{  /*  Components */ }
import { ProjectsBanner,LatestProjects,PopularProjects,Navigation,Footer,Archives,PaginationNav, NoProjects } from '../../components';
import { projectsObjOne, projectsObjTwo, projectsObjThree,projectsObjFour,projectsObjFive } from './Data';

/*
=======================
Display all components for
Projects me route
=======================
*/
class Projects extends Component {
        constructor(props){
                super(props);

                this.state = {  width:0 }

                this.handleResize = this.handleResize.bind(this);
        }        

        componentDidMount(){
                document.title = "Projekty | Strefa najlepszych rozwiązań"; 

                this.handleResize();

                window.addEventListener("resize", this.handleResize); 
        }; 

        componentWillUnmount(){
                window.removeEventListener("resize", this.handleResize);
        }

        handleResize() {    this.setState({   width: window.innerWidth  });   }

       /*
        =======================
         Render components
        =======================
        */
       render() {

                return (
                <>      
                        <Navigation typeSection={'navigation'} />
        
                        <main>
                                {   this.props.projects.length  > 0 ?
                                        <>
                                        <ProjectsBanner projectsObjOne={ projectsObjOne }  />
                                        <LatestProjects latestProjects = { this.props.projects }  projectsObjTwo ={ projectsObjTwo  } />

                                        {   this.props.projects.length > 5 &&
                                                <PopularProjects latestProjects = { this.props.projects } projectsObjThree={ projectsObjThree } /> 
                                        }

                                        {   this.props.projects.length > 9 && 
                                                <Archives latestProjects = { this.props.projects } projectsObjFour ={ projectsObjFour } />
                                        }
                                        {   this.props.projects.length > 18 && 
                                                <PaginationNav />
                                        }
                                        </> 
                                        : <NoProjects projectsObjFive ={ projectsObjFive } />
                                        }
                        </main>
        
                        <Footer />
                </>
                );
       }
}

export default  Projects;
