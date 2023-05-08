import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ref, onValue } from 'firebase/database';
import { db } from '../../firebase';
import { Card } from 'react-bootstrap';
import parse from 'html-react-parser';
import 'react-quill/dist/quill.snow.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Artigos = () => {
  const [artigos, setArtigos] = useState([]);
  useEffect(() => {
    AOS.init();
  }, []);

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
    <div className="bg-light p-5"  style={{fontFamily: 'Roboto Slab'}}>
      <div className="container">
        <h1 className="mb-4">Artigos</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {artigos.map((artigo) => (
            <div key={artigo.id} className="col">
              <Card className="h-100 border-0 rounded-3 shadow-sm" data-aos="flip-left" data-aos-duration="800">
                <Card.Img
                  className="rounded-3"
                  variant="top"
                  src={artigo.imagem}
                  alt={artigo.titulo}
                  style={{ objectFit: 'cover', height: '200px' }}
                />

                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title className="fw-bold">{artigo.titulo}</Card.Title>
                    <Card.Text>{parse(`<span>${artigo.conteudo.substring(0, 60)}...</span>`)}</Card.Text>
                  </div>
                  <Link to={`/PageArtigos/${artigo.id}`} className="btn btn" style={{backgroundColor: '#608263', color:'#FFF9F0'}}>
                    Ler mais
                  </Link>
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
