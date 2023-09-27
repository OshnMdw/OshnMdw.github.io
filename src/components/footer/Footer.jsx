import React from 'react'
import './footer.css'
import {BsFacebook,BsLinkedin,BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://linkedin.com/oshnmdw'><BsLinkedin/></a>
        <a href='https://github.com/OshnMdw'><BsGithub/></a>
        <a href='https://facebook.com/oshan.madawa.758'><BsFacebook/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy;2023 All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer