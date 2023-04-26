import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const DashboardContainer = styled(Container)`
  margin-top: 50px;
`;

const Sidebar = styled(Col)`
  background-color: #f8f9fa;
  min-height: 100vh;
`;

const MainContent = styled(Col)`
  padding: 20px;
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
  return (
    <DashboardContainer fluid>
      <Row>
        <Sidebar sm={2}>
          <Nav className="flex-column">
            <NavItem
              to="/dashboard/painel"
              activeClassName="active"
            >
              Painel dos Produtos
            </NavItem>
            
            <NavItem
              to="/dashboard/adicionarProdutos"
              activeClassName="active"
            >
              Adicionar Produtos
            </NavItem>


            <NavItem to="/dashboard/adicionarArtigos" activeClassName="active">
              Adicionar Artigos
            </NavItem>
          </Nav>
        </Sidebar>
        <MainContent sm={10}>
          <Outlet />
        </MainContent>
      </Row>
    </DashboardContainer>
  );
};

export default Dashboard;
