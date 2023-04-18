import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/appLogo.webp';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

export default function Appbar() {
  return (
    <>
      <Navbar text= "dark">
        <div className='px-3'>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src= {logo}
              width="58"
              height="38"
              className="d-inline-block align-top"
            />{' '}
            Connect With Friends
          </Navbar.Brand>
        </div>
        <div style={{ margin: "25px 95px", fontSize: "22px" }}>
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
            <Nav.Link href="#signup">SignUp</Nav.Link>
            <Nav.Link href="#login">LogIn</Nav.Link>
          </Nav>
        </div>
      </Navbar>
  </>
  )
}
