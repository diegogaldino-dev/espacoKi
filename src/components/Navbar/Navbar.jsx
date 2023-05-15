import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBootstrap from 'react-bootstrap/Navbar';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo/img9.svg';

import { TextLogo, ContainerLogo, CustomNav } from './style';

function CustomNavbar() {
  return (
    <NavbarBootstrap expand="lg" style={{ backgroundColor: '#608263' }} variant="dark" alt="Menu">
      <Container>
        <ContainerLogo>
          <NavbarBootstrap.Brand as={Link} to="/">
            <img
              alt="Logo da Espaço Ki Terapias"
              src={Logo}
              style={{ marginTop: '0px', marginBottom: '-20px' }}
              width="90"
              height="90"
              className="d-inline-block align-top"
            />{' '}
            <TextLogo>
              Espaço Ki
            </TextLogo>
          </NavbarBootstrap.Brand>
        </ContainerLogo>
        <NavbarToggle aria-controls="navbar-nav" />
        <NavbarCollapse id="navbar-nav">
          <CustomNav className="me-auto">
            <Nav.Link alt="inicio" as={Link} to="/">Home</Nav.Link>
            <Nav.Link alt="sobre" as={Link} to="/sobre">Sobre</Nav.Link>
            <Nav.Link alt="serviços" as={Link} to="/servicos">Serviços</Nav.Link>
            <Nav.Link alt="contato" as={Link} to="/contato">Contato</Nav.Link>
            <Nav.Link alt="artigos" as={Link} to="/artigos">Artigos</Nav.Link>
            <Nav.Link alt="catalogo" as={Link} to="/catalogo">Catalogo</Nav.Link>
            <Nav.Link alt="dashboard" as={Link} to="/dashboard"></Nav.Link>

          </CustomNav>
        </NavbarCollapse>
      </Container>
    </NavbarBootstrap>
  );
}

export default CustomNavbar;
