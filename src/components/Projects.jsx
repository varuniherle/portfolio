import React from 'react'
import { Card } from 'react-bootstrap'
import '../css/project.css'
import data from '../resume.js'

function Projects() {
const project = data.project
  return (
    <div className='container'>
        <h2 className='text-info'>My Projects</h2>
        <div className='row'>
            {project.map((p)=>{
                return(
                    
                    <Card style={{ width: '22rem' }}>
                        {/* <Card.Header> */}
                        <Card.Title >
                            <p className='text-info h5'>{p.name}</p>
                        </Card.Title>
                        {/* </Card.Header> */}
                        
                        <Card.Body>
                            <Card.Text>
                                {p.desc}
                            </Card.Text>
                        </Card.Body>
                        {p.link !="" ? 
                                 <a href ={p.link} className="link">More about the project</a>
                        : <></>}
                    </Card>
                    
                )
            })}
        </div>
    </div>
  )
}

export default Projects