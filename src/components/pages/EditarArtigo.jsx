import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ref, onValue, set } from 'firebase/database';
import { db } from '../../firebase';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const EditarArtigo = ({ history }) => {
  const { id } = useParams();
  const [artigo, setArtigo] = useState(null);
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [imagemArtigo, setImagemArtigo] = useState("");


  useEffect(() => {
    const artigoRef = ref(db, `artigos/${id}`);
    onValue(artigoRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setArtigo(data);
        setTitulo(data.titulo);
        setConteudo(data.conteudo);
      }
    });
  }, [id]);

  const handleTituloChange = (event) => {
    setTitulo(event.target.value);
  };

  const handleConteudoChange = (event) => {
    setConteudo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    set(ref(db, `artigos/${id}`), {
      titulo,
      conteudo,
      imagem: imagemArtigo
    })
      .then(() => {
        alert('Artigo atualizado com sucesso!');
        history.goBack(); // volta para a página anterior
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (!artigo) {
    return <div>Carregando...</div>;
  }

  return (
    <div className='container p-4'>
    <h1>Editar Artigo</h1>
    <div className="row">
      <div className="col-md-6">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Título:</Form.Label>
            <Form.Control
              type="text"
              value={titulo}
              onChange={handleTituloChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Conteúdo:</Form.Label>
            <Form.Control
              as="textarea"
              rows="6"
              value={conteudo}
              onChange={handleConteudoChange}
            />
          </Form.Group>

          <Button className='py' variant="primary" type="submit">
            Atualizar
          </Button>
        </Form>
      </div>
    </div>
  </div>
  );
};

export default EditarArtigo;
