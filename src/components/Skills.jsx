import React from 'react'
import data from '../resume'
import '../css/skills.css'

function Skills() {
  const skills = data.skills;

  return (
    <div>
      {Object.entries(skills).map(([category, values]) => (
        <div className='row mb-4' key={category}>
          <h3 className='text-info'>{category}</h3>
          {values.map((item, index) => (
            <div className='col-6 card3' key={index}>
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Skills
