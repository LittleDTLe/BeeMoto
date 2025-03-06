import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { useLocation, useNavigate } from "react-router-dom";


const Navbar = () => {

  const nav = useNavigate();
  const location = useLocation();

  //Navigation with Scroll
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();

    const targetPath = '/#${sectionId}';

    //If on Homepage
    if(location.pathname === '/'){
      
      const element = document.getElementById(sectionId);

      if(element){
        element.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    }else{
      nav(targetPath);

    //Update URL without pageReload
    window.history.pushState(null, '', targetPath);
    } 
  }

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=> {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky? 'dark_nav' : ''}`}>
        <img src={logo} alt="" className='logo' />
        <ul className={mobileMenu?'':'hide-menu'}>
            <li><a href="/#hero" onClick={(e) => handleNavClick(e, 'hero')}>Home</a></li>
            <li><a href="/#services" onClick={(e) => handleNavClick(e, 'services')}>Services</a></li>
            <li><a href="/#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
            <li><a href="/#store" onClick={(e) => handleNavClick(e, 'store')}>Gallery</a></li>
            <li><a href="/#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact Us</a></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar