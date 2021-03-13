
import React, { Component } from 'react';
import ReadingProgress from 'react-snakke';
import disableScroll from 'disable-scroll';
import { Link,withRouter } from 'react-router-dom';

class PrimaryNav extends Component {

        constructor(props) {  
                super(props); 
 
                this.state = { searchBox:false,  headerNav:true, navScrollBottom:false, navScrollTop:false, articleRead:false, search_tag:''  }
 
                this.getSearch = this.getSearch.bind(this);
                this.closeSearchBox = this.closeSearchBox.bind(this);
                this.handleNavigation = this.handleNavigation.bind(this);
                this.searchInformation = this.searchInformation.bind(this);
                this.handleInput = this.handleInput.bind(this);
         }  

         componentDidMount() {
                window.addEventListener("scroll", this. handleNavigation);
        }

        /*
        =======================
         Navigation search
        =======================
        */

        getSearch(){ disableScroll.on();  this.setState({  headerNav:false, searchBox:true  });  }

        closeSearchBox(){ disableScroll.off();   this.setState({  headerNav:true, searchBox:false  }); }

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

                this.setState({  headerNav:true, articleRead:false });
        
        } 
        
        else if (this.prev < window.scrollY) {

                if(window.pageYOffset > 500) {    this.setState({  navScrollBottom: true, navScrollTop:false });   }
                
                if(this.props.articleTitle){
                        this.setState({  headerNav:false, articleRead:true,searchBox:false  });
                }

                else{
                        this.setState({  headerNav:true, articleRead:false,searchBox:false});
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
                const { headerNav, searchBox, navScrollBottom, navScrollTop,articleRead,search_tag } = this.state;

                return (
                <React.Fragment>
                        {  /*-----------------------------------*/    }
                        {  /*--------      Navigation     -------*/    }
                        {  /*-----------------------------------*/    }  
                         { searchBox && <div className="search-lightbox"></div> } 
                        <nav className={`navigation navigation_theme ${ this.props.styleComponent } ${ navScrollBottom ? 'nav-scroll' : ( navScrollTop ? 'nav-noscroll' : '') } `}  aria-label="Primary Navigation">
                                <div className="navigation__block g-container">
                                        {  /*---  Navigation > Brand ---*/   }
                                                <div className="navigation__brand">
                                                        <Link to="/" aria-label="Author Logo">
                                                                <svg  className="navigation__brand-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 424.47 40.65">
                                                                        <path className="navigation__brand-logo--yellow"  d="M274.12,560.43c3.64,0,6.36.85,8.15,2.57s2.68,4.26,2.68,7.62a8.17,8.17,0,0,1-5.19,7.87,16,16,0,0,1-6.33,1.11l.23-2.57a19.31,19.31,0,0,1,4,.49,14.94,14.94,0,0,1,4.41,1.71,10.12,10.12,0,0,1,3.54,3.44,10.38,10.38,0,0,1,1.4,5.64,13.54,13.54,0,0,1-1.23,6.18,9.57,9.57,0,0,1-3.22,3.72,12.51,12.51,0,0,1-4.28,1.81,21.28,21.28,0,0,1-4.39.48H259.75a3.35,3.35,0,0,1-2.48-1,3.42,3.42,0,0,1-1-2.49V563.92a3.42,3.42,0,0,1,1-2.49,3.35,3.35,0,0,1,2.48-1Zm-1,6.75H262.94l.75-.91v10.36l-.69-.52h10.26a4.53,4.53,0,0,0,3-1.09,3.85,3.85,0,0,0,1.31-3.14,4.11,4.11,0,0,0-4.45-4.7Zm.46,15.69H263.17l.52-.46v12.08l-.57-.57h10.82a6,6,0,0,0,4.17-1.41,5.41,5.41,0,0,0,1.54-4.2,5.51,5.51,0,0,0-1-3.72,4.4,4.4,0,0,0-2.45-1.44A13.46,13.46,0,0,0,273.55,582.87Z" transform="translate(-256.27 -560.43)" />
                                                                        <path className="navigation__brand-logo--blue" d="M317.72,569.3a3.29,3.29,0,0,1,2.45,1,3.41,3.41,0,0,1,1,2.52V597a3.43,3.43,0,0,1-1,2.49,3.5,3.5,0,0,1-4.9,0,3.43,3.43,0,0,1-1-2.49V594.2l1.26.52a3.21,3.21,0,0,1-.8,1.8,10.88,10.88,0,0,1-2.17,2.09,13.32,13.32,0,0,1-3.22,1.75,11,11,0,0,1-4,.71,12.91,12.91,0,0,1-7.12-2,14.24,14.24,0,0,1-5.05-5.61,17.64,17.64,0,0,1-1.85-8.21,17.85,17.85,0,0,1,1.85-8.28,14.55,14.55,0,0,1,5-5.61,12.55,12.55,0,0,1,6.95-2,13.29,13.29,0,0,1,4.51.74,13.65,13.65,0,0,1,3.56,1.89,10.94,10.94,0,0,1,2.34,2.32,3.67,3.67,0,0,1,.82,2l-2.05.74v-4.18a3.43,3.43,0,0,1,1-2.49A3.26,3.26,0,0,1,317.72,569.3Zm-11.51,25.48a7.72,7.72,0,0,0,4.39-1.26,8.51,8.51,0,0,0,2.93-3.44,11,11,0,0,0,1.06-4.86,11.19,11.19,0,0,0-1.06-4.93,8.48,8.48,0,0,0-2.93-3.43,7.72,7.72,0,0,0-4.39-1.26,7.57,7.57,0,0,0-4.33,1.26,8.43,8.43,0,0,0-2.94,3.43,11.19,11.19,0,0,0-1.06,4.93,11,11,0,0,0,1.06,4.86,8.46,8.46,0,0,0,2.94,3.44A7.57,7.57,0,0,0,306.21,594.78Z" transform="translate(-256.27 -560.43)" />
                                                                        <path className="navigation__brand-logo--green" d="M332,600.5a3.26,3.26,0,0,1-2.45-1,3.43,3.43,0,0,1-1-2.49V573.36a3.43,3.43,0,0,1,1-2.49,3.5,3.5,0,0,1,4.9,0,3.43,3.43,0,0,1,1,2.49v5.39l-.4-3.84a8.7,8.7,0,0,1,1.63-2.43,9.45,9.45,0,0,1,2.25-1.78,10.41,10.41,0,0,1,2.68-1.06,12.07,12.07,0,0,1,2.85-.34,4.3,4.3,0,0,1,2.87,1,2.92,2.92,0,0,1,1.17,2.29,3.39,3.39,0,0,1-1,2.72,3.11,3.11,0,0,1-2.1.83,4.66,4.66,0,0,1-2-.4,5,5,0,0,0-2-.4,4.9,4.9,0,0,0-2.09.49,5.66,5.66,0,0,0-1.93,1.52,7.87,7.87,0,0,0-1.43,2.54,10.7,10.7,0,0,0-.54,3.58V597a3.43,3.43,0,0,1-1,2.49A3.26,3.26,0,0,1,332,600.5Z" transform="translate(-256.27 -560.43)" />
                                                                        <path className="navigation__brand-logo--yellow" d="M351.52,595.75a3.19,3.19,0,0,1-.51-2.06,2.75,2.75,0,0,1,1.48-2.18,3.07,3.07,0,0,1,1.94-.48,3.17,3.17,0,0,1,2,1.06,13.48,13.48,0,0,0,3.48,2.57,10.14,10.14,0,0,0,4.56.92,16.18,16.18,0,0,0,1.88-.26,3.61,3.61,0,0,0,1.8-.92,2.87,2.87,0,0,0,.77-2.2,2.51,2.51,0,0,0-.86-2,7.05,7.05,0,0,0-2.25-1.26c-.93-.35-2-.67-3.11-1s-2.38-.72-3.62-1.14a15.17,15.17,0,0,1-3.39-1.63,8,8,0,0,1-2.51-2.67,8.19,8.19,0,0,1-1-4.17,7.61,7.61,0,0,1,1.6-4.87,10.31,10.31,0,0,1,4.13-3.09,13.31,13.31,0,0,1,5.33-1.09,16.92,16.92,0,0,1,3.71.43,14.6,14.6,0,0,1,3.7,1.37,9.2,9.2,0,0,1,3,2.49,4.22,4.22,0,0,1,.74,2.06,2.48,2.48,0,0,1-1.09,2.18,2.71,2.71,0,0,1-2,.6,3,3,0,0,1-1.88-.77,6.83,6.83,0,0,0-2.59-2,9,9,0,0,0-3.74-.74,9.66,9.66,0,0,0-1.85.2,3.58,3.58,0,0,0-1.74.86,3.15,3.15,0,0,0,.11,4.18,6.63,6.63,0,0,0,2.31,1.26c1,.32,2,.64,3.11.94s2.3.67,3.48,1.09a13.83,13.83,0,0,1,3.25,1.66,8.05,8.05,0,0,1,2.39,2.66,8.42,8.42,0,0,1,.91,4.15,7.58,7.58,0,0,1-1.71,5,10.89,10.89,0,0,1-4.27,3.12,13.74,13.74,0,0,1-5.25,1.05,20.32,20.32,0,0,1-6.72-1.17A11.62,11.62,0,0,1,351.52,595.75Z" transform="translate(-256.27 -560.43)" />
                                                                        <path className="navigation__brand-logo--blue" d="M400.2,594.2a3.15,3.15,0,0,1,2.28.89,3,3,0,0,1,.91,2.26,3,3,0,0,1-.91,2.24,3.09,3.09,0,0,1-2.28.91H381.84a2.8,2.8,0,0,1-2.28-1,2.94,2.94,0,0,1-.79-2.06,8,8,0,0,1,.22-1.52,4.34,4.34,0,0,1,.86-1.51L394,575.94l-.11.8H382.36a3.07,3.07,0,0,1-2.28-.91,3.11,3.11,0,0,1-.91-2.29,3,3,0,0,1,.91-2.21,3.13,3.13,0,0,1,2.28-.88h17.55a2.93,2.93,0,0,1,2.23,1,3.1,3.1,0,0,1,.79,2.46,6.49,6.49,0,0,1-.2,1.14,4,4,0,0,1-.76,1.38l-14,18.15v-.35Z" transform="translate(-256.27 -560.43)" />
                                                                        <path className="navigation__brand-logo--green" d="M421.06,569.3a20.75,20.75,0,0,1,5.67.69,9.15,9.15,0,0,1,3.76,1.91,3.87,3.87,0,0,1,1.34,3,3.78,3.78,0,0,1-.68,2.15,2.26,2.26,0,0,1-2,1,3.72,3.72,0,0,1-1.51-.26,4,4,0,0,1-1.05-.65,6.42,6.42,0,0,0-1.08-.75,5.1,5.1,0,0,0-1.74-.54,10.62,10.62,0,0,0-1.74-.2,9.15,9.15,0,0,0-4.93,1.26,8.36,8.36,0,0,0-3.11,3.4,10.91,10.91,0,0,0-1.08,5,10.49,10.49,0,0,0,1.11,4.89,8.75,8.75,0,0,0,3.08,3.41,8.21,8.21,0,0,0,4.53,1.26,14.36,14.36,0,0,0,2.45-.18,6,6,0,0,0,1.71-.51,11.5,11.5,0,0,0,1.43-1,3.39,3.39,0,0,1,4.16.43,3.46,3.46,0,0,1,.79,2.31,3.28,3.28,0,0,1-1.59,2.61,13,13,0,0,1-4.19,1.89,21,21,0,0,1-5.62.71A14.21,14.21,0,0,1,413,599a13.94,13.94,0,0,1-5.11-5.69,18,18,0,0,1-1.79-8.07,17.27,17.27,0,0,1,1.91-8.28,14.25,14.25,0,0,1,5.3-5.61A14.87,14.87,0,0,1,421.06,569.3Z" transform="translate(-256.27 -560.43)" />
                                                                        <path className="navigation__brand-logo--red" d="M456.57,594.2a3.15,3.15,0,0,1,2.28.89,3,3,0,0,1,.91,2.26,3,3,0,0,1-.91,2.24,3.09,3.09,0,0,1-2.28.91H438.22a2.8,2.8,0,0,1-2.28-1,3,3,0,0,1-.8-2.06,8,8,0,0,1,.23-1.52,4.29,4.29,0,0,1,.85-1.51l14.19-18.44-.11.8H438.73a3.11,3.11,0,0,1-3.19-3.2,3,3,0,0,1,.91-2.21,3.15,3.15,0,0,1,2.28-.88h17.56a2.93,2.93,0,0,1,2.22,1,3.1,3.1,0,0,1,.8,2.46,9.08,9.08,0,0,1-.2,1.14,4,4,0,0,1-.77,1.38l-14,18.15v-.35Z" transform="translate(-256.27 -560.43)" />
                                                                        <path className="navigation__brand-logo--dark"d="M498.07,560.43a16.37,16.37,0,0,1,7.38,1.57,14.72,14.72,0,0,1,5.27,4.38,19.66,19.66,0,0,1,3.16,6.44,27,27,0,0,1,1.06,7.64,26.31,26.31,0,0,1-1.88,10.11,16.49,16.49,0,0,1-5.62,7.24,15.57,15.57,0,0,1-9.37,2.69h-14.2a2.34,2.34,0,0,1-2.33-2.35V562.77a2.25,2.25,0,0,1,.68-1.66,2.28,2.28,0,0,1,1.65-.68ZM497.5,596a11.44,11.44,0,0,0,7.18-2.12,12.28,12.28,0,0,0,4-5.67,22.9,22.9,0,0,0,1.28-7.79,24.06,24.06,0,0,0-.71-5.89,15.26,15.26,0,0,0-2.23-5,10.86,10.86,0,0,0-3.87-3.44,11.93,11.93,0,0,0-5.67-1.26H485.87l.45-.51v32.23L486,596Z" transform="translate(-256.27 -560.43)" />
                                                                        <path className="navigation__brand-logo--dark"d="M545.66,570.62a2.21,2.21,0,0,1,1.65.65,2.29,2.29,0,0,1,.63,1.64v25.24a2.29,2.29,0,0,1-.66,1.66,2.28,2.28,0,0,1-3.27,0,2.35,2.35,0,0,1-.63-1.66v-5.43l1.08-.12a5.53,5.53,0,0,1-.85,2.78,11.17,11.17,0,0,1-2.34,2.75,12.79,12.79,0,0,1-3.5,2.11,11.14,11.14,0,0,1-4.31.83,12.39,12.39,0,0,1-7-2,14.21,14.21,0,0,1-4.87-5.52,18.57,18.57,0,0,1,0-15.95,13.9,13.9,0,0,1,4.87-5.44,12.44,12.44,0,0,1,6.84-2,12.86,12.86,0,0,1,4.56.8,12,12,0,0,1,3.68,2.18,10.72,10.72,0,0,1,2.45,3,7,7,0,0,1,.88,3.32l-1.48-.34v-6.24a2.29,2.29,0,0,1,.63-1.64A2.19,2.19,0,0,1,545.66,570.62Zm-11.74,26.22a8.77,8.77,0,0,0,5-1.49,9.88,9.88,0,0,0,3.42-4,13,13,0,0,0,1.23-5.75,12.76,12.76,0,0,0-1.23-5.67,10,10,0,0,0-3.42-4,9.26,9.26,0,0,0-10,0,10.22,10.22,0,0,0-3.45,4,13.8,13.8,0,0,0,0,11.48,10.26,10.26,0,0,0,3.45,4A8.7,8.7,0,0,0,533.92,596.84Z" transform="translate(-256.27 -560.43)" />
                                                                        <path className="navigation__brand-logo--dark"d="M570.45,570.45A9,9,0,0,1,580,578h-.85l.4-1a8.87,8.87,0,0,1,2.33-3.09,14.9,14.9,0,0,1,3.82-2.46,10.89,10.89,0,0,1,4.51-1,9.61,9.61,0,0,1,5.92,1.63,8.93,8.93,0,0,1,3.11,4.35,18.45,18.45,0,0,1,.94,6.09v15.63a2.33,2.33,0,0,1-.65,1.66,2.23,2.23,0,0,1-1.69.69,2.15,2.15,0,0,1-1.62-.69,2.29,2.29,0,0,1-.66-1.66V582.64a12,12,0,0,0-.62-4,5.88,5.88,0,0,0-2.11-2.89,6.58,6.58,0,0,0-4-1.09,8.66,8.66,0,0,0-7.3,4,7.3,7.3,0,0,0-1.14,4v15.51a2.39,2.39,0,0,1-.62,1.66,2.33,2.33,0,0,1-3.31,0,2.35,2.35,0,0,1-.63-1.66V582.47a11.9,11.9,0,0,0-.62-3.9,5.92,5.92,0,0,0-2.06-2.83,6.33,6.33,0,0,0-3.87-1.06,8.28,8.28,0,0,0-4.16,1.06,8.47,8.47,0,0,0-3,2.83,7,7,0,0,0-1.14,3.9v15.68a2.29,2.29,0,0,1-.66,1.66,2.26,2.26,0,0,1-3.25,0,2.29,2.29,0,0,1-.65-1.66v-24.9a2.28,2.28,0,0,1,.65-1.69,2.21,2.21,0,0,1,1.63-.66,2.18,2.18,0,0,1,1.65.66,2.34,2.34,0,0,1,.63,1.69v4.29l-1.26,1.38a7.72,7.72,0,0,1,1.17-3,12.37,12.37,0,0,1,5.73-4.75A10.06,10.06,0,0,1,570.45,570.45Z" transform="translate(-256.27 -560.43)" />
                                                                        <path className="navigation__brand-logo--dark" d="M610.64,566.61a3.26,3.26,0,0,1-2.11-.57,2.18,2.18,0,0,1-.68-1.78v-.8a2.08,2.08,0,0,1,.74-1.77,3.31,3.31,0,0,1,2.11-.58,3.09,3.09,0,0,1,2,.58,2.19,2.19,0,0,1,.68,1.77v.8a2.17,2.17,0,0,1-.71,1.78A3.28,3.28,0,0,1,610.64,566.61ZM613,598.15a2.29,2.29,0,0,1-.66,1.66,2.15,2.15,0,0,1-1.62.69,2.23,2.23,0,0,1-1.69-.69,2.33,2.33,0,0,1-.65-1.66V572.79a2.34,2.34,0,0,1,.65-1.66,2.22,2.22,0,0,1,1.69-.68,2.15,2.15,0,0,1,1.62.68,2.31,2.31,0,0,1,.66,1.66Z" transform="translate(-256.27 -560.43)" />
                                                                        <path className="navigation__brand-logo--dark"  d="M645.18,570.62a2.21,2.21,0,0,1,1.65.65,2.29,2.29,0,0,1,.63,1.64v25.24a2.29,2.29,0,0,1-.66,1.66,2.28,2.28,0,0,1-3.27,0,2.35,2.35,0,0,1-.63-1.66v-5.43l1.08-.12a5.53,5.53,0,0,1-.85,2.78,11.17,11.17,0,0,1-2.34,2.75,12.79,12.79,0,0,1-3.5,2.11,11.14,11.14,0,0,1-4.31.83,12.39,12.39,0,0,1-7-2,14.21,14.21,0,0,1-4.87-5.52,18.57,18.57,0,0,1,0-15.95,13.9,13.9,0,0,1,4.87-5.44,12.44,12.44,0,0,1,6.84-2,12.86,12.86,0,0,1,4.56.8,12,12,0,0,1,3.68,2.18,10.72,10.72,0,0,1,2.45,3,7,7,0,0,1,.88,3.32l-1.48-.34v-6.24a2.29,2.29,0,0,1,.63-1.64A2.19,2.19,0,0,1,645.18,570.62Zm-11.74,26.22a8.77,8.77,0,0,0,5-1.49,9.88,9.88,0,0,0,3.42-4,13,13,0,0,0,1.23-5.75,12.76,12.76,0,0,0-1.23-5.67,10,10,0,0,0-3.42-4,9.26,9.26,0,0,0-10,0,10.22,10.22,0,0,0-3.45,4,13.8,13.8,0,0,0,0,11.48,10.26,10.26,0,0,0,3.45,4A8.7,8.7,0,0,0,633.44,596.84Z" transform="translate(-256.27 -560.43)" />
                                                                        <path className="navigation__brand-logo--dark" d="M670.54,570.16a10.23,10.23,0,0,1,6.1,1.6,8.66,8.66,0,0,1,3.17,4.3,18.44,18.44,0,0,1,.94,6.06v16a2.29,2.29,0,0,1-.66,1.66,2.29,2.29,0,0,1-3.28,0,2.39,2.39,0,0,1-.62-1.66V582.24a11.25,11.25,0,0,0-.66-4,5.88,5.88,0,0,0-2.19-2.84,7.19,7.19,0,0,0-4.11-1.06,9.31,9.31,0,0,0-4.39,1.06,8.77,8.77,0,0,0-3.19,2.84,6.88,6.88,0,0,0-1.19,4v15.91a2.29,2.29,0,0,1-.66,1.66,2.26,2.26,0,0,1-3.25,0,2.29,2.29,0,0,1-.65-1.66v-24.9a2.28,2.28,0,0,1,.65-1.69,2.21,2.21,0,0,1,1.63-.66,2.18,2.18,0,0,1,1.65.66,2.34,2.34,0,0,1,.63,1.69v4l-1.14,1.26a8,8,0,0,1,1.31-3,12,12,0,0,1,2.56-2.72,13.33,13.33,0,0,1,3.42-1.92A11.16,11.16,0,0,1,670.54,570.16Z" transform="translate(-256.27 -560.43)" />
                                                                </svg>
                                                        </Link>

                                                        {  this.props.linkComponent  &&  <a href={`${this.props.linkComponent }`}   className="navigation__brand-section navigation__brand-section_modifier" aria-label="Section  name"> { this.props.nameComponent } </a> }
                                                </div>
                                                {  /*---  Navigation > Menu ---*/   }
                                                { headerNav && 
                                                <div className="navigation__menu">
                                                        <ul className="navigation__menu-list">
                                                                <li className="navigation__menu-list-item">
                                                                        <Link to='/projects' className="navigation__menu-list-link navigation__menu-list-link_effect" target="_self"> Projekty </Link>
                                                                </li>

                                                                <li className="navigation__menu-list-item">
                                                                        <Link to="/library" className="navigation__menu-list-link navigation__menu-list-link_effect" target="_self"> Biblioteka </Link>
                                                                </li>

                                                                <li className="navigation__menu-list-item">
                                                                        <Link to="/contact" className="navigation__menu-list-link navigation__menu-list-link_effect" target="_self"> Kontakt </Link>
                                                                </li>

                                                                <li className="navigation__menu-list-item">
                                                                        <Link to="/about" className="navigation__menu-list-link navigation__menu-list-link_effect" target="_self"> O mnie </Link>
                                                                </li>
                                                        </ul>
                                                </div> }
                                                
                                        {  /*---  Navigation > Search ---*/   }
                                        { searchBox && 
                                        <div className="navigation__search">
                                                <form className="navigation__search-form"onSubmit={ this.searchInformation } method="GET">
                                                        <button type="button" className="form__button form__button--search"> <i className="material__icon material-icons"> search </i> </button>

                                                        <input name="search_tag" type="text" className="form__input form__input_effect" value={ search_tag } onChange={ this.handleInput }  aria-label="Wyszukaj" placeholder="Wyszukaj" />

                                                        <button type="button" className="form__button form__button--close" onClick={ this.closeSearchBox }> <i className="material__icon material-icons"> close </i> </button>
                                                </form>
                                        </div> }

                                        { /*---  Navigation > Sh-box  ---*/   }
                                         { (!searchBox && headerNav)?
                                                <button type="button" className="form__button form__button--open" onClick={ this.getSearch }> <i className="material-icons material__icon"> search </i> </button> : ''
                                         }
                                        
                                        { /*---  Navigation > Post title  ---*/   }
                                        { this.props.articleTitle  && (
                                        articleRead &&  
                                        <div className="navigation__post-title">
                                                <span className="navigation__post-title--caption">  { this.props.articleTitle } </span>
                                        </div>)
                                         }
                                        
                                        { /*---  Navigation > Sharing ---*/   }
                                        { this.props.articleTitle  && (
                                        articleRead  &&
                                        <div className="navigation__sharing">
                                                <a href="https://www.facebook.com/sharer/sharer.php?u=damianbarszcz.com" className="navigation__sharing-social navigation__sharing-social--facebook" target="_blank"> <i className="social__icon social__icon--facebook fab fa-facebook-square"></i> </a>
                                                <a href="https://twitter.com/intent/tweet" className="navigation__sharing-social navigation__sharing-social--twitter" target="_blank"> <i className="social__icon social__icon--twitter fab fa-twitter"></i> </a>
                                                <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site http://www.damianbarszcz.com." className="navigation__sharing-social navigation__sharing-social--envelope" target="_blank"> <i className="social__icon social__icon--envelope fab fas fa-envelope"></i> </a>
                                        </div> )
                                        }
                                </div>

                                { this.props.articleTitle &&
                                <ReadingProgress color="rgb(47, 152, 247)" top="4rem" height="0.25rem" zIndex="10" /> }
                        </nav>
                </React.Fragment>
                )
        }
}

export default withRouter(PrimaryNav); 
