import React from 'react'
import hero from '../assets/hero_pic.jpeg'

const Nav = ({children}) => {
  return (
    <div>
      <section className='nav'>
        <header>Aaron Slaughter</header>
        <img id='hero' src={hero}/>
        {children}
      </section>
    </div>
  )
}

export default Nav