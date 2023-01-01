import React from 'react'
import Navigation from './Navigation'
import Education from './Education'
import Header from './Header'
import About from './About'
import Experience from './Experience'
import Portfolio from './Portfolio'
import '../css/home.css'


function Home() {
  return (
    <div >
    <Navigation />
    {/* header */}
    <div className='home_padding'>

    <div id = "home">
    <Header />
    </div>

    <div id ="portfolio">
    <Portfolio />
    </div>
    
    </div>
     
    {/* header ends */}

    
    
    </div>
  )
}

export default Home