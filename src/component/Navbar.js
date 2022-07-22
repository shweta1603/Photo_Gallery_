import React from 'react';
import {Nav,Navbar,Container} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
const NavbarComponent =() => {
        return (          
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={NavLink} to='/' >Pictures Gallery</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">      {/*  for small screen all navlinks come here */}
              <Nav className="me-auto">                       {/* it has two nav. Nav me auto push the item to left and the other will go right in navbar */}
                <Nav.Link as={NavLink} to='/' className={({isActive})=> isActive ? 'active' : ''}>Photos</Nav.Link>
                <Nav.Link as={NavLink} to='about' className={({isActive})=> isActive ? 'active' : ''}>About Us</Nav.Link>
                <Nav.Link as={NavLink} to='contact' className={({isActive})=> isActive ? 'active' : ''}>Contact Us</Nav.Link>
                {/* to='contact' means 'contact' will get apended into url and that respective component will render. */}
                {/* Usinng NavLink to give the dark color text when on that component by giving 
                className={({isActive})=> isActive ? 'active' : ''} */}
              </Nav>
              {/* <Link style={{color:'white'}} to='/'>Photos</Link>
                <Link to='/about'>About Us</Link>
                <Link to='contact'>Contact Us</Link> */}

              <Nav>
                <Nav.Link as={NavLink} to='/signup' className={({isActive})=> isActive ? 'active' : ''}>Sign Up</Nav.Link>
                <Nav.Link as={NavLink} to='/login' className={({isActive})=> isActive ? 'active' : ''}>
                  Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>   
        );
}

export default NavbarComponent;
