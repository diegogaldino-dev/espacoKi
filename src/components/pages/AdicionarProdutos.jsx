import React, { useState } from "react";
import { db } from "../../firebase";
import { ref, push, set } from "firebase/database";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AdicionarProdutos = () => {
  const [nomeProduto, setNomeProduto] = useState("");
  const [descricaoProduto, setDescricaoProduto] = useState("");
  const [valorProduto, setValorProduto] = useState("");
  const [categoriaProduto, setCategoriaProduto] = useState("");
  const [imagemProduto, setImagemProduto] = useState("");
  


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
      const produtosRef = push(ref(db, "produtos"));
      const novoId = produtosRef.key;
      await set(ref(db, `produtos/${novoId}`), {
        id: novoId,
        nome: nomeProduto,
        descricao: descricaoProduto,
        valor: valorProduto,
        categoria: categoriaProduto,
        imagem: imagemProduto,
      });

      alert("Produto adicionado com sucesso!");
      setNomeProduto("");
      setDescricaoProduto("");
      setValorProduto("");
      setCategoriaProduto("");
    } catch (error) {
      console.error("Erro ao adicionar produto: ", error);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center my-5">Adicionar Produto</h1>
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
              <ReactQuill
            value={descricaoProduto}
            onChange={(content, delta, source, editor) => {
              setDescricaoProduto(editor.getHTML());
            }}
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
                <option value="" disabled>
                  Selecione uma categoria
                </option>
                {categorias.map((categoria) => (
                  <option key={categoria.id} value={categoria.nome}>
                    {categoria.nome}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="imagem">
            <Form.Label>Imagem:</Form.Label>
            <Form.Control
              type="file"
              onChange={(event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                  setImagemProduto(reader.result);
                };
              }}
            />
            {imagemProduto && (
              <img src={imagemProduto} alt="Imagem do produto" style={{ maxWidth: "200px", marginTop: "10px" }} />
            )}
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
