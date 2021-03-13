import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { pubModal } from '../../components/Modal/Modal';

export default class Sidenav extends Component {

        constructor(props){
                super(props);  this.state = { publicationModal:false, modalAnimation:false }

                this.getModal = this.getModal.bind(this);
                this.exitModal = this.exitModal.bind(this);
        }

        /*
        ==========================
         Get modal  &  Exit Modal
        ==========================
        */

        getModal(e){
                e.preventDefault();

                this.setState({  
                        publicationModal:true, 
                        modalAnimation:true
                });
        }

        exitModal(e){
                e.preventDefault();

                this.setState({  
                        modalAnimation:false,
                        publicationModal:false 
                });
        }

        /*
        =======================
         Render component
        =======================
        */
        render() {
                const { publicationModal, modalAnimation } = this.state

                const getEffect = { modalAnimate: modalAnimation, exitModal: this.exitModal }

                return (
                        <React.Fragment>
                        {  /*-----------------------------------*/   }
                        {  /*--------        Sidenav        -------*/   }
                        {  /*-----------------------------------*/   }
                        <section className="sidenav sidenav_theme" role="navigation">
                                <div className="sidenav__block sidenav__block_modifier">
                                        <ul className="sidenav__list">
                                                <li className="sidenav__list-item">
                                                        <NavLink to="/member/overview" className="sidenav__list-link sidenav__list-link_effect" target="_self" activeClassName="sidenav__list-link--active"  exact={true}> <i className="material-icons material-icons-outlined"> home </i> <span className="sidenav__list-link-caption"> Overview </span></NavLink>
                                                </li>

                                                <li className="sidenav__list-item">
                                                        <NavLink to="/member/reviews" className="sidenav__list-link sidenav__list-link_effect" target="_self" activeClassName="sidenav__list-link--active"> <i className="material-icons material-icons-outlined"> library_books </i> <span className="sidenav__list-link-caption">Reviews </span></NavLink>
                                                </li>

                                                <li className="sidenav__list-item">
                                                        <NavLink to="/member/projects" className="sidenav__list-link sidenav__list-link_effect" target="_self" activeClassName="sidenav__list-link--active"> <i className="material-icons material-icons-outlined"> devices </i> <span className=" sidenav__list-link-caption">Projects </span></NavLink>
                                                </li>

                                                <li className="sidenav__list-item">
                                                        <NavLink to="/member/drafts" className="sidenav__list-link sidenav__list-link_effect" target="_self" activeClassName="sidenav__list-link--active"> <i className="material-icons material-icons-outlined"> file_copy </i> <span className=" sidenav__list-link-caption" >Drafts </span></NavLink>
                                                </li>

                                                <li className="sidenav__list-item">
                                                        <NavLink to="/member/calendar" className="sidenav__list-link sidenav__list-link_effect" target="_self" activeClassName="sidenav__list-link--active"> <i className="material-icons material-icons-outlined"> date_range </i> <span className=" sidenav__list-link-caption">Calendar </span></NavLink>
                                                </li>

                                                <li className="sidenav__list-item">
                                                        <NavLink to="/member/personal-info" className="sidenav__list-link sidenav__list-link_effect" target="_self" activeClassName="sidenav__list-link--active"> <i className="material-icons material-icons-outlined"> account_circle </i> <span className=" sidenav__list-link-caption">Personal info </span></NavLink>
                                                </li>

                                                <li className="sidenav__list-item">
                                                        <NavLink to="/member/statistics" className="sidenav__list-link sidenav__list-link_effect" target="_self" activeClassName="sidenav__list-link--active"> <i className="material-icons material-icons-outlined"> trending_up </i> <span className=" sidenav__list-link-caption" > Statistics</span> </NavLink>
                                                </li>

                                                <li className="sidenav__list-item">
                                                        <NavLink to="/member/about-application" className="sidenav__list-link sidenav__list-link_effect" target="_self" activeClassName="sidenav__list-link--active"> <i className="material-icons material-icons-outlined">info</i> <span className=" sidenav__list-link-caption" > About application </span> </NavLink>
                                                </li>
                                        </ul>

                                        <div className="sidenav__box">
                                                <button type="button" className="btn--small app__button--blue" target="_self" onClick={ (e) => this.getModal(e) }> New Publication </button>
                                        </div>
                                </div>
                        </section>

                        {  /*-----------------------------------*/   }
                        {  /*--------     Pub modal      -------*/   }
                        {  /*-----------------------------------*/   }
                        { publicationModal &&
                               pubModal(getEffect) 
                        }
                        </React.Fragment>
                );
        }
}
