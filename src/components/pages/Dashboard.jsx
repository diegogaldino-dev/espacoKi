import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const DashboardContainer = styled(Container)`
  margin-top: 50px;
`;

const MainContent = styled(Container)`
  padding: 20px;
  margin-top: 100px;
`;

const NavItem = styled(NavLink)`
  display: block;
  padding: 10px;
  color: #495057;
  text-decoration: none;

  &:hover {
    background-color: #e9ecef;
  }

  &.active {
    background-color: #dee2e6;
    font-weight: bold;
  }
`;

const Dashboard = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  return (
    <DashboardContainer style={{ fontFamily: "Roboto Slab" }} fluid>
      <Navbar expand="lg" variant="light" bg="light">        
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNav} />
        <Navbar.Collapse id="basic-navbar-nav" className={expanded ? "show" : ""}>
          <Nav className="mr-auto justify-content-between">
            <NavItem exact to="/dashboard/painel" activeclassname="active">
              Painel dos Produtos
            </NavItem>

            <NavItem
              exact
              to="/dashboard/adicionarProdutos"
              activeclassname="active"
            >
              Adicionar Produtos
            </NavItem>

            <NavItem
              exact
              to="/dashboard/adicionarArtigos"
              activeclassname="active"
            >
              Adicionar Artigos
            </NavItem>

            <Nav.Item>
              <Nav.Link href="/">Voltar para o site</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/Catalogo">Voltar aos Catálogos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/artigos">Voltar aos Artigos</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <MainContent>
        <Outlet />
      </MainContent>
    </DashboardContainer>
  );
};

export default Dashboard;
