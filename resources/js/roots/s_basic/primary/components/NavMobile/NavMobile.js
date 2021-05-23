import  React, {useState  } from 'react';
import { Link } from 'react-router-dom';
import { useDetectClickOutside } from 'react-detect-click-outside';
import NavBrand from '../NavBrand/NavBrand';

function NavMobile() {
        const [toggleDropdown, setToggleDropdown] = useState(false);
        const [navAnimation, setNavAnimation] = useState(false);

        const handleToggle = (e) => {
                e.preventDefault();
                setToggleDropdown((prevState) => !prevState);
                setNavAnimation((prevState) => !prevState);
        };

      const closeToggle = () => {
          setNavAnimation(false); 

          setTimeout(function(){ 
              setToggleDropdown(false); }.bind(this), 400);
      };

      const Dropdown = ({ closeToggle }) => {
                const ref = useDetectClickOutside({ onTriggered: closeToggle });

                return (
                  <ul className={`navigation__m-menu-list ${navAnimation ? 'menuActive' : 'noActive'}` } ref={ref}>
                        <li className="navigation__m-menu-list-item"> 
                                <div className="navigation__m-menu-list-item-brand">
                                    <NavBrand  />
                                </div>
                        </li>

                          <li className="navigation__m-menu-list-item">
                                  <Link to='/projects' className="navigation__m-menu-list-link navigation__m-menu-list-link_effect" target="_self"> Projekty </Link>
                          </li>

                          <li className="navigation__m-menu-list-item">
                                  <Link to="/library" className="navigation__m-menu-list-link navigation__m-menu-list-link_effect" target="_self"> Biblioteka </Link>
                          </li>

                          <li className="navigation__m-menu-list-item">
                                  <Link to="/contact" className="navigation__m-menu-list-link navigation__m-menu-list-link_effect" target="_self"> Kontakt </Link>
                          </li>

                          <li className="navigation__m-menu-list-item">
                                  <Link to="/about" className="navigation__m-menu-list-link navigation__m-menu-list-link_effect" target="_self"> O mnie </Link>
                          </li>
                  </ul>  );
      }
              

         return (
                 <>
                { toggleDropdown && <div className="search-lightbox"></div> } 
                <div className="navigation__m-menu">
                        <button typ="button" className="navigation__m-menu-toggle" onClick={ handleToggle }></button>

                       { toggleDropdown && <Dropdown  closeToggle={closeToggle} /> }
                </div>
                </>
        );
}

export default NavMobile;    