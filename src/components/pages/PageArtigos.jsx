import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import { db } from "../../firebase";
import parse from "html-react-parser";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
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
    const canvas = document.createElement("canvas");
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = artigo.imagem;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      const base64Image = canvas.toDataURL("image/jpeg");
      const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${artigo.titulo}\n\n${conteudoFormatado}\n\n${base64Image}`)}`;
      window.open(url);
    };
  };
  

  const handleShareFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(artigo.titulo)}`;
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
        <h4>Compartilhar Via</h4>
        <a onClick={handleShareInstagram}><AiOutlineInstagram /></a>
        <a onClick={handleShareWhatsApp}><BsWhatsapp /></a>
        <a onClick={handleShareFacebook}><FaFacebookF /></a>
      </div>
      <a href="/">Voltar para o site</a>
      <a href="/artigos">Voltar para os artigos</a>
    </div>
  );
};

export default PageArtigos;
