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
        <Sidebar xs={3} sm={2} md={2} lg={2} xl={2}>
          <Nav className="flex-column">
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

            <NavItem exact to="/dashboard/adicionarArtigos" activeclassname="active">
              Adicionar Artigos
            </NavItem>
          </Nav>
        </Sidebar>
        <MainContent xs={9} sm={10} md={10} lg={10} xl={10}>
          <Outlet />
        </MainContent>
      </Row>
    </DashboardContainer>
  );
};

export default Dashboard;
