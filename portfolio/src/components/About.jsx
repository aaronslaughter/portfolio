import React from 'react'
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'

const About = () => {
  return (
    <div className='about'>
      <h2>Aaron Slaughter</h2>
      <div className='contact'>
        <div className='address'>Baltimore-Washington D.C. Area -</div>
        <div className='address'>&nbsp;(301)-875-9692 -</div>
        <div className='address'>&nbsp;aslaugh@gmail.com</div>
      </div>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat voluptates quam assumenda veniam, temporibus voluptate porro itaque illum impedit facilis fugit odit libero atque exercitationem incidunt iusto inventore quidem similique.</p>
      <div className='icon-container'>
        <a className='icon linkedin' href='https://www.linkedin.com/in/aaron-slaughter1/'>
          <AiOutlineLinkedin/>
        </a>
        <a className='icon github'href='https://github.com/aaronslaughter'>
          <AiOutlineGithub/>
        </a>
      </div>
    </div>
  )
}

export default About