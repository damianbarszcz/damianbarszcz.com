
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
        render() {
                return (
                
                <>
                {  /*--------------------------------------*/    }
                {  /*--------   Primary footer   -------*/   }
                {  /*--------------------------------------*/    }    
                <footer className="primary-footer primary-footer_theme">
                        <div className="primary-footer__block g-container">
                                <div className="primary-footer__inner">
                                                {  /*---  Primary footer  > Box  ---*/   }
                                                <div className="primary-footer__box">
                                                        <h6 className="primary-footer__box--title">O stronie</h6>

                                                        <p className="primary-footer__box--desc">To mój blog osobisty, na którym dzielę się stworzonymi projektami, książkami które czytam i oczywiście tego czego się uczę. Mam nadzieję, że zapoznasz się z moimi materiałami i dołączysz do dyskusji.</p>
                                                </div>

                                                {  /*---  Primary footer  > Box  ---*/   }
                                                <div className="primary-footer__box">
                                                        <h6 className="primary-footer__box--title">Odkrywaj</h6>

                                                        <div className="primary-footer__box-navigation">
                                                                <ul className="box-navigation__list">
                                                                        <li className="box-navigation__list-item">
                                                                                <Link className="box-navigation__list-link" to="/projects" target="_self"> Projekty </Link>
                                                                        </li>

                                                                        <li className="box-navigation__list-item">
                                                                                <Link className="box-navigation__list-link" to="/library" target="_self"> Biblioteka </Link>
                                                                        </li>

                                                                        <li className="box-navigation__list-item">
                                                                                <Link className="box-navigation__list-link" to="/contact" target="_self"> Kontakt </Link>
                                                                        </li>

                                                                        <li className="box-navigation__list-item">
                                                                                <Link className="box-navigation__list-link" to="/about" target="_self"> O mnie </Link>
                                                                        </li>
                                                                </ul>
                                                        </div>
                                                </div>

                                                {  /*---  Primary footer  > Box  ---*/   }
                                                <div className="primary-footer__box">
                                                        <h6 className="primary-footer__box--title"> Obserwuj </h6>

                                                        <div className="primary-footer__box-navigation">
                                                                <ul className="box-navigation__list">
                                                                        <li className="box-navigation__list-item">
                                                                                <a className="box-navigation__list-link" href="https://twitter.com/DamianBarszcz" target="_blank"> Twitter  </a>
                                                                        </li>

                                                                        <li className="box-navigation__list-item">
                                                                                <a className="box-navigation__list-link" href="https://www.instagram.com/barszcz.damian" target="_blank"> Instagram </a>
                                                                        </li>

                                                                        <li className="box-navigation__list-item">
                                                                                <a className="box-navigation__list-link" href="https://github.com/damianbarszcz" target="_blank"> Github </a>
                                                                        </li>
                                                                </ul>
                                                        </div>
                                                </div>

                                                {  /*---  Primary footer  > Box  ---*/   }
                                                <div className="primary-footer__box">
                                                <div className="primary-footer__box-copyright">
                                                                <span className="box-copyright__caption box-copyright__caption_effect">2021 © Damian Barszcz </span>
                                                        </div>

                                                        <div className="primary-footer__box-rules">
                                                                <ul className="primary-footer__box-rules__list">
                                                                        <li className="primary-footer__box-rules__list-item">
                                                                                <Link className="box-rules__list-link" to="/" target="_self"> Start </Link>
                                                                        </li>

                                                                        <li className="primary-footer__box-rules__list-item">
                                                                                <Link className="box-rules__list-link" to="#" target="_blank"> Prywatność </Link>
                                                                        </li>

                                                                        <li className="primary-footer__box-rules__list-item">
                                                                                <Link className="box-rules__list-link" to="#" target="_blank"> Regulamin </Link>
                                                                        </li>
                                                                </ul>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </footer>
                        </>
                );
        }
}

export default Footer;