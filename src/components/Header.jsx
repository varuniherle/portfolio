import React from 'react'
import { Button } from 'react-bootstrap'
import { ArrowDown } from 'react-bootstrap-icons'
import Typewriter from 'typewriter-effect';
import '../css/header.css'


function Header() {
  return (
    <div>
        <div className='header'>
            <div  className='header_content'>
            <h2 className='text-info'>Hey!</h2>
            <h1>
            <Typewriter
            options={{
                strings: ['I am Varuni'],
                autoStart: true,
                loop: true,
            }}
            /></h1>
            <h6>I am currently working at TCS</h6>
            </div>
            <div className=''>
            <a className="btn btn-primary " href="#portfolio"><ArrowDown /></a>

            </div>
        </div>
    </div>
  )
}

export default Header