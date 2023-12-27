import React from 'react'
import Logo from './Logo'
import Nav from './Navabar/Nav'

function Header() {
  return (
   <header className='flex justify-around w-[95%] items-center py-5 '>
       <Logo/>
       <Nav/>
   </header>
  )
}

export default Header