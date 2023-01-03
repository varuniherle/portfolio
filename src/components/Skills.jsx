import React from 'react'
import data from '../resume'
import '../css/skills.css'

function Skills() {

    const lang = data.skills.Languages;
    const framework = data.skills.Frameworks;
    const query = data.skills['Query Languages']
  return (
    <div>
        <div className='row'>
        <h3 className='text-info'>Langauges</h3>
        {lang.map((l) =>{
            return(
                <div className='col-6 card1' bg="secondary">
                    {l}
                </div>
            )
        })}
        </div>
        <div className='row'>
        <h3 className='text-info'>Query Languages</h3>
        {query.map((l) =>{
            return(
                <div className='col-6 card1' bg="secondary">
                    {l}
                </div>
            )
        })}
        </div>
        <div className='row'>
        <h3 className='text-info'>Langauges</h3>
        {framework.map((l) =>{
            return(
                <div className="col-6 card1">
                    {l}
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default Skills