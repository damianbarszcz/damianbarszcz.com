
{  /*  React Packages */  }
import React, { Component } from 'react';
{  /*  Components */  }
import { LibrarySection, ProjectsSection, NewPublication, NavSection,Footer, Navigation } from '../../components';
import { 
getNewPublication,getRightSideProjects,getLeftSideProjects, getReviewsCarousel }  from '../../../../global/Publications';

class Index extends Component  {
        
        constructor(props) {  
                super(props); 
 
                this.state = { isNavigation:false, prevButton:false, nextButton:true, position:0 }

                this.handleNavigation= this.handleNavigation.bind(this);
                this.chooseLeft = this.chooseLeft.bind(this);
                this.chooseRight= this.chooseRight.bind(this);
         }  

         componentDidMount() {
                document.title = "Damian Barszcz | Blog Personalny";

                window.addEventListener("scroll", this.handleNavigation);
        }

        /*
        =======================
         Detect scrolling page
        =======================
        */
       
       handleNavigation(e) {
                const window = e.currentTarget;

                if(window.pageYOffset === 0) {  this.setState({  isNavigation:false });  }
                
                else if (this.prev < window.scrollY) {
                        if(window.pageYOffset > 500) {    this.setState({  isNavigation:true });   }
                }

                this.prev = window.scrollY;
        };

        /*
        =======================
         Change carousel position
        =======================
        */

       chooseLeft(){ this.setState({ prevButton:false, nextButton:true,position:100 });   }

       chooseRight(){ this.setState({ prevButton:true, nextButton:false,position:-100  });   }

        /*
        =======================
         Reder component
        =======================
        */
        render(){
                const newPublicationDisplay = { newPubCollection: this.props.setCollection }

                const getReviews = { reviewsCollection: this.props.setReviews, position:this.state.position }

                const getProjects = { projectsCollection: this.props.setProjects }

                const { isNavigation,  prevButton, nextButton } = this.state;

                return(
                        <>                   
                               { isNavigation &&  <Navigation  styleComponent={ 'nav-light' } />  }
                                <NavSection />
                                <main>
                                        <NewPublication  getNewPublication = {  getNewPublication(newPublicationDisplay) } />
                                        <ProjectsSection getLeftSideProjects= { getLeftSideProjects(getProjects,1,2) } getRightSideProjects= { getRightSideProjects(getProjects,2,4) } />
                                        <LibrarySection  prevButton = { prevButton } nextButton= { nextButton } getReviewsCarousel = {  getReviewsCarousel(getReviews) } 
                                        chooseLeft = { this.chooseLeft } chooseRight = { this.chooseRight }  />                     
                                </main>
                                <Footer />
                        </>
                );
        }
 }

 export default  Index;