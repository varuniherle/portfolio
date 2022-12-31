import React from 'react'
import Navigation from './Navigation'
import '../css/header.css'
import { Button } from 'react-bootstrap'
import { ArrowDown } from 'react-bootstrap-icons'

function Home() {
  return (
    <div >
        <Navigation />
        <div className='header'>
            <div  className='header_content'>
            <h2>Hey!</h2>
            <h1>I am Varuni</h1>
            <p>I am a full stack Developer, I like to learn new technologies</p>
            <Button className="btn btn-outline-dark" ><ArrowDown /></Button>
            </div>
            
        </div>
    </div>
  )
}

export default Home