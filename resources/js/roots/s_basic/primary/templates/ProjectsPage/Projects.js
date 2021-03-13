import  React, { useEffect } from 'react';

{  /*  Components */ }
import {ProjectsBanner,NewProject,LatestProjects,OldProjects,PaginationNav,Navigation,Footer } from '../../components';
import { newProjectDisplay, getLeftSideProjects,  getRightSideProjects, oldProjectsDisplay}  from '../../../../global/Publications';

function Projects (props) {

        useEffect(() => {
                document.title = "Projekty | Strefa najlepszych rozwiązań"; 
        }, []);

        const getProjects = { projectsCollection: props.setProjects }
        
       /*
        =======================
         Render components
        =======================
        */
        return (
         <>      
                <Navigation linkComponent={'projects'}  styleComponent={ 'nav-light' } nameComponent= {'Projects'} />

                <main>
                        <ProjectsBanner />
                        <NewProject  newProjectDisplay = { newProjectDisplay(getProjects ) } />
                        <LatestProjects getLeftSideProjects = { getLeftSideProjects(getProjects,1,2)} getRightSideProjects = { getRightSideProjects(getProjects,2,4)} />
                        <OldProjects  oldProjectsDisplay = { oldProjectsDisplay(getProjects) }  />
                        <PaginationNav />
                 </main>

                <Footer />
        </>
        );
}

export default  Projects;
