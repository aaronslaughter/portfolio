import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import TajjMusicHallImg from '../assets/tajjmusichall.png'

const TajjMusicHall = () => {
  return (
    <div>
      <h4>TAJJ Music Hall</h4>
      <img src={TajjMusicHallImg} alt='Tajj Music Hall Screenshot'></img>
      <p>Technologies Used: HTML/CSS, Node.js, React.js, Express.js, Sequelize, PostgreSQL</p>
      <p>Named after the team of four that created it (Terra, Aaron, Jane, and Julio),
        TAJJ Music Hall is a web application that let's you search for music events
        and concerts from your favorite artists. Add your name to the list of attendees
        and post discuss the event with other users. Connected to the Bandsintown REST API.</p>
      <a className='icon github'href='https://github.com/aaronslaughter/tajj-music-hall'>
          <AiOutlineGithub/>
      </a>
    </div>
  )
}

export default TajjMusicHall