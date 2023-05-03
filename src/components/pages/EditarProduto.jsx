import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ref, onValue, set } from 'firebase/database';
import { db } from '../../firebase';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const EditarProduto = ({ history }) => {
  const { id } = useParams();
  const [nomeProduto, setNomeProduto] = useState("");
  const [descricaoProduto, setDescricaoProduto] = useState("");
  const [valorProduto, setValorProduto] = useState("");
  const [categoriaProduto, setCategoriaProduto] = useState("");
  const [imagemProduto, setImagemProduto] = useState("");


  useEffect(() => {
    const produtosRef = ref(db, `produtos/${id}`);
    onValue(produtosRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {  
        setNomeProduto(data.nome);
        setDescricaoProduto(data.descricao);
        setValorProduto(data.valor);
        setCategoriaProduto(data.categoria);
      }
    });
  }, [id]);

  const handleNomeChange = (event) => {
    setNomeProduto(event.target.value);
  };

  const handleDescricaoChange = (event) => {
    setDescricaoProduto(event.target.value);
  };

  const handleValorChange = (event) => {
    setValorProduto(event.target.value);
  };

  const handleCategoriaChange = (event) => {
    setCategoriaProduto(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    set(ref(db, `produtos/${id}`), {
      nome: nomeProduto,
      descricao: descricaoProduto,
      valor: valorProduto,
      categoria: categoriaProduto,
      imagem: imagemProduto,
    })
      .then(() => {
        alert('Produto atualizado com sucesso!');
        history.goBack(); // volta para a página anterior
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (!id) {
    return <div>Carregando...</div>;
  }

  return (
    <div className='container p-4'>
      <h1>Editar Produto</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Nome:</Form.Label>
          <Form.Control
            type="text"
            value={nomeProduto}
            onChange={handleNomeChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Descrição:</Form.Label>
          <Form.Control
            as="textarea"
            rows="6"
            value={descricaoProduto}
            onChange={handleDescricaoChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Valor:</Form.Label>
          <Form.Control
            type="text"
            value={valorProduto}
            onChange={handleValorChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Categoria:</Form.Label>
          <Form.Control
            type="text"
            value={categoriaProduto}
            onChange={handleCategoriaChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Imagem:</Form.Label>
          <br />
          {imagemProduto && (
            <img src={imagemProduto} alt="Imagem atual" width="200" />
          )}
          <br />
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
          <br />          
        </Form.Group>


        <Button variant="primary" type="submit">
          Atualizar
        </Button>

       
      </Form>
    </div>
  );
};

export default EditarProduto;
