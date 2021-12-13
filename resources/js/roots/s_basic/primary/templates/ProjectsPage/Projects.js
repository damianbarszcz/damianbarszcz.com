import React, { useState, useEffect } from 'react';

{  /*  Components */ }
import { ProjectsBanner,LatestProjects,PopularProjects,Navigation,Footer,Archives,PaginationNav, NoProjects } from '../../components';
import { projectsObjOne, projectsObjTwo, projectsObjThree,projectsObjFour,projectsObjFive } from './Data';

/*
=======================
Display all components for
Projects me route
=======================
*/
function Projects(props) {
        const [position,getPosition] = useState(0);
        const [counter, setCounter] = useState(0);
        const [width, getWidth] = useState(window.innerWidth);
        const [prevButton,getPrevButton] = useState(false);
        const [nextButton,getNextButton] = useState(true);

        useEffect(() => {
                document.title = "Projekty | Strefa najlepszych rozwiązań"; 

                window.addEventListener('resize', updateWindowDimensions);
        }, []);

        const updateWindowDimensions = () => {
                getWidth(window.innerWidth);
         }

        /*
        ===========================
         Change carousel items position
        ===========================
        */
        const chooseLeft = () =>{
                if(width >= 1500){
                        if(counter != 0){
                                getPosition(position+(396));
                                setCounter(counter - 1)
                        }
                }

                else if(width >= 1200 && width < 1500){
                        if(counter != 0){
                                getPosition(position+(380));
                                setCounter(counter - 1)
                        }
                }

                 else if(width >= 885  && width < 1200){
                        if(counter != 0){
                                getPosition(position+(350));
                                setCounter(counter - 1)
                        }
                }

                else if(width >= 565  && width < 885){
                        if(counter != 0){
                                getPosition(position+(330));
                                setCounter(counter - 1)
                        }
                }

                else{
                        if(counter != 0){
                                getPosition(position+(372));
                                setCounter(counter - 1)
                        }
                }
                getNextButton(true);
        }

        const chooseRight = () =>{
                if(width >= 1500){
                        if(counter != props.projects.slice(5,10).length-4){
                                getPosition(position-(396));
                                setCounter(counter + 1)
                        }
                }

                else if(width >= 1200 && width < 1500){
                        if(counter != props.projects.slice(5,10).length-3){
                                getPosition(position-(380));
                                setCounter(counter + 1)
                        }
                }

                else if(width >= 885 && width < 1200){
                        if(counter != props.projects.slice(5,10).length - 2){
                                getPosition(position-(350));
                                setCounter(counter + 1)
                        }
                }

                else if(width >=565 && width < 885){
                        if(counter != props.projects.slice(5,10).length - 1){
                                getPosition(position-(330));
                                setCounter(counter + 1)
                        }
                }

                else{
                        if(counter != props.projects.slice(5,10).length -1){
                                getPosition(position-(372));
                                setCounter(counter + 1)
                        }
                }

                getPrevButton(true);
        }

        const readingTime = (article) => {
                const text = article;
                const wpm = 300;
                const words = text.trim().split(/\s+/).length;
                const time = Math.ceil(words / wpm);
                return time + " min. czytania";
        }

       /*
        =======================
         Render components
        =======================
        */

        return (
                <>      
                <Navigation typeSection={'navigation'} />
        
                <main>
                        {   props.projects.length  > 0 ?
                        <>
                                <ProjectsBanner projectsObjOne={ projectsObjOne }  />
                                <LatestProjects readingTime={readingTime} latestProjects = { props.projects }  projectsObjTwo ={ projectsObjTwo  } />

                                {   props.projects.length > 5 &&
                                        <PopularProjects latestProjects = { props.projects }prevButton = { prevButton } nextButton= { nextButton }  chooseLeft = { chooseLeft }
                                        chooseRight = { chooseRight } projectsObjThree={ projectsObjThree } position = {position}  />      
                                }

                                {   props.projects.length > 9 && 
                                        <Archives latestProjects = { props.projects } projectsObjFour ={ projectsObjFour } />
                                }
                                {   props.projects.length > 18 && 
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


export default  Projects;
