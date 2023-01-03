import React from 'react'
import { Card } from 'react-bootstrap'
import data from '../resume'
import '../css/contact.css'
function Contact() {
    const contact = data.contact
  return (
    <div className='container'>
        <h2 className='text-info'>My Contact details</h2>
        
        <div className='row'>
            {contact.map((c)=>{
                return(
                <Card style={{ width: '22rem', height:'10rem'}} >
                    <Card.Title>
                    <p className='text-info h5'>{c.name}</p>
                    </Card.Title>
                    <Card.Body>
                        <Card.Text>
                        {c.name =="Email"?
                         <a href="mailto:varunipherle@gmail.com" className='link text-muted'>{c.link}</a>
                         :<a href ={c.link} className='link text-muted'>{c.link}</a>}
                         </Card.Text>
                    </Card.Body>
                </Card>
                )
            })}


        </div>
        
        
      
        
     
    </div>
  )
}

export default Contact