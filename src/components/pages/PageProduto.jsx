import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Button, Carousel } from "react-bootstrap";
import { ref, onValue } from "firebase/database";
import { db } from "../../firebase";
import parse from "html-react-parser";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import "react-quill/dist/quill.snow.css";

const PageProduto = () => {
  const { id } = useParams();
  const [produtos, setProdutos] = useState([]);
  const [produtoFormatado, setProdutoFormatado] = useState("");
  const [erro, setErro] = useState("");

  const numeroWhatsapp = "5511941265438";

  useEffect(() => {
    const produtoRef = ref(db, `produtos/${id}`);
    onValue(
      produtoRef,
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setProdutos(data);
          setProdutoFormatado(data.descricao);
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
      `${produtos.nome}\n\n\nR$${produtos.valor}\n${window.location.href}`
    )}`;
    window.open(url);
  };

  const handleShareWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      `${produtos.nome}\n\n\nR$${produtos.valor}${window.location.href}`
    )}`;
    window.open(url);
  };

  const handleShareFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      window.location.href
    )}&quote=${encodeURIComponent(produtos.nome)}`;
    window.open(url);
  };

  const handleWhatsappClick = (produtos) => {
    const mensagem = `Olá, gostaria de comprar o produto "${produtos.nome}" - Descrição: "${produtos.descricao}" - Valor: R$${produtos.valor}`;
    window.open(
      `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagem)}`
    );
  };

  return (
    <div className="container p-5">
      <div className="row justify-content-center align-items-center mb-5">
        <div className="col-lg-6 mb-4 mb-lg-0">
        <Carousel>
            <Carousel.Item>
              <img src={produtos.imagem} alt="" className="img-fluid rounded" style={{ height: "300px", width: "500px" }}/>
            </Carousel.Item>
            <Carousel.Item>
              <img src={produtos.imagem2} alt="" className="img-fluid rounded" style={{ height: "300px", width: "500px" }}/>
            </Carousel.Item>
            <Carousel.Item>
              <img src={produtos.imagem2} alt="" className="img-fluid rounded" style={{ height: "300px", width: "500px" }}/>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-lg-6">
          <h1 className="display-4">{produtos.nome}</h1>
          <div
            className="mt-4 mb-4 col-12 col-lg-6"
            style={{ wordBreak: "break-all" }}
          >
            {parse(produtoFormatado)}
          </div>

          <div className="mt-4 mb-4">
            R$ {produtos.valor && parseFloat(produtos.valor).toFixed(2)}
          </div>
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
          <div className="rounded p-3 bg-light d-flex align-items-center flex-column flex-md-row">
            <Button
              className="me-md-2 mb-2 mb-md-0"
              variant="success"
              onClick={handleWhatsappClick}
            >
              Comprar
              <BsWhatsapp />
            </Button>
            <div class="d-flex justify-content-center mt-2 mt-md-0">
              <a href="/" className="btn btn-primary me-2">
                Voltar para o site
              </a>
              <a href="/Catalogo" className="btn btn-secondary">
                Voltar aos Catálogos
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageProduto;
