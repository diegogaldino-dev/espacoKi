import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ref, onValue } from 'firebase/database';
import { db } from '../../firebase';
import { Card } from 'react-bootstrap';
import parse from "html-react-parser";
import "react-quill/dist/quill.snow.css";

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
            <div key={artigo.id} className="col-sm-6 col-md-4 mb-4">
              <Card className="h-100" style={{ height: "400px" }}>
                <Card.Img className="img-fluid" variant="top" src={artigo.imagem} alt={artigo.titulo} style={{ objectFit: "cover", height: "200px" }} />

                <Card.Body>
                  <Card.Title>{artigo.titulo}</Card.Title>
                  <Card.Text>{parse(`<span>${artigo.conteudo.substring(0, 50)}...</span>`)}</Card.Text>
                  <Link to={`/PageArtigos/${artigo.id}`} className="btn btn-primary">Ler mais</Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artigos;
