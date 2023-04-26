import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBootstrap from 'react-bootstrap/Navbar';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../img/logo/img9.svg'

import { TextLogo, ContainerLogo, CustomNav } from './style'

function CustomNavbar() {
  return (
    <NavbarBootstrap expand="lg" style={{backgroundColor: '#608263'}} variant="dark">
      <Container>
        <ContainerLogo>
          <NavbarBootstrap.Brand href="/">
            <img
              alt="Logo da Ki Terapia"
              src={Logo}
              margin-top="-20px"
              margin-bottom="-20px"
              width="90"
              height="90" className="d-inline-block align-top"
            />{' '}
            <TextLogo>
              Espaço Ki
            </TextLogo>
          </NavbarBootstrap.Brand>
        </ContainerLogo>
        <NavbarToggle aria-controls="navbar-nav" />
        <NavbarCollapse id="navbar-nav">
          <CustomNav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="sobre">Sobre</Nav.Link>
            <Nav.Link href="servicos">Serviços</Nav.Link>
            <Nav.Link href="contato">Contato</Nav.Link>
            <Nav.Link href="artigos">Artigos</Nav.Link>
            <Nav.Link href="catalogo">Catalogo</Nav.Link>
          </CustomNav>
        </NavbarCollapse>
      </Container>
    </NavbarBootstrap>
  )
}

export default CustomNavbar;
