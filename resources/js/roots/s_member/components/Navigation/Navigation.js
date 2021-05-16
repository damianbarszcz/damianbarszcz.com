import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Navigation extends Component {

        constructor(props){ 
                super(props);  

                this.state ={ accountDropdown:false, panelMode: true } 

                this.onLogout = this.onLogout.bind(this);
                this.getAccountDropdown = this.getAccountDropdown.bind(this);
                this.closeAccountDropdown = this.closeAccountDropdown.bind(this);
                this.setDashboardMode = this.setDashboardMode.bind(this);
        }

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
         Logout with application
        =======================
        */
        onLogout(e){
                e.preventDefault();

                axios.post(`/logout`)
                .then(response => {
                        if (!response.error) {   
                                if(window.location.reload(false)){
                                        this.props.history.push(`/login`)             
                                }                            
                        }
                 })
                .catch(error => {  this.setState({ errors: error.response.data.errors}) })
        }

        /*
        =======================
         Set Dashboard mode
        =======================
        */
       setDashboardMode(e){
                e.preventDefault();

                this.setState(prevState => ({ panelMode: !prevState.panelMode }));
       }

        /*
        =======================
         Render component
        =======================
        */
        render() {

                const { accountDropdown, panelMode } = this.state

                return (
                        <React.Fragment>
                                {  /*---------------------------------*/  }
                                {  /*--------  Account nav  --------*/  }
                                {  /*---------------------------------*/  }
                                <nav className="account-nav account-nav_theme" role="navigation" aria-label="Account Navigation">
                                        <div className="account-nav__block">
                                                {  /*---  Account nav > Block > Brand ---*/   }
                                                <div className="account-nav__brand">
                                                        <Link to="/member/overview"  aria-label="Account Logo">
                                                                <svg  className="account-nav__brand-logo"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 314.3 29.28">
                                                                        <path className="account-nav__brand-logo--yellow" d="M762.5,363.88c2.62,0,4.58.61,5.86,1.84a7.2,7.2,0,0,1,1.93,5.46,6.08,6.08,0,0,1-.95,3.38,6,6,0,0,1-2.78,2.25,11.34,11.34,0,0,1-4.55.8l.16-1.84a13.64,13.64,0,0,1,2.91.35,10.91,10.91,0,0,1,3.18,1.23,7.19,7.19,0,0,1,2.54,2.46,7.4,7.4,0,0,1,1,4,9.63,9.63,0,0,1-.88,4.42,6.81,6.81,0,0,1-2.31,2.67,9,9,0,0,1-3.08,1.29,15.27,15.27,0,0,1-3.15.35H752.17a2.44,2.44,0,0,1-2.5-2.5v-23.7a2.39,2.39,0,0,1,.71-1.78,2.42,2.42,0,0,1,1.79-.72Zm-.74,4.84h-7.3l.53-.66v7.42l-.49-.37h7.38a3.22,3.22,0,0,0,2.13-.78,2.75,2.75,0,0,0,1-2.25,2.94,2.94,0,0,0-3.2-3.36Zm.33,11.23h-7.46l.36-.33v8.65l-.41-.41h7.8a4.29,4.29,0,0,0,3-1,3.86,3.86,0,0,0,1.1-3,4,4,0,0,0-.73-2.67,3.12,3.12,0,0,0-1.77-1A9.4,9.4,0,0,0,762.09,380Z" transform="translate(-749.67 -363.71)"/>
                                                                        <path className="account-nav__brand-logo--blue" d="M793.86,370.23a2.44,2.44,0,0,1,1.77.7,2.47,2.47,0,0,1,.69,1.8v17.35a2.47,2.47,0,0,1-.69,1.78,2.37,2.37,0,0,1-1.77.72,2.34,2.34,0,0,1-1.76-.72,2.44,2.44,0,0,1-.7-1.78v-2l.9.37a2.34,2.34,0,0,1-.57,1.29,8,8,0,0,1-1.56,1.5,9.92,9.92,0,0,1-2.31,1.25A8.06,8.06,0,0,1,785,393a9.39,9.39,0,0,1-5.13-1.46,10.25,10.25,0,0,1-3.63-4,12.49,12.49,0,0,1-1.33-5.88,12.63,12.63,0,0,1,1.33-5.92,10.39,10.39,0,0,1,3.59-4,9,9,0,0,1,5-1.46,9.69,9.69,0,0,1,5.8,1.89,7.56,7.56,0,0,1,1.68,1.66,2.62,2.62,0,0,1,.6,1.41l-1.48.54v-3a2.44,2.44,0,0,1,.7-1.78A2.34,2.34,0,0,1,793.86,370.23Zm-8.28,18.25a5.58,5.58,0,0,0,3.16-.9,6.12,6.12,0,0,0,2.11-2.46,7.94,7.94,0,0,0,.76-3.49,8.06,8.06,0,0,0-.76-3.53,6.16,6.16,0,0,0-2.11-2.45,5.87,5.87,0,0,0-6.28,0,6.16,6.16,0,0,0-2.11,2.45,8.06,8.06,0,0,0-.76,3.53,7.94,7.94,0,0,0,.76,3.49,6.12,6.12,0,0,0,2.11,2.46A5.54,5.54,0,0,0,785.58,388.48Z" transform="translate(-749.67 -363.71)"/>
                                                                        <path className="account-nav__brand-logo--green" d="M804.11,392.58a2.34,2.34,0,0,1-1.76-.72,2.44,2.44,0,0,1-.7-1.78V373.14a2.44,2.44,0,0,1,.7-1.78,2.34,2.34,0,0,1,1.76-.72,2.37,2.37,0,0,1,1.77.72,2.47,2.47,0,0,1,.69,1.78V377l-.28-2.75a6.53,6.53,0,0,1,1.16-1.74,6.84,6.84,0,0,1,1.62-1.27,7.32,7.32,0,0,1,1.93-.76,8.46,8.46,0,0,1,2-.25,3.16,3.16,0,0,1,2.07.7,2.08,2.08,0,0,1,.84,1.64,2.43,2.43,0,0,1-.7,1.95,2.3,2.3,0,0,1-1.51.59,3.46,3.46,0,0,1-1.42-.28,3.35,3.35,0,0,0-1.45-.29,3.49,3.49,0,0,0-1.5.35A4,4,0,0,0,808,376a5.67,5.67,0,0,0-1,1.83,7.57,7.57,0,0,0-.39,2.56v9.72a2.47,2.47,0,0,1-.69,1.78A2.37,2.37,0,0,1,804.11,392.58Z" transform="translate(-749.67 -363.71)"/>
                                                                        <path className="account-nav__brand-logo--yellow" d="M818.17,389.18a2.32,2.32,0,0,1-.36-1.48,2,2,0,0,1,1.06-1.56,2.26,2.26,0,0,1,1.4-.35,2.33,2.33,0,0,1,1.43.76,9.85,9.85,0,0,0,2.5,1.85,7.43,7.43,0,0,0,3.28.65,10.5,10.5,0,0,0,1.35-.18,2.65,2.65,0,0,0,1.3-.66,2,2,0,0,0,.55-1.58,1.79,1.79,0,0,0-.62-1.43,5,5,0,0,0-1.61-.9c-.67-.25-1.42-.48-2.24-.7s-1.71-.52-2.6-.82a10.78,10.78,0,0,1-2.44-1.17,5.62,5.62,0,0,1-1.81-1.91,5.88,5.88,0,0,1-.69-3,5.39,5.39,0,0,1,1.14-3.48,7.52,7.52,0,0,1,3-2.22,9.61,9.61,0,0,1,3.83-.78,12.74,12.74,0,0,1,2.67.31,10.79,10.79,0,0,1,2.66,1,6.61,6.61,0,0,1,2.13,1.79,3,3,0,0,1,.54,1.47,1.77,1.77,0,0,1-.78,1.56,2,2,0,0,1-1.44.43,2.12,2.12,0,0,1-1.35-.55,5,5,0,0,0-1.87-1.44,6.47,6.47,0,0,0-2.68-.53,7.17,7.17,0,0,0-1.33.14,2.77,2.77,0,0,0-1.26.62,2.23,2.23,0,0,0,.09,3,4.57,4.57,0,0,0,1.66.9c.69.24,1.44.46,2.23.68s1.66.48,2.5.78a9.91,9.91,0,0,1,2.34,1.19,5.65,5.65,0,0,1,1.72,1.91,6,6,0,0,1,.66,3,5.42,5.42,0,0,1-1.23,3.57,7.88,7.88,0,0,1-3.08,2.23A9.91,9.91,0,0,1,827,393a14.72,14.72,0,0,1-4.84-.84A8.41,8.41,0,0,1,818.17,389.18Z" transform="translate(-749.67 -363.71)"/>
                                                                        <path className="account-nav__brand-logo--blue" d="M853.19,388.07a2.29,2.29,0,0,1,1.64.63,2.32,2.32,0,0,1,0,3.22,2.23,2.23,0,0,1-1.64.66H840a2,2,0,0,1-1.64-.74,2.15,2.15,0,0,1-.58-1.48,5.32,5.32,0,0,1,.17-1.08,3,3,0,0,1,.61-1.09L848.76,375l-.08.57h-8.32a2.24,2.24,0,0,1-2.3-2.29,2.1,2.1,0,0,1,.66-1.58,2.26,2.26,0,0,1,1.64-.64H853a2.12,2.12,0,0,1,1.6.7,2.22,2.22,0,0,1,.58,1.76,5.64,5.64,0,0,1-.15.82,2.87,2.87,0,0,1-.55,1l-10.05,13v-.24Z" transform="translate(-749.67 -363.71)"/>
                                                                        <path className="account-nav__brand-logo--green" d="M868.19,370.23a15,15,0,0,1,4.08.5A6.45,6.45,0,0,1,875,372.1a2.77,2.77,0,0,1,1,2.11,2.66,2.66,0,0,1-.49,1.54,1.62,1.62,0,0,1-1.43.72,2.84,2.84,0,0,1-1.09-.19,2.78,2.78,0,0,1-.76-.47,4.25,4.25,0,0,0-.78-.53,3.47,3.47,0,0,0-1.25-.39,7.91,7.91,0,0,0-1.25-.15,6.49,6.49,0,0,0-3.54.91,6,6,0,0,0-2.24,2.43,7.76,7.76,0,0,0-.78,3.55,7.56,7.56,0,0,0,.8,3.51,6.22,6.22,0,0,0,2.22,2.44,5.9,5.9,0,0,0,3.25.9,10,10,0,0,0,1.77-.13,4.49,4.49,0,0,0,1.23-.36,7.29,7.29,0,0,0,1-.7,2.08,2.08,0,0,1,1.36-.37,2,2,0,0,1,1.64.68,2.48,2.48,0,0,1,.57,1.66,2.33,2.33,0,0,1-1.15,1.86,9.36,9.36,0,0,1-3,1.36,15.31,15.31,0,0,1-4,.51,10.33,10.33,0,0,1-5.62-1.5,10.06,10.06,0,0,1-3.67-4.08,12.75,12.75,0,0,1-1.29-5.78,12.29,12.29,0,0,1,1.38-5.92,10.11,10.11,0,0,1,3.81-4A10.69,10.69,0,0,1,868.19,370.23Z" transform="translate(-749.67 -363.71)"/>
                                                                        <path className="account-nav__brand-logo--red" d="M893.74,388.07a2.29,2.29,0,0,1,1.64.63,2.32,2.32,0,0,1,0,3.22,2.23,2.23,0,0,1-1.64.66h-13.2a2,2,0,0,1-1.64-.74,2.11,2.11,0,0,1-.58-1.48,5.32,5.32,0,0,1,.17-1.08,3,3,0,0,1,.61-1.09L889.31,375l-.08.57H880.9a2.22,2.22,0,0,1-2.29-2.29,2.13,2.13,0,0,1,.65-1.58,2.3,2.3,0,0,1,1.64-.64h12.63a2.14,2.14,0,0,1,1.6.7,2.22,2.22,0,0,1,.58,1.76,5.64,5.64,0,0,1-.15.82,2.87,2.87,0,0,1-.55,1l-10,13v-.24Z" transform="translate(-749.67 -363.71)"/>
                                                                        <path className="account-nav__brand-logo--dark" d="M921.9,369.21l-9.22,22.14a2.12,2.12,0,0,1-.74,1,1.79,1.79,0,0,1-1.11.37,1.71,1.71,0,0,1-1.35-.51,2.06,2.06,0,0,1-.49-1.29,2.2,2.2,0,0,1,.12-.66l10.42-25.17a2.27,2.27,0,0,1,.84-1.07,2.14,2.14,0,0,1,2.35,0,2.08,2.08,0,0,1,.78,1l10.29,24.8a2.23,2.23,0,0,1,.17.82,2,2,0,0,1-1.93,2,1.84,1.84,0,0,1-1.13-.39,2.27,2.27,0,0,1-.75-1l-9.31-22Zm-7.58,16.32,1.84-3.94h11.61l.69,3.94Z" transform="translate(-749.67 -363.71)"/>
                                                                        <path className="account-nav__brand-logo--dark" d="M946.91,370.52a14.94,14.94,0,0,1,3.92.47,7,7,0,0,1,2.68,1.31,2.5,2.5,0,0,1,1,1.95,2.11,2.11,0,0,1-.43,1.29,1.41,1.41,0,0,1-1.21.6,2.13,2.13,0,0,1-1-.21,3.45,3.45,0,0,1-.71-.49,5.28,5.28,0,0,0-.82-.57,4.54,4.54,0,0,0-1.34-.41,8.6,8.6,0,0,0-1.57-.17,7,7,0,0,0-3.76,1,6.78,6.78,0,0,0-2.46,2.66,8.71,8.71,0,0,0,0,7.63,6.91,6.91,0,0,0,2.42,2.66,6.49,6.49,0,0,0,3.59,1,9.39,9.39,0,0,0,2-.19,5.26,5.26,0,0,0,1.33-.47,5.38,5.38,0,0,0,1.07-.76,1.66,1.66,0,0,1,1.19-.39,1.69,1.69,0,0,1,1.37.56,2,2,0,0,1,.47,1.37,2.3,2.3,0,0,1-1.08,1.74,8.94,8.94,0,0,1-2.89,1.38,14.25,14.25,0,0,1-4,.53,10.22,10.22,0,0,1-5.56-1.48,10,10,0,0,1-3.65-4,12.47,12.47,0,0,1-1.29-5.74,11.93,11.93,0,0,1,1.36-5.76,10.19,10.19,0,0,1,3.77-4A10.42,10.42,0,0,1,946.91,370.52Z" transform="translate(-749.67 -363.71)"/>
                                                                        <path className="account-nav__brand-logo--dark" d="M968,370.52a14.86,14.86,0,0,1,3.91.47,7,7,0,0,1,2.69,1.31,2.49,2.49,0,0,1,1,1.95,2.11,2.11,0,0,1-.43,1.29,1.39,1.39,0,0,1-1.21.6,2.09,2.09,0,0,1-1-.21,3.52,3.52,0,0,1-.72-.49,5.28,5.28,0,0,0-.82-.57,4.46,4.46,0,0,0-1.33-.41,8.7,8.7,0,0,0-1.58-.17,6.9,6.9,0,0,0-3.75,1,6.78,6.78,0,0,0-2.46,2.66,8.71,8.71,0,0,0,0,7.63,6.84,6.84,0,0,0,2.42,2.66,6.47,6.47,0,0,0,3.59,1,9.29,9.29,0,0,0,2-.19,5.34,5.34,0,0,0,1.34-.47,5.59,5.59,0,0,0,1.06-.76,1.67,1.67,0,0,1,1.19-.39,1.73,1.73,0,0,1,1.38.56,2,2,0,0,1,.47,1.37,2.28,2.28,0,0,1-1.09,1.74,8.84,8.84,0,0,1-2.89,1.38,14.2,14.2,0,0,1-4,.53,10.18,10.18,0,0,1-5.55-1.48,9.92,9.92,0,0,1-3.65-4,12.47,12.47,0,0,1-1.29-5.74,12,12,0,0,1,1.35-5.76,10.26,10.26,0,0,1,3.77-4A10.46,10.46,0,0,1,968,370.52Z" transform="translate(-749.67 -363.71)"/>
                                                                        <path className="account-nav__brand-logo--dark" d="M1000.25,381.79a11.42,11.42,0,0,1-1.45,5.81,10.61,10.61,0,0,1-3.92,3.95,11.32,11.32,0,0,1-11,0,10.57,10.57,0,0,1-3.93-3.95,12.35,12.35,0,0,1,0-11.65,10.75,10.75,0,0,1,9.45-5.43,10.65,10.65,0,0,1,5.53,1.46,10.82,10.82,0,0,1,3.92,4A11.48,11.48,0,0,1,1000.25,381.79Zm-4.1,0a8.09,8.09,0,0,0-.9-3.91,6.85,6.85,0,0,0-2.44-2.62,6.6,6.6,0,0,0-6.89,0,7.13,7.13,0,0,0-2.46,2.62,8.66,8.66,0,0,0,0,7.77,7,7,0,0,0,2.46,2.62,6.72,6.72,0,0,0,6.89,0,6.71,6.71,0,0,0,2.44-2.62A8.06,8.06,0,0,0,996.15,381.79Z" transform="translate(-749.67 -363.71)"/>
                                                                        <path className="account-nav__brand-logo--dark" d="M1020.75,371a2,2,0,0,1,2,2.09v10.79a8.29,8.29,0,0,1-9.1,9.06,8.91,8.91,0,0,1-6.66-2.4,9.1,9.1,0,0,1-2.36-6.66V373.1a2,2,0,0,1,.58-1.49,1.94,1.94,0,0,1,1.47-.6,2,2,0,0,1,1.46.6,2,2,0,0,1,.59,1.49v10.79a5.58,5.58,0,0,0,1.25,4,4.83,4.83,0,0,0,3.67,1.32,4.93,4.93,0,0,0,3.73-1.32,5.49,5.49,0,0,0,1.27-4V373.1a2.06,2.06,0,0,1,.58-1.49A1.94,1.94,0,0,1,1020.75,371Z" transform="translate(-749.67 -363.71)"/>
                                                                        <path className="account-nav__brand-logo--dark" d="M1039.61,370.52a7.31,7.31,0,0,1,4.51,1.21,6.36,6.36,0,0,1,2.24,3.24,15.21,15.21,0,0,1,.63,4.53v11a2,2,0,0,1-.59,1.49,2,2,0,0,1-1.46.6,1.94,1.94,0,0,1-1.47-.6,2,2,0,0,1-.58-1.49V379.54a7.74,7.74,0,0,0-.41-2.64,3.8,3.8,0,0,0-1.41-1.89,4.77,4.77,0,0,0-2.81-.72,5.89,5.89,0,0,0-3,.72,5.4,5.4,0,0,0-2,1.89,4.91,4.91,0,0,0-.72,2.64v10.95A2,2,0,0,1,1032,392a2,2,0,0,1-1.46.6,1.94,1.94,0,0,1-1.47-.6,2,2,0,0,1-.58-1.49V373.1a2,2,0,0,1,.58-1.49,1.94,1.94,0,0,1,1.47-.6,2,2,0,0,1,1.46.6,2,2,0,0,1,.59,1.49v2.3l-.73.41a6,6,0,0,1,1-1.83,10.51,10.51,0,0,1,1.74-1.72,8.7,8.7,0,0,1,2.3-1.27A7.78,7.78,0,0,1,1039.61,370.52Z" transform="translate(-749.67 -363.71)"/>
                                                                        <path className="account-nav__brand-logo--dark" d="M1052.41,371.26H1062a1.85,1.85,0,0,1,1.37.55,1.88,1.88,0,0,1,.56,1.38,1.77,1.77,0,0,1-.56,1.31,1.91,1.91,0,0,1-1.37.53h-9.63a1.87,1.87,0,0,1-1.38-.55,1.83,1.83,0,0,1-.55-1.34,1.8,1.8,0,0,1,.55-1.35A1.93,1.93,0,0,1,1052.41,371.26Zm4.3-5.33a2,2,0,0,1,1.48.59,2.09,2.09,0,0,1,.57,1.5v19a2.39,2.39,0,0,0,.25,1.19,1.3,1.3,0,0,0,.67.62,2.44,2.44,0,0,0,.88.16,1.84,1.84,0,0,0,.8-.16,2,2,0,0,1,.84-.17,1.23,1.23,0,0,1,.91.45,1.84,1.84,0,0,1-.66,2.83,4.54,4.54,0,0,1-2.3.62,13.3,13.3,0,0,1-1.64-.12,5.18,5.18,0,0,1-1.82-.62,3.76,3.76,0,0,1-1.46-1.58,6.65,6.65,0,0,1-.57-3.05V368a2.07,2.07,0,0,1,.59-1.5A2,2,0,0,1,1056.71,365.93Z" transform="translate(-749.67 -363.71)"/>
                                                                </svg>
                                                        </Link>
                                                </div>
                                                
                                                {   /*--- Account nav > Block > Search ---*/   }
                                                <div className="account-nav__search">
                                                        <form className="account-nav__search-form" action="#" method="GET" role="search">
                                                                <input type="text" name="query" className="form__input form__input_effect" aria-label="Search" placeholder="Wyszukaj" title="Wyszukaj" />

                                                                <button type="button" className="form__button"> <i className="material-icons material-icons--search"> search </i> </button>
                                                        </form>
                                                </div>

                                                {   /*--- Account nav > Fun ---*/   }
                                                <div className="account-nav__fun"  ref={node => { this.node = node; }}>
                                                {   /*--- Account nav > Fun > User & Dropdown ---*/   }
                                                        <button className="account-nav__fun-user account-nav__fun-user_effect" type="button" onClick={ this.getAccountDropdown }>
                                                                <div className="account-nav__fun-user-artwork account-nav__fun-user-artwork_modifier"  style={{ backgroundImage: `url(` + this.props.user.avatar + `)` }} ></div>

                                                                <div className="account-nav__fun-user-content account-nav__fun-user-content_modifier">
                                                                        <span className="account-nav__fun-user-content--name account-nav__fun-user-content--name_effect"><strong>{ this.props.user.name} { this.props.user.surename }</strong></span>

                                                                        <span className="account-nav__fun-user-content--role account-nav__fun-user-content--role_effect">{ this.props.user.role } </span>
                                                                </div>

                                                                <i className="material-icons material-icons--arrow">keyboard_arrow_down</i>
                                                        </button>

                                                        { accountDropdown &&
                                                        <div className="account-dropdown account-dropdown_modifier">
                                                                <div className="account-dropdown__inner">
                                                                        <div className="account-dropdown__profile account-dropdown__profile_modifier">
                                                                                <div className="account-dropdown__profile--artwork account-dropdown__profile--artwork_modifier" style={{ backgroundImage: `url(` + this.props.user.avatar + `)` }} ></div>

                                                                                <div className="account-dropdown__profile-info">
                                                                                        <p className="account-dropdown__profile-info--name"><strong>{ this.props.user.name } { this.props.user.surename } </strong> </p>

                                                                                        <p className="account-dropdown__profile-info--email">{ this.props.user.email } </p>

                                                                                        <a href="/member/overview" className="btn account-dropdown__profile-info--btn" type="button" target="_self">Manage Account</a>
                                                                                </div>
                                                                        </div>

                                                                        <div className="account-dropdown__rules account-dropdown__rules_modifier">
                                                                                <a href="#" className="account-dropdown__rules-link" target="_blank">Regulations</a>
                                                                                <a href="#" className="account-dropdown__rules-link" target="_blank">Privacy policy</a>
                                                                        </div>

                                                                        <div className="account-dropdown__actions">
                                                                                <a href="/logout" className="btn account-dropdown__actions--btn"  type="button" target="_self" onClick={  (e) => this.onLogout(e) }>Logout</a>

                                                                                <form id="logout-form" style={{ display: "none"}}> </form>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                         }
                                                        
                                                        {   /*--- Account nav > Fun > Mode ---*/   }
                                                        <div className="account-nav__fun-mode">
                                                                <div className={`account-nav__fun-mode-switch account-nav__fun-mode-switch_modifier ${ panelMode ? 'account-nav__fun-mode-switch--light' : 'account-nav__fun-mode-switch--dark' }`} onClick={  (e) => this.setDashboardMode(e) }>
                                                                        <input className="account-nav__fun-mode-switch--input" type="checkbox"  value=""/> 
                                                                        <span className={`account-nav__fun-mode-switch--slider account-nav__fun-mode-switch--slider_modifier ${ panelMode ? 'light--mode' : 'dark--mode' }`}></span>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </nav>
                </React.Fragment>
                )
        }
}