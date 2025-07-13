import React from 'react'
import { Card } from 'react-bootstrap'
import '../css/project.css'
import data from '../resume.js'

function Projects() {
  const project = data.project

  return (
    <div className='container p-3'>
      <h2 className='text-info mb-4'>My Projects</h2>
      <div className='row'>
        {project.map((p, index) => (
          <div className='col-md-4 mb-4 d-flex' key={index}>
            <Card className='w-100 shadow-sm project-card'>
              <Card.Body>
                <Card.Title className='text-info h5'>{p.name}</Card.Title>
                <Card.Text>{p.desc}</Card.Text>
              </Card.Body>
              {p.link && p.link !== '#' && (
                <Card.Footer>
                  <a href={p.link} className='link text-decoration-none text-primary' target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </Card.Footer>
              )}
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
