import React from 'react'
import { Card } from 'react-bootstrap'
import data from '../resume'
import '../css/contact.css'
function Contact() {
    const contact = data.contact
  return (
    <div className='mt-1 footerbackground'>
        <h2 className='container text-info'>My Contact details</h2>
        
        <div className='row container'>
            {contact.map((c)=>{
                return(
                <div className='col-md-3  mx-auto mb-2'>
                        <h4 className='text-info'>{c.name}</h4>
                        {c.name =="Email"?
                         <a href="mailto:varunipherle@gmail.com" className='link text-muted'>{c.link}</a>
                         :<a href ={c.link} className='link text-muted'>{c.link}</a>}
                </div>
                )
            })}


        </div>
        
        
      
        
     
    </div>
  )
}

export default Contact