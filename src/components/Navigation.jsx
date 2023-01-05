import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/navigation.css'



function Navigation() {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" variant='dark' bg="secondary" fixed="top" >
      <Container fluid>
        <Navbar.Brand href="#">Varuni Herle</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#home">Home</Nav.Link>
            {/* <Nav.Link href="#">About</Nav.Link> */}
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            {/* <Nav.Link href="#">Experience</Nav.Link> */}
            <Nav.Link href="#projects">Projects</Nav.Link>
            {/* <Nav.Link href="#">Achievement</Nav.Link> */}
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default Navigation