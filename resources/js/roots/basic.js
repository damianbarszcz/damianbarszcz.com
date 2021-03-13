
{  /*  React Package */ }
import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import axios from 'axios';

{  /*  Templates */  }
import Index from './s_basic/primary/templates/IndexPage/Index';
import Projects from './s_basic/primary/templates/ProjectsPage/Projects';
import Library from './s_basic/primary/templates/LibraryPage/Library';
import Contact from './s_basic/primary/templates/ContactPage/Contact';
import About from './s_basic/primary/templates/AboutPage/About';
import SearchPage from  './s_basic/primary/templates/SearchPage/Search';
import Project from './s_basic/articles/templates/ProjectPage/Project';
import Review from './s_basic/articles/templates/ReviewPage/Review';

class Basic extends Component {
        
        constructor(props) {  
                super(props); 
        
                this.state = { collection:[], projects: [], reviews:[]  }
        } 

        /*
        =======================
         Get api data
        =======================
        */
        componentDidMount(){
                axios.get('/api/basic/collection').then(response => { this.setState({ collection: response.data });  }).catch(errors => { console.log(errors); })

                axios.get('/api/basic/reviews').then(response => {  this.setState({ reviews: response.data }); }).catch(errors => { console.log(errors); })

                axios.get('/api/basic/projects').then(response => { this.setState({ projects: response.data });  console.log(this.state.projects)  }).catch(errors => { console.log(errors); })
        }

       /*
        =======================
         Render components
        =======================
        */
        render() {

        const { collection, projects, reviews } = this.state;

        return (
                <Router>
                        <ScrollToTop>
                                {  /*  Index */ }
                                <Route exact  path="/"  render= { () => <Index setCollection= { collection } setProjects = { projects }  setReviews = { reviews }  /> } />

                                {  /*  Projects */ }
                                <Route exact  path="/projects" component={ () => <Projects setProjects = { projects } /> } />

                                {  /*  Library */}
                                <Route exact  path="/library" component={ () => <Library setReviews = { reviews } /> } />

                                {  /* Contact  */ }
                                <Route exact  path="/contact" component={ Contact } />

                                {  /* About  */}
                                <Route exact path="/about" component={ About } />

                                {  /*  Project Article */ }
                                <Route exact  path="/project/:pub_url" component={ Project } />

                                {  /* Review Article */ }
                                <Route exact path="/review/:pub_url" component={ Review } />

                                {  /* Search Results */ }
                                <Route exact path="/help/:slug" component={ SearchPage } />
                        </ScrollToTop>
                </Router>
            );
       }
}

export default Basic;