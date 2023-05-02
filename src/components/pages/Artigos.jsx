import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ref, onValue } from 'firebase/database';
import { db } from '../../firebase';

const Artigos = () => {
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

  return (
    <div className="bg-light p-5">
      <div className="container">
        <h1 className="mb-4">Artigos</h1>
        <div className="row">
          {artigos.map((artigo) => (
            <div key={artigo.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{artigo.titulo}</h5>
                  <p className="card-text">{artigo.conteudo.substring(0, 50)}...</p>
                  <Link to={`/PageArtigos/${artigo.id}`} className="btn btn-primary">Ler mais</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artigos;
