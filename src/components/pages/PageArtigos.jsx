import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import { db } from "../../firebase";
import parse from "html-react-parser";
import "react-quill/dist/quill.snow.css";

const PageArtigos = () => {
  const { id } = useParams();
  const [artigo, setArtigo] = useState(null);
  const [conteudoFormatado, setConteudoFormatado] = useState("");

  useEffect(() => {
    const artigoRef = ref(db, `artigos/${id}`);
    onValue(artigoRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setArtigo(data);
        setConteudoFormatado(data.conteudo);
      }
    });
  }, [id]);

  if (!artigo) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 col-lg-8 offset-lg-2">
          <img src={artigo.imagem} alt="" className="img-fluid" />
          <h1 className="mt-4">{artigo.titulo}</h1>
          <div className="mt-4 mb-4">{parse(conteudoFormatado)}</div>
        </div>
      </div>
    </div>
  );
};

export default PageArtigos;
