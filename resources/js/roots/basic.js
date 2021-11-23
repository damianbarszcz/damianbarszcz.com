
{  /*  React Package */ }
import React, { useState,useEffect,useCallback } from 'react';
import loadable from '@loadable/component'
import { BrowserRouter as Router, Route} from 'react-router-dom';
const ScrollToTop  = loadable.lib(() => import('react-router-scroll-top'))
import axios from 'axios';

{  /*  Templates */  }
const Index = loadable(() => import('./s_basic/primary/templates/IndexPage/Index'));
const Projects = loadable(() => import( './s_basic/primary/templates/ProjectsPage/Projects'));
const Library = loadable(() => import( './s_basic/primary/templates/LibraryPage/Library'));
const Contact  = loadable(() => import( './s_basic/primary/templates/ContactPage/Contact'));
const About  = loadable(() => import( './s_basic/primary/templates/AboutPage/About'));
const Search  = loadable(() => import(  './s_basic/primary/templates/SearchPage/Search'));
const Project  = loadable(() => import( './s_basic/articles/templates/ProjectPage/Project'));
const Review  = loadable(() => import( './s_basic/articles/templates/ReviewPage/Review'));
const Privacy  = loadable(() => import('./s_basic/primary/templates/PrivacyPage/Privacy'));
const CookieDialog  = loadable(() => import( './global/CookieDialog'));
const SiteMessage  = loadable(() => import( './global' ));

function Basic() {
        const [collection, getCollection] = useState([]);
        const [projects, getProducts] = useState([]);
        const [reviews , getReviews]= useState([]);

        /*
        =======================
         Get data from API
        =======================
        */
        const getCollectionAPI = useCallback(async () => {
                const result = await axios( '/api/basic/collection');
                getCollection(result.data);
        }, [])

        const getProjectsAPI = useCallback(async () => {
                const result = await axios( '/api/basic/projects');
                getProducts(result.data);
        }, [])

        const getReviewsAPI = useCallback(async () => {
                const result = await axios( '/api/basic/reviews');
                getReviews(result.data);
        }, [])
            
        useEffect(() => {
                getCollectionAPI();
                getProjectsAPI();
                getReviewsAPI();
        }, [getCollectionAPI,getProjectsAPI,getReviewsAPI])

       /*
        =======================
         Render components
        =======================
        */
        return (
                <Router>
                        <ScrollToTop>
                                {  /*  Cookies message */  }
                                <CookieDialog />

                                {  /*  Site bulding message */ }
                                <SiteMessage />

                                {  /*  Index */ }
                                <Route exact  path="/"  render= { () => <Index collection= { collection } projects = { projects }  reviews = { reviews }  /> } />

                                {  /*  Projects */ }
                                <Route exact  path="/projects" component={ () => <Projects projects = { projects }  /> } />

                                {  /*  Library */}
                                <Route exact  path="/library" component={ () => <Library  reviews = { reviews } /> } />

                                {  /* Contact  */ }
                                <Route exact  path="/contact" component={ Contact } />

                                {  /* About  */}
                                <Route exact path="/about" component={ About } />

                                {  /* Privacy policy  */}
                                <Route exact path="/privacy"  component={ Privacy }  />

                                {  /*  Project Article */ }
                                <Route exact  path="/project/:pub_url" component={ Project }  />

                                {  /* Review Article */ }
                                <Route exact path="/review/:pub_url" component={ Review }  />

                                {  /* Search Results */ }
                                <Route exact path="/help/:slug" component={ Search }  />
                        </ScrollToTop>
                </Router>
            );
       
}

export default Basic;