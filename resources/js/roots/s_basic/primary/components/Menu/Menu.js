
import  React, { useState  } from 'react';
import { useDetectClickOutside } from 'react-detect-click-outside';
import disableScroll from 'disable-scroll';
import NavBrand from '../NavBrand/NavBrand';

function Menu(props) {
        const [toggleDropdown, setToggleDropdown] = useState(false);
        const [menuAnimate, setMenuAnimate] = useState(false);

        const handleToggle = (e) => {
                e.preventDefault();
                setToggleDropdown((prevState) => !prevState);
                setMenuAnimate((prevState) => !prevState);
                disableScroll.on();  
        };

        const closeToggle = () => {
                setMenuAnimate(false); 

                setTimeout(function(){ 
                         setToggleDropdown(false); 
                }.bind(this), 400);
                
                disableScroll.off();  
        };

        const SideMenu = ({ closeToggle }) => {
                const ref = useDetectClickOutside({ onTriggered: closeToggle });

                return(
                <ul className={`${props.typeSection}__menu-list ${props.typeSection}__menu-list_modifier ${props.typeSection}__menu-list--mobile ${menuAnimate ? `${props.typeSection}__menu-list--open` : `${props.typeSection}__menu-list--close`}` } ref={ref}>
                        <li className={`${props.typeSection}__menu-list-brand`}>
                                <NavBrand typeSection={props.typeSection} />
                        </li>
                        <li className={`${props.typeSection}__menu-list-item`}>
                                <a href='/projects' className={`${props.typeSection}__menu-list-link ${props.typeSection}__menu-list-link_effect`} target="_self"> Projekty </a>
                        </li> 

                        <li className={`${props.typeSection}__menu-list-item`}>
                                <a href="/library" className={`${props.typeSection}__menu-list-link ${props.typeSection}__menu-list-link_effect`} target="_self"> Biblioteka </a>
                        </li> 

                        <li className={`${props.typeSection}__menu-list-item`}>
                                <a href="/contact" className={`${props.typeSection}__menu-list-link ${props.typeSection}__menu-list-link_effect`} target="_self"> Kontakt </a>
                        </li>

                        <li className={`${props.typeSection}__menu-list-item`}>
                                <a href="/about" className={`${props.typeSection}__menu-list-link ${props.typeSection}__menu-list-link_effect`} target="_self"> O mnie </a>
                        </li>
                </ul>
                )
        }

       /*
        =======================
         Render components
        =======================
        */
        return (
                <>
                { toggleDropdown && <div className="nav-lightbox"></div> }          
                <div className={`${props.typeSection}__menu`}>
                        <button type="button" className={`${props.typeSection}__menu-toggle`} onClick={ handleToggle }><i className="material-icons material__icon"> menu </i> </button>

                        { toggleDropdown && <SideMenu  closeToggle={closeToggle} /> }

                        <ul className={`${props.typeSection}__menu-list ${props.typeSection}__menu-list--desktop`}>
                                <li className={`${props.typeSection}__menu-list-item`}>
                                        <a href='/projects' className={`${props.typeSection}__menu-list-link ${props.typeSection}__menu-list-link_effect ${props.typeSection}__menu-list-link--desktop`} target="_self"> Projekty </a>
                                </li> 

                                <li className={`${props.typeSection}__menu-list-item`}>
                                        <a href="/library" className={`${props.typeSection}__menu-list-link ${props.typeSection}__menu-list-link_effect ${props.typeSection}__menu-list-link--desktop`} target="_self"> Biblioteka </a>
                                </li> 

                                <li className={`${props.typeSection}__menu-list-item`}>
                                        <a href="/contact" className={`${props.typeSection}__menu-list-link ${props.typeSection}__menu-list-link_effect ${props.typeSection}__menu-list-link--desktop`} target="_self"> Kontakt </a>
                                </li>

                                <li className={`${props.typeSection}__menu-list-item`}>
                                        <a href="/about" className={`${props.typeSection}__menu-list-link ${props.typeSection}__menu-list-link_effect ${props.typeSection}__menu-list-link--desktop`} target="_self"> O mnie </a>
                                </li>
                        </ul>
                </div> 
                </>
        )
}

export default Menu;    