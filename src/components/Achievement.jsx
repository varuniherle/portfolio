import React from 'react'
import data from '../resume.js'
import '../css/achivement.css'

function Achievement() {
    const achivement = data['achievement'];
    console.log(achivement)
  return (
    <div>
        {achivement.map((a) =>{
            return(
            <div>
                <h3 className='text-info'>
                    <a href ={a.link} className='link text-info' target="_blank">{a.title}</a>
                </h3>
                {a.prize!= ""? 
                
                    <h4>
                        Position: {a.prize}
                    </h4>
                
                : <></>}
                <p>{a.desc}</p>
            </div>
            )
        })}
    </div>
  )
}

export default Achievement