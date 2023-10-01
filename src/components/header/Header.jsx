import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../header/style.scss';
import logo from './img/logo.svg';
import cross from './img/cross.svg';

const Header = () => {
const [adapt, setAdapt] = useState(false);
const [active, setActive] = useState(false);

const handleActive = () => {
  setActive(!active);
  setAdapt(!adapt);
}

const handleAdapt = () => {
  setAdapt(!adapt);
  setActive(false);
}



  return (
    <>
    {!adapt ? <header>
  <div className="container">
<div className="header__logo">
  <Link to='/'>
  <img className="header__logo-img" src={logo} alt="Logo" />
  </Link>
  
</div>
<div className='header__nav'>
<ul className='header__nav-list'>
  <li className='header__nav-item'><NavLink className= {({isActive}) => !isActive ? "header__nav-link" :
   "header__nav-link active-link"} to='/'>Home</NavLink></li>
  <li className='header__nav-item'><NavLink className= {({isActive}) => !isActive ? "header__nav-link" :
   "header__nav-link active-link"} to="/services">Services</NavLink></li>
  <li className='header__nav-item'><NavLink className= {({isActive}) => !isActive ? "header__nav-link" :
   "header__nav-link active-link"} to="/aboutme">About us</NavLink></li>
  <li className='header__nav-item'><NavLink className= {({isActive}) => !isActive ? "header__nav-link" :
   "header__nav-link active-link"} to="/sales">Extra Salespage</NavLink></li>
  <li className='header__nav-item'><NavLink className= {({isActive}) => !isActive ? "header__nav-link" :
   "header__nav-link active-link"} to="/guide">Get your free guid now</NavLink></li>
</ul>
</div>
<div className="header__burger-container" onClick={handleAdapt}>
        <div className="header__burger">
          <span></span>
      </div>
      </div>
      </div>
      </header>
:   <header>
   <div className={adapt && !active ? 'header__mobile-menu active' : 'header__mobile-menu'}>
        <div className="header__mobile-menu-header">
          <div className="header__mobile-menu-title">
            Menu
          </div>
          <div>
          <img className="header__mobile-menu-close" src={cross} alt="Close" onClick={handleAdapt}/>
          </div>
        </div>
        <div className="header__mobile-menu-body">
<ul className='header__nav-list'>
<li className='header__nav-item'><Link className='header__nav-link' to='/' onClick={handleActive}>Home</Link></li>
  <li className='header__nav-item'><Link className='header__nav-link' to="/services" onClick={handleActive}>Services</Link></li>
  <li className='header__nav-item'><Link className='header__nav-link' to="/aboutme" onClick={handleActive}>About us</Link></li>
  <li className='header__nav-item'><Link className='header__nav-link' to="/sales" onClick={handleActive}>Extra Salespage</Link></li>
</ul>
        </div>
      </div>
</header>}
</>
  )

}

export default Header;