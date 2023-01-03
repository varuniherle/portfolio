import React from 'react'
import Navigation from './Navigation'
import Education from './Education'
import Header from './Header'
import About from './About'
import Experience from './Experience'
import Portfolio from './Portfolio'
import '../css/home.css'
import Contact from './Contact'
import Projects from './Projects'


function Home() {
  return (
    <div >
    <Navigation />
    <div className='home_padding'>
        <div id = "home">
        <Header />
        </div>

        <div id ="portfolio">
        <Portfolio />
        </div>

        <div id ="projects">
        <Projects />
        </div>

        <div id ="contact">
        <Contact />
        </div>

        

    </div>
     
    

    
    
    </div>
  )
}

export default Home