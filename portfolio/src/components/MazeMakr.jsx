import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import MazeMakrImg from '../assets/maze_makr.png'

const MazeMakr = () => {
  return (
    <div>
      <h4>Maze Makr</h4>
      <img src={MazeMakrImg} alt='Maze Maker Screenshot'/>
      <p>Technologies Used: HTML/CSS, Node.js, React.js, Django, Express.js, ProsgreSQL, Heroku</p>
      <p>Web application to randomly generate, customize, and solve 2D square grid mazes. Mazes are generated using the <a href='https://en.wikipedia.org/wiki/Maze_generation_algorithm#Recursive_division_method'>recursive division</a> method.</p>
      <a className='icon github'href='https://github.com/aaronslaughter/tajj-music-hall'>
          <AiOutlineGithub/>
      </a>
    </div>
  )
}

export default MazeMakr