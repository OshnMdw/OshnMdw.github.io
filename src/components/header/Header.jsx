import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/myprofile.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h3>Hello I'm</h3>
        <h1>Oshan Madawa</h1>
        <h3 className='text-light'>Fullstack Developer</h3>
        <CTA/>
        <HeaderSocial/>
        <a href="#contact" className='scroll_down'>Scroll Down</a>

        <div className='me'>
          <img className= 'me__image' src={ME} alt=""/>
        </div>

        

      </div>
    </header>
  )
}

export default Header