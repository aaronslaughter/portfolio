import React from 'react'
import { AiOutlineGithub } from 'react-icons/ai'
import DispatchDashboardImg from '../assets/dispatch_dashboard.png'

const DispatchDashboard = () => {
  return (
    <div>
      <h3>Dispatch Dashboard</h3>
      <img src={DispatchDashboardImg} alt='Dispatch Dashboard Screenshot'/>
      <p>Technologies Used: HTML/CSS, Node.js, React.js, Express.js, MongoDB, Mongoose, Heroku</p>
      <p>An issue tracking console to visualize the workflow of a field service team. Create tickets,
        assign tickets to technicians, and resolve those tickets all while keeping track of the team
        as a whole.</p>
      <a className='icon github'href='https://github.com/aaronslaughter/dispatch-dashboard'>
        <AiOutlineGithub/>
      </a>
    </div>
  )
}

export default DispatchDashboard