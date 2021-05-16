import  React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function NavMobile() {
        const [toggle, setToggle] = React.useState(false);

        const getNavigation =() => {
                setToggle(!toggle);
        }

         return (

                <div className="navigation__m-menu">
                        <button typ="button" className="navigation__m-menu-toggle" onClick={ getNavigation }></button>

                        { toggle && 
                        <ul className="navigation__m-menu-list">
                                <li className="navigation__m-menu-item">
                                        <Link to='/projects' className="navigation__m-menu-list-link navigation__m-menu-list-link_effect" target="_self"> Projekts </Link>
                                </li>

                                <li className="navigation__menu-list-item">
                                        <Link to="/library" className="navigation__m-menu-list-link navigation__m-menu-list-link_effect" target="_self"> Biblioteka </Link>
                                </li>

                                <li className="navigation__menu-list-item">
                                        <Link to="/contact" className="navigation__m-menu-list-link navigation__m-menu-list-link_effect" target="_self"> Kontakt </Link>
                                 </li>

                                 <li className="navigation__menu-list-item">
                                        <Link to="/about" className="navigation__m-menu-list-link navigation__m-menu-list-link_effect" target="_self"> O mnie </Link>
                                </li>
                        </ul> }
                </div> 
        )
}

export default NavMobile;    