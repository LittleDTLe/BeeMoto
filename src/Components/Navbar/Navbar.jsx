import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link as NavLink, Element } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'
import { useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import * as Scroll from "react-scroll";



const Navbar = () => {

  const path = useLocation().pathname;
  const location = path.split("/")[1];
  const navigate = useNavigate();
  const scroller = Scroll.scroller;

  const goToPageAndScroll = async (selector) => {
    navigate('/');
    console.log("Here");
     scroller.scrollTo(selector, {
      duration: 500,
      smooth: true,
      offset: -75,
      spy: true
    });
  };

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
          {location === ""? (
            <>
            <li>
              
              <ScrollLink href='#hero' to='hero' smooth={true} offset={0} duration={500}>Home</ScrollLink>
            </li>
            <li><ScrollLink href='#services' to='services' smooth={true} offset={-300} duration={500}>Services</ScrollLink></li>
            <li><ScrollLink href='#about' to='about' smooth={true} offset={-200} duration={500}>About</ScrollLink></li>
            <li><ScrollLink href='#gallery' to='gallery' smooth={true} offset={-250} duration={500}>Gallery</ScrollLink></li>
            <li><ScrollLink href='#contact' to='contact' smooth={true} offset={0} duration={500} className='btn'>Contact Us</ScrollLink></li>
            </>
          ): (
            <>
              <li onClick={() => goToPageAndScroll('hero')}>Home</li>
              <li onClick={() => goToPageAndScroll("services")}>Services</li>
              <li onClick={() => goToPageAndScroll('about')}>About</li>
              <li onClick={() => goToPageAndScroll('gallery')}>Gallery</li>
              <li onClick={() => goToPageAndScroll('contact')} className='btn'>Contact Us</li>
            </>
          )} 
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar