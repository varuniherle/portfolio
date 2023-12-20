import React from 'react'
import data from '../resume.js'
import '../css/about.css'
import img from '../images/profile.jpeg'
import Contact from './Contact.jsx'

function About() {
  return (
    <div >
    <div className='container'>
            {data.about}
            <Contact />
    </div>
    </div>
    
  )
}

export default About