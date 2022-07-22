import React from 'react';
import {Nav,Navbar,Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useState} from 'react'

//using conditional rendering for just few components in simplest way-
const NavbarForTwoComponent =() => {
    const [showAbout , setShowAbout]=useState(false)
    const [showContact , setShowContact]=useState(false)
        return (    
            <>      
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to='/'>Pictures Gallery</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">      {/*  for small screen all navlinks come here */}
              <Nav className="me-auto">                       {/* it has two nav. Nav me auto push the item to left and the other will go right in navbar */}
                <Nav.Link as={Link} to='/'>Photos</Nav.Link>
                {/* <Nav.Link as={Link} to='about'>About Us</Nav.Link>
                <Nav.Link as={Link} to='contact'>Contact Us</Nav.Link> */}
              </Nav>
              <Nav.Link onClick={()=> setShowAbout(!showAbout)}>About Us</Nav.Link>
              <Nav.Link onClick={()=> setShowContact(!showContact)}>Contact Us</Nav.Link>
              
            </Navbar.Collapse>
          </Container>
        </Navbar>   
        {showAbout && <h1>About</h1>}
        {showContact && <h1>Contact US</h1>}
        </>
        );
}

export default NavbarForTwoComponent;
