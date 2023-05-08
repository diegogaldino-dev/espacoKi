import React, { useEffect, useState } from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ref, onValue, remove } from 'firebase/database';
import { db } from '../../firebase';
import parse from "html-react-parser";
import "react-quill/dist/quill.snow.css";

const Painel = () => {
  const [artigos, setArtigos] = useState([]);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const artigosRef = ref(db, 'artigos');
    onValue(artigosRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const artigosList = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setArtigos(artigosList);
      }
    });
  }, []);

  useEffect(() => {
    const produtosRef = ref(db, 'produtos');
    onValue(produtosRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const produtosList = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setProdutos(produtosList);
      }
    }, (error) => {
      console.log(error);
    });
  }, []);

  const handleDeleteArtigo = (id) => {
    if (window.confirm('Deseja realmente excluir este artigo?')) {
      const artigoRef = ref(db, `artigos/${id}`);
      remove(artigoRef);
    }
  };

  const handleDeleteProduto = (id) => {
    if (window.confirm('Deseja realmente excluir este Produto?')) {
      const produtoRef = ref(db, `produtos/${id}`);
      remove(produtoRef);
    }
  };

  return (
    <div className="bg-light p-5" style={{ fontFamily: "Roboto Slab" }}>
  <div className="container">
    <h1 className="mb-4">Artigos</h1>
    <div className="row row-cols-1 row-cols-md-3 g-3">
      {artigos.map((artigo) => (
        <div key={artigo.id} className="col mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <Card.Img className="w-1 h-1" variant="top" src={artigo.imagem} width="200" />
              <h5 className="card-title">{artigo.titulo}</h5>
              <Card.Text>{parse(`${artigo.conteudo.substring(0, 50)}...`)}</Card.Text>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <Link to={`/PageArtigos/${artigo.id}`} className="btn btn-primary">
                Ler mais
              </Link>
              <div>
                <Link to={`/EditarArtigo/${artigo.id}`} className="btn btn-secondary me-2">
                  Editar
                </Link>
                <Button variant="danger" onClick={() => handleDeleteArtigo(artigo.id)}>
                  Excluir
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  <div className="container">
    <h1 className="mb-4">Produtos</h1>
    <div className="row row-cols-1 row-cols-md-3 g-3">
      {produtos.map((produto) => (
        <div key={produto.id} className="col mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
            <Carousel>
              <Carousel.Item>
                <Card.Img className="w-1 h-1" variant="top" src={produto.imagem} width="200" />
              </Carousel.Item>
              <Carousel.Item>
                <Card.Img className="w-1 h-1" variant="top" src={produto.imagem2} width="200" />
              </Carousel.Item>
              <Carousel.Item>
                <Card.Img className="w-1 h-1" variant="top" src={produto.imagem3} width="200" />
              </Carousel.Item>
            </Carousel>
              <h5 className="card-title">{produto.nome}</h5>
              <p className="card-text">{parse(`(${produto.descricao.substring(0, 50)})...`)}</p>
              <h5>Categoria</h5>
              <p className="card-text">{produto.categoria}</p>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <Link to={`/catalogo`} className="btn btn-primary">
                Ver
              </Link>
              <div>
                <Link to={`/EditarProduto/${produto.id}`} className="btn btn-secondary me-2">
                  Editar
                </Link>
                <Button variant="danger" onClick={() => handleDeleteProduto(produto.id)}>
                  Excluir
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>  
</div>


  

  );
};

export default Painel;
