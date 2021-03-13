import  React from 'react';
import { Link } from 'react-router-dom';

const PaginationNav = () => {

   /*
    =======================
     Render component
    =======================
    */
    return (
            <>
                    {  /*----------------------------------------*/   }
                    {  /*--------    Pagination  nav   -------*/   }
                    {  /*----------------------------------------*/   }    
                    <nav role="navigation" className="pagination-nav pagination-nav_theme">
                            <div className="pagination-nav__block g-container">
                                {  /*---  Pagination  nav  > Block > List ---*/   }
                                    <ul className="pagination-nav__list">
                                            <li className="pagination-nav__list-item">
                                                    <Link to="#" className="pagination-nav__list-link pagination-nav__list-link_effect" target="_self"> 1 </Link>
                                            </li>
                                    </ul>
                            </div>
                    </nav>
            </>
    );
}

export default PaginationNav;