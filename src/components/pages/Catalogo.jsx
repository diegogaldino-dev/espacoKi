import React from 'react';
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import teste from '../../img/5.jpg'

import {StyledCard} from './style'

const Catalogo = () => {
  const numeroWhatsapp = '5511941265438'; // número do Whatsapp fixo

  const categorias = [
    { id: 1, nome: 'Categoria 1' },
    { id: 2, nome: 'Categoria 2' },
    { id: 3, nome: 'Categoria 3' },
  ];

  const produtos = [
    {
      id: 1,
      nome: 'Produto 1',
      descricao: 'Descrição do produto 1',
      imagem: teste,
      valor: 100.00,
      categoriaId: 1,
    },
    {
      id: 2,
      nome: 'Produto 2',
      descricao: 'Descrição do produto 2',
      imagem: 'caminho/para/imagem2.jpg',
      valor: 150.00,
      categoriaId: 1,
    },
    {
      id: 3,
      nome: 'Produto 3',
      descricao: 'Descrição do produto 3',
      imagem: 'caminho/para/imagem3.jpg',
      valor: 200.00,
      categoriaId: 2,
    },
    // adicione mais produtos aqui
  ];

  const handleWhatsappClick = (produto) => {
    const mensagem = `Olá, gostaria de mais informações sobre o produto "${produto.nome}" - Descrição: "${produto.descricao}" - Imagem: ${produto.imagem} - Valor: R$${produto.valor.toFixed(2)}`;
    window.open(`https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagem)}`);
  };

  return (
    <div className="row">
    <div className="col-md-3">
      <ListGroup>
        {categorias.map((categoria) => (
          <ListGroupItem key={categoria.id} action>{categoria.nome}</ListGroupItem>
        ))}
      </ListGroup>
    </div>
    <div className="col-md-9">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {produtos.map((produto) => (
          <div key={produto.id} className="col">
            <StyledCard>
              <Card.Img variant="top" src={produto.imagem} />
              <Card.Body>
                <Card.Title>{produto.nome}</Card.Title>
                <Card.Text>{produto.descricao}</Card.Text>
                <Card.Text>Valor: R${produto.valor.toFixed(2)}</Card.Text>
                <Button variant="primary" onClick={() => handleWhatsappClick(produto)}>
                  Enviar via WhatsApp
                </Button>
              </Card.Body>
            </StyledCard>
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

export default Catalogo;
