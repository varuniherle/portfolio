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
                <h3 className='text-info font-weight-bold'>{e.company}</h3>
                <p>{e['Year of joining']} - {e['end date']}</p>
                {/* <p>{e['desc']}</p> */}
                {/* {e['desc1'].map((d) =>{
                   return( <li>{d}</li>)
                })} */}
                <ol>
                {e.client.map((exp) =>{
                    return(
                       <div>
                        <h5><li>Client: {exp.client}</li></h5>
                        <h6>Role :{exp.role}</h6>
                        <ul><b>Tasks:</b>
                        {exp.desc.map((d) =>{
                            return(
                                <li>{d}</li>
                            )
                        })}
                        </ul>
                       </div> 
                    )
                })}
                </ol>
            </div>
            )
        })}
        </div>
    </div>
  )
}

export default Experience