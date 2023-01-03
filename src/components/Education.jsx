import React from 'react'
import data from '../resume'

function Education() {
    const education = data.education
    let count = 0
    const n = education.length;
    console.log(education)
  return (
    <div>
        {education.map((edu) =>{
            count = count+1;
            return(
                <div>
                    <h4>{edu.class}</h4>
                    
                    <span>
                    <span className='text-info font-weight-bold h3'>{edu.name}, </span>
                    <b>Passout:</b> {edu.yop}
                    </span>
                    
                    {edu.desc != ""? <p>{edu.desc}</p>: <></>}
                    <p><b>{edu.grade_type}: </b>{edu.marks}</p>
                    {count != n? <hr></hr>: <></>}
                </div>
            )
        })} 
    </div>
  )
}

export default Education