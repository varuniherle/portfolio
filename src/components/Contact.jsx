import React from 'react'
import { Card } from 'react-bootstrap'
import data from '../resume'
import '../css/contact.css'
import { FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

function Contact() {
    const contact = data.contact
    const redirectToLinkedIn = () => {
      window.open(contact[1].link, '_blank');
    };
  
    const redirectToGmail = () => {
      window.open('mailto:'+ contact[0].link);
    };
  
    const redirectToGitHub = () => {
      window.open(contact[2].link, '_blank');
    };
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className='p-3'>
    <div onClick={redirectToLinkedIn} style={{ margin: '0 10px' }}>
      <FaLinkedin size={30} />
    </div>
    <div onClick={redirectToGmail} style={{ margin: '0 10px' }}>
      <FaEnvelope size={30} />
    </div>
    <div onClick={redirectToGitHub} style={{ margin: '0 10px' }}>
      <FaGithub size={30} />
    </div>
  </div>
  )
}

export default Contact