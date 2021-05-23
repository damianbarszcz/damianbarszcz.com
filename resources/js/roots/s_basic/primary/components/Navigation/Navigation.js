
import React, { Component } from 'react';
import ReadingProgress from 'react-snakke';
import disableScroll from 'disable-scroll';
import axios from 'axios';
import { Link,withRouter } from 'react-router-dom';
import NavBrand from '../NavBrand/NavBrand';
import NavMenu from '../NavMenu/NavMenu';
import  NavMobile  from '../NavMobile/NavMobile';
import {
        BrowserView,
        MobileView,
        isBrowser,
        isMobile
      } from "react-device-detect";

class PrimaryNav extends Component {

        constructor(props) {  
                super(props); 
 
                this.state = { user: [], searchBox:false,  headerNav:true, navScrollBottom:false, navScrollTop:false, articleRead:false, memberView:true, search_tag:''  }
 
                this.getSearch = this.getSearch.bind(this);
                this.closeSearchBox = this.closeSearchBox.bind(this);
                this.handleNavigation = this.handleNavigation.bind(this);
                this.searchInformation = this.searchInformation.bind(this);
                this.handleInput = this.handleInput.bind(this);
                this.onLogout = this.onLogout.bind(this);
                this.getAccountDropdown = this.getAccountDropdown.bind(this);
                this.closeAccountDropdown = this.closeAccountDropdown.bind(this);
         }  

         componentDidMount() {
                axios.get(`/api/account`)
                .then(response => { 
                        this.setState({     user: response.data   });  

                        console.log(this.state.user);

                }).catch(errors => { console.log(errors); })

                window.addEventListener("scroll", this. handleNavigation);
        }

        /*
        =======================
         Logout with application
        =======================
        */
        onLogout(e){
                e.preventDefault();

                axios.post(`/logout`)
                .then(response => {
                        if (!response.error) {   
                                if(window.location.reload(false)){
                                        this.props.history.push(`/`)             
                                }                            
                        }
                 })
                .catch(error => {  this.setState({ errors: error.response.data.errors}) })
        }

        /*
        =======================
         Navigation search
        =======================
        */

        getSearch(){ disableScroll.on();  this.setState({  headerNav:false, searchBox:true, memberView:false  });  }

        closeSearchBox(){ disableScroll.off();   this.setState({  headerNav:true, searchBox:false, memberView:true  }); }

        handleInput(e){
                e.preventDefault();

                const name = e.target.name
                const value = e.target.value

                this.setState({  [name]: value  })
        }

        searchInformation(){
                this.props.history.push(`/help/search=${this.state.search_tag.replace(/\s+/g, '-').toLowerCase()}`); 
                
                disableScroll.off(); 
        }
                

       /*
        =======================
         Detect scrolling page
        =======================
        */
       
        handleNavigation(e) {
                const window = e.currentTarget;

                if(window.pageYOffset === 0) {  this.setState({  navScrollBottom: false, navScrollTop:false });  }

                if (this.prev > window.scrollY) {

                        if(window.pageYOffset < 500) {   this.setState({  navScrollBottom: false, navScrollTop:true }); }

                        this.setState({  headerNav:true, articleRead:false,memberView:true });
                
                } 
                
                else if (this.prev < window.scrollY) {

                        if(window.pageYOffset > 500) {    this.setState({  navScrollBottom: true, navScrollTop:false });   }
                        
                        if(this.props.articleTitle){
                                this.setState({  headerNav:false, articleRead:true,searchBox:false, memberView:false  });
                        }

                        else{
                                this.setState({  headerNav:true, articleRead:false,searchBox:false, memberView:true });
                        }
                }

                this.prev = window.scrollY;
        };

        /*
        =======================
         get Account window
        =======================
        */
        getAccountDropdown(){
                if (!this.state.accountDropdown) {
                        document.addEventListener('click', this.closeAccountDropdown, false);
                } else {
                        document.removeEventListener('click', this.closeAccountDropdown, false);
                }
                  
                this.setState(prevState => ({ accountDropdown: !prevState.accountDropdown }));
        }

        
        /*
        ============================
         Close window after click outside
        ============================
        */
        closeAccountDropdown(e) {
                if (this.node.contains(e.target)) { return;   }
                
                this.getAccountDropdown();
        }

       /*
        =======================
         Render components
        =======================
        */

        render() {
                const {  user,headerNav, searchBox, navScrollBottom, navScrollTop,articleRead,search_tag,accountDropdown, memberView  } = this.state;

                return (
                <>
                          { searchBox && <div className="search-lightbox"></div> } 
                        <nav className={`navigation navigation_theme ${ this.props.styleComponent } ${ navScrollBottom ? 'nav-scroll' : ( navScrollTop ? 'nav-noscroll' : '') } `}  aria-label="Primary Navigation">
                                <div className="navigation__block g-container">
                                        { headerNav && <NavMobile /> }

                                        <NavBrand linkComponent ={ this.props.linkComponent }  />
        
                                        { headerNav && <NavMenu /> }

                                        {  /*---  Navigation > Search ---*/   }
                                        { searchBox && 
                                        <div className="navigation__search">
                                                <form className="navigation__search-form"onSubmit={ this.searchInformation } method="GET">
                                                        <button type="button" className="form__button form__button--search"> <i className="material__icon material-icons"> search </i> </button>

                                                        <input name="search_tag" type="text" className="form__input form__input_effect" value={ search_tag } onChange={ this.handleSearchData }  aria-label="Wyszukaj" placeholder="Wyszukaj" />

                                                        <button type="button" className="form__button form__button--close" onClick={ this.closeSearchBox }> <i className="material__icon material-icons"> close </i> </button>
                                                </form>
                                        </div> }

                                        { /*---  Navigation > Sh-box  ---*/   }
                                         { (!searchBox && headerNav)?
                                                <button type="button" className="form__button form__button--open" onClick={ this.getSearch }> <i className="material-icons material__icon"> search </i> </button> : ''
                                         }
                                </div>
                        </nav>
                </>
                )
        }
}

export default withRouter(PrimaryNav); 
