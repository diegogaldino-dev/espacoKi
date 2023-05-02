import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ref, onValue } from 'firebase/database';
import { db } from '../../firebase';

const PageArtigos = () => {
  const { id } = useParams();
  const [artigo, setArtigo] = useState(null);

  useEffect(() => {
    const artigoRef = ref(db, `artigos/${id}`);
    onValue(artigoRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setArtigo(data);
      }
    });
  }, [id]);

  if (!artigo) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>{artigo.titulo}</h1>
      <p>{artigo.conteudo}</p>
    </div> 
  );
};

export default PageArtigos;
