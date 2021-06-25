
import React, { useState, useEffect } from 'react';

{  /*  Components */  }
import { LibrarySection, ProjectsSection, NewPublication, Footer, Navigation } from '../../components';
import { getNewPublication,getReviewsCarousel }  from '../../../../global/Publications';
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
        =======================
         Change carousel position
         (W remoncie)
        =======================
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
        const newPublicationDisplay = { newPubCollection: props.setCollection }

        const getReviews = { reviewsCollection: props.setReviews, position:position }

        return(
                <>
                        <Navigation typeSection={'navigation'} />  
                        <Navigation typeSection={'main-header'} />
                        <main>
                                <NewPublication  getNewPublication = {  getNewPublication(newPublicationDisplay) } />
                                <ProjectsSection projects = { props.projects } indexObjOne = { indexObjOne } />
                                <LibrarySection  prevButton = { prevButton } nextButton= { nextButton } getReviewsCarousel = {  getReviewsCarousel(getReviews) } 
                                chooseLeft = { chooseLeft } chooseRight = { chooseRight } indexObjTwo = { indexObjTwo }  />                     
                        </main>
                        <Footer />
                </>
        );
 }

 export default  Index;