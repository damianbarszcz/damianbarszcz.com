
import React, { Component } from 'react';
import disableScroll from 'disable-scroll';
import { withRouter } from 'react-router-dom';

{  /*  Components */ }
import { Menu,NavBrand, ShareButtons,NavSearch  } from '../../components';

class Navigation extends Component {

        constructor(props) {  
                super(props); 
 
                this.state = { searchBox:false,  menu:true, scrollBottom:false, scrollTop:false, articleRead:false, search_tag:'',width: 0  }
 
                this.getSearch = this.getSearch.bind(this);
                this.closeSearchForm = this.closeSearchForm.bind(this);
                this.handleNavigation = this.handleNavigation.bind(this);
                this.searchPublication = this.searchPublication.bind(this);
                this.handleSearchData = this. handleSearchData.bind(this);
                this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
         }  

         /*
        =======================
         Listen actions in methods
        =======================
        */
         componentDidMount() {
                this.updateWindowDimensions();

                window.addEventListener("scroll", this.handleNavigation);
                window.addEventListener('resize', this.updateWindowDimensions);
        }

        componentWillUnmount() {
                window.removeEventListener("scroll", this.handleNavigation);
                window.removeEventListener('resize', this.updateWindowDimensions);
        }


         /*
        =======================
         Run action when resizing
         window page
        =======================
        */
        updateWindowDimensions() {
                this.setState({ width: window.innerWidth  });


                if(this.props.articleTitle){
                        if(this.state.width > 768 && window.pageYOffset > 500){
                                this.setState({  menu:false, articleRead:true,searchBox:false  });
                        }
        
                        else{  this.setState({  menu:true, articleRead:false,searchBox:false}); }
                }
        }

         /*
        =======================
         Navigation search
        =======================
        */
       
        // Open  search form
        getSearch(){ disableScroll.on();  this.setState({  menu:false, searchBox:true  });  }

        // Close  search form
        closeSearchForm(){ disableScroll.off();  this.setState({  menu:true, searchBox:false  }); }

        // Get data from search input
        handleSearchData(e){
                e.preventDefault();

                const name = e.target.name
                const value = e.target.value

                this.setState({  [name]: value  })
        }

        // Find articles 
        searchPublication(){
                this.props.history.push(`/help/search=${this.state.search_tag.replace(/\s+/g, '-').toLowerCase()}`); 
                
                disableScroll.off(); 
        }
                
         /*
        =======================
         Detect scroll page for
         navigation
        =======================
        */
        handleNavigation(e) {
                const window = e.currentTarget;

                // No scroll
                if(window.pageYOffset === 0) {  this.setState({  scrollBottom: false, scrollTop:false });  }

                //Scroll Up
                if (this.prev > window.scrollY) {

                        if(window.pageYOffset < 500) {   this.setState({  scrollBottom: false, scrollTop:true }); }

                        this.setState({  menu:true, articleRead:false });
                } 
                
                //Scroll Down
                else if (this.prev < window.scrollY) {

                        if(window.pageYOffset > 500) {    this.setState({  scrollBottom: true, scrollTop:false });   }
                        
                        if(this.props.articleTitle && this.state.width > 768){
                                this.setState({  menu:false, articleRead:true,searchBox:false  });
                        }

                        else{
                                this.setState({  menu:true, articleRead:false,searchBox:false});
                        }
                }

                this.prev = window.scrollY;
        };

       /*
        =======================
         Render components
        =======================
        */
        render() {
                const {menu, searchBox, scrollBottom, scrollTop,articleRead,search_tag} = this.state;

                return (
                <>      
                        { searchBox && <div className="search-lightbox"></div> } 
                        <nav className={`${this.props.typeSection} ${this.props.typeSection}_theme  ${this.props.typeSection == 'navigation' ? (scrollBottom ?  'navigation--scroll' : ( scrollTop ? 'navigation--noscroll' : '')) : '' }` }>
                                
                                <div className={`${this.props.typeSection}__block g-container`}>
                                        { !searchBox && <NavBrand typeSection={this.props.typeSection} /> }
                                                
                                        { (!searchBox  &&  menu) &&  <Menu typeSection={this.props.typeSection}  reviews= { this.props.reviews } projects = { this.props.projects } />  }
                                                
                                        { searchBox  &&   <NavSearch typeSection={this.props.typeSection} search_tag= { search_tag}  searchPublication={this.searchPublication}  handleSearchData ={this.handleSearchData} closeSearchForm={this.closeSearchForm} /> }

                                        { (!searchBox  &&  menu) ?
                                        <div className={`${this.props.typeSection}__trigger`}>
                                                <button type="button" className={`${this.props.typeSection}__trigger--open`} onClick={ this.getSearch }> <i className="material-icons material__icon"> search </i> </button>    
                                        </div> : ''}
                                        
                                        { this.props.articleTitle  && (
                                        articleRead &&  
                                        <div className={`${this.props.typeSection}__post-title`}>
                                                <span className={`${this.props.typeSection}__post-title--caption`}>  { this.props.articleTitle } </span>
                                        </div> )
                                         }

                                        { this.props.articleTitle  && (
                                        articleRead  &&
                                                <ShareButtons typeSection = {this.props.typeSection} pubType={  this.props.pub_category ? 'review' : 'project'  } pubUrl={this.props.pub_url}   />   )
                                        }
                                </div>
                        </nav>
                </>
                )
        }
}

export default withRouter(Navigation); 
