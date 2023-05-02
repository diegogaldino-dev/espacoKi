import React, { useState } from 'react';
import { ref, push, set } from 'firebase/database';
// import { storage } from '../../firebase';
// import { getDownloadURL, ref as storageRef } from 'firebase/storage';
import { db } from '../../firebase';

const AdicionarArtigos = () => {
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const artigoRef = push(ref(db, 'artigos'));
      const novoId = artigoRef.key;
      await set(ref(db, `artigos/${novoId}`), {
        id: novoId,
        titulo,
        conteudo,        
      });

      alert('Artigo adicionado com sucesso!');
      setTitulo('');
      setConteudo('');      
    } catch (error) {
      console.error('Erro ao adicionar artigo: ', error);
    }
  };

  return (
    <div className="container mt-4">
      <h1>Adicionar Artigos</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">Título</label>
          <input type="text" className="form-control" id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="conteudo" className="form-label">Conteúdo</label>
          <textarea className="form-control" id="conteudo" rows="10" value={conteudo} onChange={(e) => setConteudo(e.target.value)}></textarea>
        </div>        
        <div className="mb-3">
          <label htmlFor="imagem" className="form-label">Imagem</label>
        </div>
        <button type="submit" className="btn btn-primary">Adicionar</button>
      </form>
    </div>
  );
};

export default AdicionarArtigos;
