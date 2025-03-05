import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link, Element } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {

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
            <li><Link href='#hero' to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link href='#services' to='services' smooth={true} offset={-300} duration={500}>Services</Link></li>
            <li><Link href='#about' to='about' smooth={true} offset={-200} duration={500}>About</Link></li>
            <li><Link href='#gallery' to='gallery' smooth={true} offset={-250} duration={500}>Gallery</Link></li>
            <li><Link href='#contact' to='contact' smooth={true} offset={0} duration={500} className='btn'>Contact Us</Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar