
{  /*  React Package */ }
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import axios from 'axios';

{  /*  Components */ }
import Overview from './s_member/templates/OverviewPage/Overview';
import Reviews from './s_member/templates/ReviewsPage/Reviews';
import Projects from './s_member/templates/ProjectsPage/Projects';
import Calendar from './s_member/templates/CalendarPage/Calendar';
import Personal from './s_member/templates/PersonalPage/Personal';
import Drafts from './s_member/templates/DraftsPage/Drafts';
import NewReview from './s_member/templates/NewReviewPage/NewReview';
import EditReview from './s_member/templates/EditReviewPage/EditReview';
import ReviewDraft from './s_member/templates/ReviewDraftPage/ReviewDraft';
import NewProject from './s_member/templates/NewProjectPage/NewProject';
import EditProject from './s_member/templates/EditProjectPage/EditProject';
import ProjectDraft  from './s_member/templates/ProjectDraftPage/ProjectDraft';
import AboutApp from './s_member/templates/AboutAppPage/AboutApp';
import Navigation from './s_member/components/Navigation/Navigation';
import Statistics from './s_member/templates/StatisticsPage/Statistics';


class Member extends Component {

        constructor(props){  
                super(props);    this.state = {   user: [] }    
        }

        componentDidMount() {  
                axios.get(`/api/account`)
                .then(response => { 
                        this.setState({     user: response.data   });  

                        console.log(this.state.user);

                }).catch(errors => { console.log(errors); })
        }
        
        render() {
                const { user } = this.state;

                return (
                        <Router>
                                <ScrollToTop>
                                        <Navigation user={ user } />

                                        <Switch>
                                                {  /* Overview*/  }
                                                <Route exact path="/member/overview" component={ Overview }  />

                                                {  /* Personal info */  }
                                                <Route exact path="/member/personal-info" render={(props) => <Personal user={ user} {...props} /> } />

                                                {  /* Calendar */  }
                                                <Route exact path="/member/calendar" component={ Calendar } />

                                                { /* Statistics */  }
                                                 <Route exact path="/member/statistics" component={ Statistics } />

                                                {  /* About application */  }
                                                <Route exact path="/member/about-application" component={ AboutApp } />

                                                {  /* Drafts */  }
                                                <Route exact path="/member/drafts" component={ Drafts } />

                                                {  /* Reviews */  }
                                                <Route exact path="/member/reviews" component={ Reviews } />

                                                {  /* New Review */  }
                                                <Route exact path="/member/new-review" component={ NewReview } />

                                                {  /*  Review edit */ }
                                                <Route exact  path="/member/reviews/edit/:pub_url" component={ EditReview } />

                                                {  /* Edit Review Draft */  }
                                                <Route exact path="/member/reviews/draft/:pub_url" component={ ReviewDraft } />

                                                {  /* Projects */  }
                                                <Route exact path="/member/projects" component={ Projects } />

                                                {  /* New Project */  }
                                                <Route exact path="/member/new-project" component={ NewProject } />

                                                {  /*  Project edit */ }
                                                <Route exact  path="/member/projects/edit/:pub_url" component={ EditProject } />

                                                {  /* Edit Project Draft  */  }
                                                <Route exact path="/member/projects/draft/:pub_url" component={ ProjectDraft } />
                                        </Switch>
                                </ScrollToTop>
                        </Router>
                );
        }
}

export default  Member;

