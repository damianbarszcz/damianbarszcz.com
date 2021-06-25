
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { footerObjOne,footerObjTwo,footerObjThree, footerObjFour} from './Data';

const Footer = (props) => {
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
                                                        <h6 className="primary-footer__box--title">{ footerObjOne.title }</h6>

                                                        <p className="primary-footer__box--desc"> {footerObjOne.descryption }</p>
                                                </div>

                                                {  /*---  Primary footer  > Box  ---*/   }
                                                <div className="primary-footer__box">
                                                        <h6 className="primary-footer__box--title">{ footerObjTwo.title } </h6>

                                                        <div className="primary-footer__box-navigation">
                                                                <ul className="box-navigation__list">
                                                                        <li className="box-navigation__list-item">
                                                                                <Link className="box-navigation__list-link" to="/projects" target="_self"> { footerObjTwo.projectCaption }  </Link>
                                                                        </li>

                                                                        <li className="box-navigation__list-item">
                                                                                <Link className="box-navigation__list-link" to="/library" target="_self"> { footerObjTwo.libraryCaption }  </Link>
                                                                        </li>

                                                                        <li className="box-navigation__list-item">
                                                                                <Link className="box-navigation__list-link" to="/contact" target="_self"> { footerObjTwo.contactCaption } </Link>
                                                                        </li>

                                                                        <li className="box-navigation__list-item">
                                                                                <Link className="box-navigation__list-link" to="/about" target="_self">  { footerObjTwo.aboutCaption }   </Link>
                                                                        </li>
                                                                </ul>
                                                        </div>
                                                </div>

                                                {  /*---  Primary footer  > Box  ---*/   }
                                                <div className="primary-footer__box">
                                                        <h6 className="primary-footer__box--title"> { footerObjThree.title } </h6>

                                                        <div className="primary-footer__box-navigation">
                                                                <ul className="box-navigation__list">
                                                                        <li className="box-navigation__list-item">
                                                                                <a className="box-navigation__list-link" href="https://twitter.com/DamianBarszcz" target="_blank"> { footerObjThree.twitterCaption }   </a>
                                                                        </li>

                                                                        <li className="box-navigation__list-item">
                                                                                <a className="box-navigation__list-link" href="https://www.instagram.com/barszcz.damian" target="_blank"> { footerObjThree.instagramCaption }  </a>
                                                                        </li>

                                                                        <li className="box-navigation__list-item">
                                                                                <a className="box-navigation__list-link" href="https://github.com/damianbarszcz" target="_blank"> { footerObjThree.githubCaption }  </a>
                                                                        </li>
                                                                </ul>
                                                        </div>
                                                </div>

                                                {  /*---  Primary footer  > Box  ---*/   }
                                                <div className="primary-footer__box">
                                                        <div className="primary-footer__box-copyright">
                                                                <span className="box-copyright__caption box-copyright__caption_effect">{ footerObjFour.copyrightCaption } </span>
                                                        </div>

                                                        <div className="primary-footer__box-rules">
                                                                <ul className="primary-footer__box-rules__list">
                                                                        <li className="primary-footer__box-rules__list-item">
                                                                                <Link className="box-rules__list-link" to="/" target="_self"> { footerObjFour.startCaption }  </Link>
                                                                        </li>

                                                                        <li className="primary-footer__box-rules__list-item">
                                                                                <Link className="box-rules__list-link" to="/privacy" target="_blank"> { footerObjFour.privacyCaption }   </Link>
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

export default Footer;