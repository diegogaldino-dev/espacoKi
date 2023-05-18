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
    onValue(
      artigoRef,
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setArtigo(data);
          setConteudoFormatado(data.conteudo);
        } else {
          setErro("Nenhum artigo encontrado para o ID fornecido.");
        }
      },
      (error) => {
        setErro(`Ocorreu um erro ao buscar o artigo: ${error.message}`);
      }
    );
  }, [id]);

  const handleShareInstagram = () => {
    const url = `https://www.instagram.com/create/reel/?video=${encodeURIComponent(
      `${artigo.titulo}\n\n ${window.location.href}`
    )}`;
    window.open(url);
  };

  const handleShareWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      `${artigo.titulo}\n\n ${window.location.href}`
    )}`;
    window.open(url);
  };

  const handleShareFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      window.location.href
    )}&quote=${encodeURIComponent(artigo.titulo)}`;
    window.open(url);
  };

  if (erro) {
    return <div>{erro}</div>;
  }

  if (!artigo) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="container p-5" style={{fontFamily: 'Roboto Slab'}}>
      <div className="row justify-content-center align-items-center mb-5">
        <div className="col-lg-6">
          <img src={artigo.imagem} alt="" className="img-fluid rounded" />
        </div>
        <div className="col-lg-6">
          <h1 className="display-4">{artigo.titulo}</h1>
          <div className="mt-4 mb-4">{parse(conteudoFormatado)}</div>
          <div className="mt-3 d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Compartilhar Via</h5>
          </div>
          <div className="d-flex">
            <a
              className="btn btn-social-icon btn-instagram me-2"
              onClick={handleShareInstagram}
            >
              <AiOutlineInstagram />
            </a>
            <a
              className="btn btn-social-icon btn-whatsapp me-2"
              onClick={handleShareWhatsApp}
            >
              <BsWhatsapp />
            </a>
            <a
              className="btn btn-social-icon btn-facebook me-2"
              onClick={handleShareFacebook}
            >
              <FaFacebookF />
            </a>
          </div>
          {/* <div className="rounded p-3 bg-light">
            <div className="d-flex justify-content-center">
              <a href="/" className="btn btn-primary me-2">
                Voltar para o site
              </a>
              <a href="/artigos" className="btn btn-secondary">
                Voltar para os artigos
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PageArtigos;
