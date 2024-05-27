import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';

const Navbars = () => {
  return (
    <div>
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">CRUD OPERATIONS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link ><Link to='/'>create</Link></Nav.Link>
            <Nav.Link> <Link to='/all'>All Post</Link></Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
   

     
    </div>
  );
}

export default Navbars;
