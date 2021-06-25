import  React, { useEffect } from 'react';

{  /*  Components */ }
import {ProjectsBanner,LatestProjects,PopularProjects,Navigation,Footer,Archives,PaginationNav } from '../../components';
import { projectsObjOne  } from './Data';

/*
=======================
Display all components for
Projects me route
=======================
*/
function Projects (props) {

        useEffect(() => {
                document.title = "Projekty | Strefa najlepszych rozwiązań"; 
        }, []);
        
       /*
        =======================
         Render components
        =======================
        */
        return (
         <>      
                <Navigation typeSection={'navigation'} />

                <main>
                        <ProjectsBanner projectsObjOne={ projectsObjOne }  />
                        <LatestProjects latestProjects = {props.projects} />
                        <PopularProjects latestProjects = {props.projects} />
                        <Archives latestProjects = {props.projects} />
                        <PaginationNav />
                 </main>

                <Footer />
        </>
        );
}

export default  Projects;
