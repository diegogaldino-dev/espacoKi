import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ref, onValue, remove } from 'firebase/database';
import { db } from '../../firebase';

const Painel = () => {
  const [artigos, setArtigos] = useState([]);

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

  const handleDelete = (id) => {
    if (window.confirm('Deseja realmente excluir este artigo?')) {
      const artigoRef = ref(db, `artigos/${id}`);
      remove(artigoRef);
    }
  };

  return (
    <div className="bg-light p-5">
      <div className="container">
        <h1 className="mb-4">Artigos</h1>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {artigos.map((artigo) => (
            <div key={artigo.id} className="col">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h5 className="card-title">{artigo.titulo}</h5>
                  <p className="card-text">{artigo.conteudo.substring(0, 50)}...</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Link to={`/PageArtigos/${artigo.id}`} className="btn btn-primary">
                        Ler mais
                      </Link>
                      <Link to={`/EditarArtigo/${artigo.id}`} className="btn btn-secondary">
                        Editar
                      </Link>
                    </div>
                    <Button variant="danger" onClick={() => handleDelete(artigo.id)}>
                      Excluir
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container p-4">
        <h1>Produto</h1>
      </div>
    </div>
  );
};

export default Painel;
