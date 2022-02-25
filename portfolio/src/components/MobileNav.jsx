import React from 'react'
import hero from '../assets/hero_pic.jpeg'

const MobileNav = ({children}) => {
  return (
    <div>
      <section className='mobile-nav'>
        <p>Aaron Slaughter</p>
        <img id='hero' alt='profile pic' src={hero}/>
        {children}
      </section>
    </div>
  )
}

export default MobileNav