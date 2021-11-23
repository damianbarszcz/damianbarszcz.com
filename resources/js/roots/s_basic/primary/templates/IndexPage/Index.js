
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
        const [prevButton,getPrevButton] = useState(false);
        const [nextButton,getNextButton] = useState(true);
    
        useEffect(() =>{
                document.title = "Damian Barszcz | Blog Personalny";
        });

        /*
        ===========================
         Change carousel items position
         (W remoncie)
        ===========================
        */
        const chooseLeft = () =>{
                getPosition(position+190);
                getNextButton(true);
                console.log(props.setReviews.length);
        }

        const chooseRight = (old_index, new_index) =>{
                if (new_index >=props.setReviews.length) {
                        var k = new_index - props.setReviews.length + 1;
                        while (k--) {
                                props.setReviews.push(undefined);
                        }
                    }
                    props.setReviews.splice(new_index, 0, props.setReviews.splice(old_index, 1)[0]);
                    return props.setReviews; 
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
                                        <ProjectsSection collection={ props.collection } projects = { props.projects } indexObjOne = { indexObjOne } />
                                 }  

                                { props.reviews.length  > 5  &&
                                        <LibrarySection  collection={ props.collection } reviews = {  props.reviews }  prevButton = { prevButton } nextButton= { nextButton }  chooseLeft = { chooseLeft }
                                        chooseRight = { chooseRight } indexObjTwo = { indexObjTwo }  />      
                                 }  
                        </main>
                        <Footer />
                </>
        );
 }

 export default  Index;