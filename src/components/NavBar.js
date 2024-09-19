import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="md" fixed='top' className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">EdenHub</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link><i class="fa-solid fa-house"></i>Home</Nav.Link>
            <Nav.Link><i class="fa-solid fa-right-to-bracket"></i>Sign in</Nav.Link> 
            <Nav.Link><i class="fa-solid fa-user-plus"></i>Sign up</Nav.Link>  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar