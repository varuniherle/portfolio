import React from 'react'
import data from '../resume'

function Experience() 
{
    const exp = data.experience;
    console.log(exp)
    exp.map((e) =>{
        console.log(e)
    })
    
  return (
    <div>
        <div>
            {exp.map((e) =>{
            return (
            <div>
                <h5 className='text-info font-weight-bold'>{e.company}</h5>
                <p>{e['Year of joining']} - {e['end date']}</p>
                <p>{e['desc']}</p>
            </div>
            )
        })}
        </div>
    </div>
  )
}

export default Experience