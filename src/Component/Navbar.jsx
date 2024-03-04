import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <>
    <nav className='navbar'>
     <ul>
      <li>MOBILE & TABLETS <span><i class="fa-solid fa-angle-down"></i></span></li>
      <li>AUDIO<span><i class="fa-solid fa-angle-down"></i></span></li>
      <li>HOME APPLIANCES<span><i class="fa-solid fa-angle-down"></i></span></li>
      <li>COMPUTERS<span><i class="fa-solid fa-angle-down"></i></span></li>
      <li>CAMERAS<span><i class="fa-solid fa-angle-down"></i></span></li>
      <li>KITCHEN APPLIANCES<span><i class="fa-solid fa-angle-down"></i></span></li>
      <li>PERSONAL CARE<span><i class="fa-solid fa-angle-down"></i></span></li>
      <li>ACCESORIES<span><i class="fa-solid fa-angle-down"></i></span></li>
    </ul> 
    </nav>
    </>
  )
}

export default Navbar