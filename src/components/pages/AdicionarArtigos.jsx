import React, { useState } from 'react';
import { ref, push, set } from 'firebase/database';
import { db } from '../../firebase';
import { Form } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const AdicionarArtigos = () => {
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [imagemArtigo, setImagemArtigo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const artigoRef = push(ref(db, 'artigos'));
      const novoId = artigoRef.key;

      await set(ref(db, `artigos/${novoId}`), {
        id: novoId,
        titulo,
        conteudo,
        imagem: imagemArtigo,
      });

      alert('Artigo adicionado com sucesso!');
      setTitulo('');
      setConteudo('');
      setImagemArtigo('');
    } catch (error) {
      console.error('Erro ao adicionar artigo: ', error);
    }
  };

  return (
    <div className="container mt-4">
      <h1>Adicionar Artigos</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">
            Título
          </label>
          <input
            type="text"
            className="form-control"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="conteudo" className="form-label">
            Conteúdo
          </label>
          <ReactQuill
            value={conteudo}
            onChange={(content, delta, source, editor) => {
              setConteudo(editor.getHTML());
            }}
          />
        </div>

        <Form.Group className="mb-3" controlId="imagem">
          <Form.Label>Imagem:</Form.Label>
          <Form.Control
            type="file"
            onChange={(event) => {
              const file = event.target.files[0];
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = () => {
                setImagemArtigo(reader.result);
              };
            }}
          />
          {imagemArtigo && (
            <img
              src={imagemArtigo}
              alt="Imagem do artigo"
              style={{ maxWidth: '200px', marginTop: '10px' }}
            />
          )}
        </Form.Group>
        <button type="submit" className="btn btn-primary">
          Adicionar
        </button>
      </form>
    </div>
  );
};

export default AdicionarArtigos;
