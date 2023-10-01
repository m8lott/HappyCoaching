import { Link } from 'react-router-dom';
import facebook from './img/facebook.svg';
import linkedin from './img/linkin.svg';
import nl from './img/NL.svg';
import madeby from './img/Madeby.svg';
import logo from './img/logo.svg';
import './style.scss';
import scrollTop from '../../helpers/scrollTop';

const Footer = () => {

  return (
    <footer>
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__top">
          <div className="footer__left">
            <div className="footer__left-logo">
              <img src={logo} alt="Logo" />
            </div>
            <div className="footer__left-content">
              Design amazing digital experiences that create more happy in the world.
            </div>
          </div>
          <div className="footer__right">
          <div className="footer__right-menu">
            <div className="footer__right-menu-title">
            Pages
            </div>
            <ul>
              <li><Link className='footer__right-menu-link' to='/' onClick={scrollTop}>Home</Link></li>
              <li><Link className='footer__right-menu-link' to='/services' onClick={scrollTop}>Services</Link></li>
              <li><Link className='footer__right-menu-link' to='/aboutme' onClick={scrollTop}>About us</Link></li>
              <li><Link className='footer__right-menu-link' to='/sales' onClick={scrollTop}>Extra Sales/Landingpage</Link></li>
              <li><Link className='footer__right-menu-link' to='/guide' onClick={scrollTop}>Free guide</Link></li>
            </ul>
          </div>
          <div className="footer__right-menu">
            <div className="footer__right-menu-title">
            Contact
            </div>
            <ul>
             <li><a className='footer__right-menu-link' href="tel:+123456789">+123 456 789</a></li>
             <li><a className='footer__right-menu-link' href="mailto:hello@happydigital.nl">hello@happydigital.nl</a></li>
             <li><a className='footer__right-menu-link' href="#">Instagram</a></li>
             <li><a className='footer__right-menu-link' href="#">LinkedIn</a></li>
            </ul>
          </div>
          </div>
          </div>
          <div className="footer__bottom">
            <div className="footer__bottom-content">
              <img src={madeby} alt="Made by" />
            </div>
            <div className="footer__bottom-socials">
          <a href="#"><img src={linkedin} alt="linkedin" /></a>
          <a href="#"><img src={facebook} alt="facebook" /></a>
          <a href="#"><img src={nl} alt="nl" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )

}

export default Footer;