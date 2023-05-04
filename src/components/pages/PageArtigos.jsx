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
  const [erro, setErro] = useState("");

  useEffect(() => {
    const artigoRef = ref(db, `artigos/${id}`);
    onValue(artigoRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setArtigo(data);
        setConteudoFormatado(data.conteudo);
      } else {
        setErro("Nenhum artigo encontrado para o ID fornecido.");
      }
    }, (error) => {
      setErro(`Ocorreu um erro ao buscar o artigo: ${error.message}`);
    });
  }, [id]);

  const handleShareInstagram = () => {
    const url = `https://www.instagram.com/create/reel/?video=${encodeURIComponent(artigo.imagem)}&caption=${encodeURIComponent(artigo.titulo)}`;
    window.open(url);
  }

  const handleShareWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${artigo.titulo}\n\n${conteudoFormatado}\n\n${artigo.imagem}`)}`;
    window.open(url);
  }

  if (erro) {
    return <div>{erro}</div>;
  }

  if (!artigo) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 col-lg-8 offset-lg-2">
          <img src={artigo.imagem} alt="" className="img-fluid" style={{maxWidth: "50%"}} />
          <h1 className="mt-4">{artigo.titulo}</h1>
          <div className="mt-4 mb-4">{parse(conteudoFormatado)}</div>
        </div>
      </div>
      <div className="mt-3">
        <button className="btn btn-primary me-3" onClick={handleShareInstagram}>Compartilhar via Instagram</button>
        <button className="btn btn-success" onClick={handleShareWhatsApp}>Compartilhar via WhatsApp</button>
      </div>
      <a href="/">Voltar para o site</a>
      <a href="/artigos">Voltar para os artigos</a>
    </div>
  );
};

export default PageArtigos;
