import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import Servicos from '../pages/Servicos';
import Contato from '../pages/Contato';
import Artigos from '../pages/Artigos';
import Catalogo from '../pages/Catalogo';
import PageArtigos from '../pages/PageArtigos'; 
import Dashboard from '../pages/Dashboard';
import AdicionarArtigos from "../pages/AdicionarArtigos";
import AdicionarProdutos from "../pages/AdicionarProdutos";
import Painel from "../pages/Painel";
import EditarArtigo from '../pages/EditarArtigo';
import EditarProduto from '../pages/EditarProduto';
import PageProduto from "../pages/PageProduto";

// Navbar e Footer
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sobre" element={<Sobre />} />
          <Route exact path="/servicos" element={<Servicos />} />
          <Route exact path="/contato" element={<Contato />} />
          <Route exact path="/artigos" element={<Artigos />} />
          <Route exact path="/loja" element={<Catalogo />} />
          <Route exact path="/pageProduto/:id" element={<PageProduto />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route exact path="adicionarArtigos" element={<AdicionarArtigos />} />
            <Route exact path="adicionarProdutos" element={<AdicionarProdutos />} />            
            <Route exact path="painel" element={<Painel />} />
          </Route>
          <Route path="/PageArtigos/:id" element={<PageArtigos />} /> 
          <Route path="/EditarArtigo/:id" element={<EditarArtigo />} />
          <Route path="/EditarProduto/:id" element={<EditarProduto />} />          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Router;
