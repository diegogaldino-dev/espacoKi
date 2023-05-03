import React, { useState, useEffect } from "react";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { StyledCard } from "./style";
import { ref, onValue } from 'firebase/database';
import { db } from '../../firebase';

const numeroWhatsapp = "5511941265438";

const categorias = [
  {id: 1, nome: "Casa"},
  {id: 2, nome: "Para elas"},
  {id: 3, nome: "Para eles"},
  {id: 4, nome: "Lavabo"},
  {id: 5, nome: "Banho"},
];

const Catalogo = () => {
  const [produtos, setProdutos] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

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

  const handleCategoriaClick = (categoriaId) => {
    setCategoriaSelecionada(categoriaId);
  };

  const handleWhatsappClick = (produto) => {
    const mensagem = `Olá, gostaria de mais informações sobre o produto "${produto.nome}" - Descrição: "${produto.descricao}" - Imagem: ${produto.imagem} - Valor: R$${produto.valor.toFixed(2)}`;
    window.open(`https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagem)}`);
  };

  const produtosFiltrados = categoriaSelecionada ? produtos.filter((produto) => produto.categoriaId === categoriaSelecionada) : produtos;

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-12">
          <ListGroup>
            {categorias.map(({ id, nome }) => (
              <ListGroupItem
                key={id}
                action
                onClick={() => handleCategoriaClick(id)}
                active={id === categoriaSelecionada}
              >
                {nome}
              </ListGroupItem>
            ))}
          </ListGroup>
        </div>
        <div className="col-lg-9 col-md-8 col-sm-12">
          {produtosFiltrados.map(({ id, nome, descricao, imagem, valor }) => (
            <StyledCard key={id}>
              <Card.Img variant="top" src={imagem} />
              <Card.Body>
                <Card.Title>{nome}</Card.Title>
                <Card.Text>{descricao}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  R$ {parseFloat(valor).toFixed(2)}
              </small>
              <Button
                className="float-right"
                variant="success"
                onClick={() => {
                  const valorNumerico = parseFloat(valor);
                  handleWhatsappClick({ id, nome, descricao, imagem, valor: valorNumerico })
                }}
              >
                Comprar pelo Whatsapp
              </Button>
            </Card.Footer>
          </StyledCard>
        ))}

      </div>
    </div>

    </div>
  );
};

export default Catalogo;