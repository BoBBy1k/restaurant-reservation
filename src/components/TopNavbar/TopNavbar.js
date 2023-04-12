import React from 'react'
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import logo from "../../assets/LemonBanner.png"
import "./TopNavbar.css"
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

export function TopNavbar(props) {    
    return (
        <div>
            <header className="App-header">
                <nav>
                <Navbar bg="light" expand="sm" >
                    <Container style={{maxWidth:"auto"}}>
                        <LinkContainer to="/">
                            <Navbar.Brand><img src={logo} className="LogoBanner" alt="logo" /></Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto" style={{width:"100%", whiteSpace: "nowrap"}}>
                                <li><Link to="/" className="nav-link">Home</Link></li>
                                <li><Link to="#Menu" className="nav-link">Menu</Link></li>
                                <li><Link to="/Bookings" className="nav-link">Bookings</Link></li>
                                <li><Link to="#Order-Online" className="nav-link">Order Online</Link></li>
                                <li><Link to="#Login" className="nav-link">Login</Link></li>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                </nav>
            </header>
        </div>
    )
}
