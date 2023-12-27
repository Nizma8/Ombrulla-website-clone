import React, { useState } from 'react'
import Logo from './Logo'
import Nav from './Navabar/Nav'
import Hamburger from './Hamburger';

function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <header className="flex justify-around items-center w-[95%] py-5 mx-auto">
    <Logo />
    <Hamburger onClick={toggleMobileMenu} />
    <Nav showMobileMenu={showMobileMenu} toggleMobileMenu={toggleMobileMenu} />
  </header>
  )
}

export default Header