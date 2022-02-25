import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import SmartRocketsImg from '../assets/smart_rockets.png'

const SmartRockets = () => {
  return (
    <div>
      <h3>Smart Rockets</h3>
      <img id='smart-rockets-img' src={SmartRocketsImg} alt='Smart Rockets Screenshot'/>
      <p>Technologies Used: C++, <a href='https://www.sfml-dev.org/'>SFML</a></p>
      <p>Graphical rocket simulation that uses a genetic algorithm to teach the
        rockets how to avoid obstacles.
      </p>
      <a className='icon github'href='https://github.com/aaronslaughter/SmartRockets'>
        <AiOutlineGithub/>
      </a>
    </div>
  )
}

export default SmartRockets