import React from 'react'
import { 
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiNodejs,
  DiReact,
  DiPython,
  DiMongodb,
  DiPostgresql,
  DiGit,
  DiGithubBadge
} from 'react-icons/di'

const Skills = () => {
  return (
    <div id='skills'>
      <h2>Skills</h2>
      <h3>Programming Languages &amp; Tools</h3>
      <ul>
        <li><DiHtml5/></li>
        <li><DiCss3/></li>
        <li><DiJavascript1/></li>
        <li><DiNodejs/></li>
        <li><DiReact/></li>
        <li><DiPython/></li>
        <li><DiMongodb/></li>
        <li><DiPostgresql/></li>
        <li><DiGit/></li>
        <li><DiGithubBadge/></li>
      </ul>
    </div>
  )
}

export default Skills