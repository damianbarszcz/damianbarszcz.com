
import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => {
         return (

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
            </div> 
        )
}

export default NavMenu;    