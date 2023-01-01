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
        <h5 className='text-info'>Langauges</h5>
        {lang.map((l) =>{
            return(
                <div className='col-6 card'>
                    {l}
                </div>
            )
        })}
        </div>
        <div className='row'>
        <h5 className='text-info'>Query Languages</h5>
        {query.map((l) =>{
            return(
                <div className='col-6 card'>
                    {l}
                </div>
            )
        })}
        </div>
        <div className='row'>
        <h5 className='text-info'>Langauges</h5>
        {framework.map((l) =>{
            return(
                <div className='col-6 card'>
                    {l}
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default Skills