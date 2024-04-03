import React from 'react'
import './ForumItem.css'
import { NavbarMobile } from '../../../components/navbarMobile/NavbarMobile'
import { Navbar } from '../../../components/navbar/Navbar'

export const ForumItem = () => {
  return (
    <div className='forum'>
      <NavbarMobile className='learnNavbarMobile' />
      <div className="wrapper">
        <Navbar className='learnNavbar'/>
        <h1>Ресурсы</h1>
      </div>
    </div>
  )
}
