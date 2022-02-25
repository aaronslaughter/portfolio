import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import SmartRocketsImg from '../assets/smart_rockets.png'

const SmartRockets = () => {
  return (
    <div>
      
      <a
        href='https://www.youtube.com/watch?v=QVespZK_vmM'
        target='_blank'
        rel='noopener noreferrer'
      ><h3>Smart Rockets</h3></a>
      <img id='smart-rockets-img' src={SmartRocketsImg} alt='Smart Rockets Screenshot'/>
      <p>Technologies Used: C++, <a href='https://www.sfml-dev.org/' target='_blank' rel='noopener noreferrer'>SFML</a></p>
      <p>Graphical rocket simulation that uses a genetic algorithm to teach the
        rockets how to avoid obstacles.
      </p>
      <a 
        className='icon github'
        href='https://github.com/aaronslaughter/SmartRockets'
        target='_blank'
        rel='noopener noreferrer'
      >
        <AiOutlineGithub/>
      </a>
    </div>
  )
}

export default SmartRockets