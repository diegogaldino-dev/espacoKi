import React from "react";
import {
  Container,
  ImageArvore,
  TextContainer,
  TextSobre,
  ImageContainer,
  Image,
  ParagrafoDoSobre
} from "./style";
import Imagem from "../../img/terapia/imagem_do_sobre.jpg";
import Bonsai from "../../img/bonsai.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Sobre = () => {
  return (
    <div className="container">
      <Container className="row justify-content-center">
    <TextContainer className="col-lg-6 col-md-12 col-sm-12 text-center">
      <div className="d-flex justify-content-center">
        <ImageArvore src={Bonsai} alt="" className="img-fluid my-4" />
      </div>
      <div className="my-5">
        <TextSobre>
          <ParagrafoDoSobre>
          Seja bem-vindo(a) à nossa clínica de massagem! Aqui, valorizamos o
          bem-estar e o equilíbrio do corpo e da mente, oferecendo uma
          variedade de serviços de massagem para ajudar a aliviar o
          estresse, a tensão e a dor muscular. Nossos profissionais
          altamente capacitados estão sempre prontos para proporcionar uma
          experiência de relaxamento e renovação. Além disso, trabalhamos
          com produtos naturais e técnicas terapêuticas comprovadas para
          garantir que você saia daqui sentindo-se melhor do que nunca. Se
          você procura uma clínica de massagem confiável e com um
          atendimento personalizado, venha nos visitar e desfrute de uma
          sessão de massagem que irá revigorar o seu corpo e a sua mente.
          </ParagrafoDoSobre>
        </TextSobre>
      </div>
    </TextContainer>
        <ImageContainer className="col-lg-6 col-md-12 col-sm-12 d-none d-md-block">
          <Image src={Imagem} alt="imagem_do_sobre" />
        </ImageContainer>
      </Container>
    </div>
  );
};

export default Sobre;
