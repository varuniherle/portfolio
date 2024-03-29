import React from 'react'
import Education from './Education'
import Experience from './Experience'
import '../css/portfolio.css'
import Skills from './Skills'
import Achievement from './Achievement'

function Portfolio() {
  return (
    <div className='container portfolio'>
        <div className='row'>
        <div className='col-md-4'>
        <h2 className='text-info title'> Experience</h2>
        </div>
        <div className='col-md-8 '>
            <Experience />
        </div>
        </div>
        <hr></hr>
        <br></br>
        <div className='row'>
        <div className='col-md-4'>
            <h2 className='text-info title'>Education</h2>
        </div>
        <div className='col-md-8 center'>
            <Education />
        </div>
        </div>
        <hr></hr>
        <br></br>
        
        <div className='row'>
        <div className='col-md-4'>
            <h2 className='text-info title'>Skills</h2>
        </div>
        <div className='col-md-4'>
            <Skills />
        </div>
        </div>
        <hr></hr>
        <div className='row'>
            <div className='col-md-4'>
            <h2 className='text-info title'> Achivement</h2>
            </div>
            <div className='col-md-8 '>
                <Achievement />
            </div>
        </div>
        <hr></hr>
    </div>
  )
}

export default Portfolio