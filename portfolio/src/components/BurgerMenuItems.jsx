import React from 'react'

const BurgerMenuItems = ({isActive, toggleActive}) => {
  return (
    <div className={isActive ? 'show' : 'hide'}>
      <a href='#about' onClick={() => toggleActive(false)}>About</a>
      <a href='#projects' onClick={() => toggleActive(false)}>Projects</a>
      <a href='#education' onClick={() => toggleActive(false)}>Education</a>
      <a href='#skills' onClick={() => toggleActive(false)}>Skills</a>
    </div>
  )
}

export default BurgerMenuItems