import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/logos/logo.svg';
import "./style.css";



export default class Topbar extends Component {   

    render() {
        return (
            
                <Navbar collapseOnSelect expand="sm" id="fullbar" variant="dark" fixed="top">
                    <Navbar.Brand href="#home">
                        <img
                          src={logo}
                          width="60"
                          height="60"
                          className="d-inline-block align-top"
                          alt="React Bootstrap logo"
                          color="white"
                        />

                    </Navbar.Brand>
                    <Navbar.Brand href="#home" color="black" style={{fontSize:"34px",backgroundColor:"#FFF343"}} > Catalyst</Navbar.Brand>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="justify-content-end navbar-nav" id="divNavLinks" activeKey="/home">
                            <Nav.Item> <Nav.Link id="navlinks" href="/home"> Home    </Nav.Link> </Nav.Item>
                            <Nav.Item> <Nav.Link id="navlinks" href="/home"> About Us</Nav.Link> </Nav.Item>
                            <Nav.Item> <Nav.Link id="navlinks" href="/home"> My Skill</Nav.Link> </Nav.Item>
                            <Nav.Item> <Nav.Link id="navlinks" href="/home"> Education & Experience </Nav.Link> </Nav.Item>
                            <Nav.Item> <Nav.Link id="navlinks" href="/home"> Contact </Nav.Link> </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>                 
                </Navbar>
                
            
        )
    }
}
