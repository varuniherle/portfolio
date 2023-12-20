import React from 'react'
import { Button } from 'react-bootstrap'
import { ArrowDown } from 'react-bootstrap-icons'
import Typewriter from 'typewriter-effect';
import '../css/header.css'
import About from './About';
import data from '../resume';
import Contact from './Contact';


function Header() {
  return (
    <div>
        <div className='header'>
            <div  className='header_content'>
            <h2 className='text-info'>Hey There!</h2>
            <h1>
            <Typewriter
            options={{
                strings: ['I am Varuni'],
                autoStart: true,
                loop: true,
            }}
            /></h1>
            <div className='container'>
            <About />
            </div>
            </div>
            <div className=''>
            <a className="btn btn-info " href="#portfolio"><ArrowDown /></a>
            </div>
        </div>
    </div>
  )
}

export default Header