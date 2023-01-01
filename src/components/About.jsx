import React from 'react'
import data from '../resume.js'
import '../css/about.css'
import img from '../images/profile.jpeg'

function About() {
  return (
    <div className='about'>
    <div className='container'>
        <div className='row'>
            <div className='col-4'>
               <img className="profile-pic" src={img} alt="" />
            </div>
            <div className='col-8'>
            <h1>About me</h1>
            {data.about}
            </div>
        </div> 
    </div>
    </div>
    
  )
}

export default About