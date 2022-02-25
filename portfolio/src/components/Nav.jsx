import React from 'react'
import hero from '../assets/hero_pic.jpeg'

const Nav = ({children}) => {
  return (
    <div>
      <section className='nav'>
        <img id='hero' alt='profile pic' src={hero}/>
        {children}
      </section>
    </div>
  )
}

export default Nav