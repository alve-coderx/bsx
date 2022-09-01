import React, { useContext } from "react";
import DropdownNavbar from "./DropdownNavbar";
import LogoNavbar from "./LogoNavbar";
import { Navbar, Container, Row, Col, Nav, NavDropdown, NavItem } from "react-bootstrap";
import { ThemeContext } from "../Context/theme";

export default function NavbarComponent() {
  const [{theme}] = useContext(ThemeContext)
  return (
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor : theme.backgroundColor}}>
      <Container>
        <Navbar.Brand href="#home">
          <LogoNavbar/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" style={{color : theme.color}}>
            <Nav.Link href="#features">Home</Nav.Link>
            <NavDropdown title="Blockchain"  id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" >
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" >Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" >
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Validators" id="collasible-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" >
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" >Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" >
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Tokens" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
