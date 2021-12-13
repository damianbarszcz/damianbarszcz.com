
import React, { useState, useEffect } from 'react';

{  /*  Components */  }
import { LibrarySection, ProjectsSection, NewPublication, Footer, Navigation } from '../../components';
import { indexObjOne, indexObjTwo  } from './Data';

/*
=======================
Display all components for
Index route
=======================
*/
function Index(props)  {
        const [position,getPosition] = useState(0);
        const [counter, setCounter] = useState(0);
        const [width, getWidth] = useState(window.innerWidth);
        const [prevButton,getPrevButton] = useState(false);
        const [nextButton,getNextButton] = useState(true);
    
        useEffect(() =>{
                document.title = "Damian Barszcz | Blog Personalny";

                window.addEventListener('resize', updateWindowDimensions);
                
                if(width >=1235){
                        if(counter == props.reviews.length-3){  getNextButton(false);   }
                }

                if(width >= 850 && width < 1235){
                        if(counter == props.reviews.length-2){  getNextButton(false);   }
                }

                else{  if(counter == props.reviews.length-1){  getNextButton(false);   } }

                if(counter == 0){  getPrevButton(false);   }
        });

        const updateWindowDimensions = () => {
                getWidth(window.innerWidth);
         }

         const readingTime = (article) => {
                const text = article;
                const wpm = 300;
                const words = text.trim().split(/\s+/).length;
                const time = Math.ceil(words / wpm);
                return time + " min. czytania";
        }

        /*
        ===========================
         Change carousel items position
        ===========================
        */
        const chooseLeft = () =>{
                if(width >= 1235){
                        if(counter != 0){
                                getPosition(position+(404));
                                setCounter(counter - 1)
                        }
                }

                 if(width >= 850 && width < 1235){
                        if(counter != 0){
                                getPosition(position+(404));
                                setCounter(counter - 1)
                        }
                }

                else{
                        if(counter != 0){
                                getPosition(position+(404));
                                setCounter(counter - 1)
                        }
                }
                getNextButton(true);
        }

        const chooseRight = () =>{
                if(width >= 1235){
                        if(counter != props.reviews.length-3){
                                getPosition(position-(404));
                                setCounter(counter + 1)
                        }
                }

                if(width >= 850 && width < 1235){
                        if(counter != props.reviews.length-2){
                                getPosition(position-(404));
                                setCounter(counter + 1)
                        }
                }

                else{
                        if(counter != props.reviews.length-1){
                                getPosition(position-(404));
                                setCounter(counter + 1)
                        }
                }
                getPrevButton(true);
        }

        /*
        =======================
         Reder component
        =======================
        */

        return(
                <>
                        <Navigation typeSection={ 'navigation' }  projects = {props.projects  }  reviews = { props.reviews } />  
                        <Navigation typeSection={ 'main-header' } projects = {props.projects  }  reviews = { props.reviews } />
                        <main>
                                <NewPublication  newPublication = {  props.collection } />

                                { props.projects.length  > 5 &&
                                        <ProjectsSection readingTime={readingTime} collection={ props.collection } projects = { props.projects } indexObjOne = { indexObjOne } />
                                 }  

                                { props.reviews.length  > 5  &&
                                        <LibrarySection  reviews = {  props.reviews }  prevButton = { prevButton } nextButton= { nextButton }  chooseLeft = { chooseLeft }
                                        chooseRight = { chooseRight } indexObjTwo = { indexObjTwo } position = {position}  />      
                                 }  
                        </main>
                        <Footer />
                </>
        );
 }

 export default  Index;