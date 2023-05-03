import React, { useState } from "react";
import { db } from '../../firebase';
import { ref, push, set } from 'firebase/database';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AdicionarProdutos = () => {
  const [nomeProduto, setNomeProduto] = useState("");
  const [descricaoProduto, setDescricaoProduto] = useState("");
  const [valorProduto, setValorProduto] = useState("");
  const [categoriaProduto, setCategoriaProduto] = useState("");

  const categorias = [
    { id: 1, nome: "Casa" },
    { id: 2, nome: "Para elas" },
    { id: 3, nome: "Para eles" },
    { id: 4, nome: "Lavabo" },
    { id: 5, nome: "Banho" },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const produtosRef = push(ref(db, 'produtos'));
      const novoId = produtosRef.key;
      await set(ref(db, `produtos/${novoId}`), {
        id: novoId,
        nome: nomeProduto,
        descricao: descricaoProduto,
        valor: valorProduto,
        categoria: categoriaProduto
      });

      alert('Produtos adicionado com sucesso!');
      setNomeProduto('');
      setDescricaoProduto('');
      setValorProduto('');
      setCategoriaProduto('');
    } catch (error) {
      console.error('Erro ao adicionar Produto: ', error);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center my-5">Adicionar Produtos</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="nome">
              <Form.Label>Nome:</Form.Label>
              <Form.Control
                type="text"
                value={nomeProduto}
                onChange={(event) => setNomeProduto(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="descricao">
              <Form.Label>Descrição:</Form.Label>
              <Form.Control
                as="textarea"
                value={descricaoProduto}
                onChange={(event) => setDescricaoProduto(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="valor">
              <Form.Label>Valor:</Form.Label>
              <Form.Control
                type="text"
                value={valorProduto}
                onChange={(event) => setValorProduto(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="categoria">
              <Form.Label>Categoria:</Form.Label>
              <Form.Control
                as="select"
                value={categoriaProduto}
                onChange={(event) => setCategoriaProduto(event.target.value)}
              >
                <option value="" defaultValue disabled>Selecione uma categoria</option>
                {categorias.map((categoria) => (
                  <option key={categoria.id} value={categoria.nome}>
                    {categoria.nome}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <div className="text-center">
              <Button variant="primary" type="submit">Adicionar Produto</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AdicionarProdutos;
