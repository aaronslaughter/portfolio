import React from 'react'

const BurgerMenuItems = ({isActive, toggleActive}) => {
  return (
    <div className={isActive ? '' : 'hide'}>
      <ul>
        <li><a href='#about' onClick={() => toggleActive(false)}>About</a></li>
        <li><a href='#projects' onClick={() => toggleActive(false)}>Projects</a></li>
        <li><a href='#education' onClick={() => toggleActive(false)}>Education</a></li>
        <li><a href='#skills' onClick={() => toggleActive(false)}>Skills</a></li>
      </ul>
    </div>
  )
}

export default BurgerMenuItems