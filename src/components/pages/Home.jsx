import React, { useEffect } from "react";
import Carousel from "../Carousel/CarouselHome";
import Cards from "./Cards/Cards";

import AOS from "aos";
import "aos/dist/aos.css";

import {
  // MissionVisionValues,
  Item,
  Text,
  Description,
  // CardsPrincipais,
  // TitleTiposDeServicos,
} from "./style";

import missao from "../../img/missao.png";
import visao from "../../img/visao.png";
import valores from "../../img/valores.png";

import Reflexologia from "../../img/terapia/reflexologia2.jpg";
import Ventosa from "../../img/terapia/ventosa.jpg";
import MassagemSueca from "../../img/terapia/MassagemSueca.jpg";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div>
        <Carousel />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <Item>
              <img
                src={missao}
                alt="missão - apresenta uma ilustração de um alvo circular na cor preta, azul e vermelho e uma flecha dentro de um circulo vermlho"
                data-aos="zoom-in"
                data-aos-duration="800"
              />
              <Text>Missão</Text>
              <Description className="text-md-start">
                Proporcionar bem-estar e qualidade de vida por meio da massagem
                terapêutica, contribuindo para o equilíbrio físico, mental e
                emocional dos nossos clientes.
              </Description>
            </Item>
          </div>
          <div className="col-md-4 col-sm-12">
            <Item>
              <img
                src={visao}
                alt="visão - apresenta uma ilustração de engrenagem na cor azul por cima um olho na cor preta"
                data-aos="zoom-in-up"
                data-aos-duration="800"
              />
              <Text>Visão</Text>
              <Description className="text-md-start">
                Ser referência em massagem terapêutica, reconhecida pela
                excelência no atendimento e na capacitação dos nossos
                profissionais.
              </Description>
            </Item>
          </div>
          <div className="col-md-4 col-sm-12">
            <Item>
              <img
                src={valores}
                alt="valores - apresenta uma ilustração de um diamante contornado em preto por dentro azul com brilhos amarelos em cima"
                data-aos="zoom-in-left"
                data-aos-duration="800"
              />
              <Text>Valores</Text>
              <Description className="text-md-start">
                Ética e transparência nas relações, respeito à diversidade e
                inclusão, compromisso com a qualidade e atualização constante,
                responsabilidade socioambiental.
              </Description>
            </Item>
          </div>
        </div>
      </div>

      <div
        className="container mx-auto my-5"
        style={{ fontFamily: "Roboto Slab" }}
      >
        <div className="row">
          <div className="col-12">
            <h1
              className="text-center"
              data-aos="zoom-out-up"
              data-aos-duration="800"
            >
              Tipos de Terapias
            </h1>
          </div>
        </div>
        <div className="row">
          <div
            className="col-lg-4 col-md-6 col-sm-12 col-12 my-4"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <Cards
              name="Ventosa Terapia"
              image={Ventosa}
              alt="O primeiro card apresenta uma imagem na qual aparece partes de duas pessoas uma delas realiza o procedimento e a outra deitada na mesa de massagem, 
              a pessoa que esta em pé usa um uniforme na cor marsala realiza o prodimento de ventosa teparia no paciente que esta deitado o paciente enta de brusos com 
              a cabeça virada para esquerda. O piso do chão e de madeira"
              description="A Ventosa Terapia é uma técnica que utiliza copos de vidro ou acrílico para criar sucção na pele, com o objetivo de melhorar a circulação sanguínea e aliviar tensões musculares. Pode ser utilizada em diversas partes do corpo."
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 my-4" data-aos="fade-up"
            data-aos-duration="3000">
            <Cards
              name="Reflexologia Podal"
              image={Reflexologia}
              alt="No segundo card apresenta uma imagem na qual aparece partes de duas pessoas uma delas realiza o procedimento que esta em mais evidencia na imagem 
              e a outra com a imagem mais desfocada sentada, somente apacere do joelho para baixo usando uma calça cinza em um sofa com almofadas azuis recebenco o 
              procedimentos de Reflexologia Podal a outra pessoa que realiza o procedimento na imagem usa uma blusa xadres na cor marrom com detalhes quadriculados em 
              azul esta com cabelo preso e usa brincos um uma olha branca para secar os pés a cor do piso do chão e cinza."
              description="A Reflexologia Podal é uma técnica que utiliza a pressão em pontos específicos dos pés para estimular diferentes partes do corpo. Acredita-se que essa prática possa ajudar a aliviar dores, reduzir o estresse e melhorar a circulação sanguínea."
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 my-4" data-aos="fade-up"
            data-aos-duration="3000">
            <Cards
              name="Massagem Modeladora"
              image={MassagemSueca}
              alt="No terceiro card apresenta uma imagem na qual aparece partes de duas pessoas, uma delas e uma mulher que recebe a massagem esta 
              usando uma toalha listrada preta e branca deitada em uma messa de massagem na cor azul e branca e um travesseiro azul marinho aparece 
              outros e cabeça ela esta de olho fechado. Aparecendo apenas parte das maos da outra pessoa que realiza o procedimento, se encontra as maos em baixo da nuca."
              description="A Massagem Modeladora é uma técnica que utiliza movimentos intensos e rápidos para atuar na redução de medidas e celulite, além de melhorar a circulação sanguínea e ajudar na eliminação de toxinas."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
