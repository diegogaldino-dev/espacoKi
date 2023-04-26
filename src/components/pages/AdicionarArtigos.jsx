import React, { useState } from 'react';

const AdicionarArtigos = () => {
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [imagem, setImagem] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // lógica para enviar dados para o backend
  }

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
          <input type="file" className="form-control" id="imagem" accept="image/*" onChange={(e) => setImagem(e.target.files[0])} />
        </div>
        <button type="submit" className="btn btn-primary">Adicionar</button>
      </form>
    </div>
  );
};

export default AdicionarArtigos;
