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
                alt="missão"
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
                alt="visão"
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
                alt="valores"
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
              description="A Ventosa Terapia é uma técnica que utiliza copos de vidro ou acrílico para criar sucção na pele, com o objetivo de melhorar a circulação sanguínea e aliviar tensões musculares. Pode ser utilizada em diversas partes do corpo."
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 my-4" data-aos="fade-up"
            data-aos-duration="3000">
            <Cards
              name="Reflexologia Podal"
              image={Reflexologia}
              description="A Reflexologia Podal é uma técnica que utiliza a pressão em pontos específicos dos pés para estimular diferentes partes do corpo. Acredita-se que essa prática possa ajudar a aliviar dores, reduzir o estresse e melhorar a circulação sanguínea."
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-12 my-4" data-aos="fade-up"
            data-aos-duration="3000">
            <Cards
              name="Massagem Modeladora"
              image={MassagemSueca}
              description="A Massagem Modeladora é uma técnica que utiliza movimentos intensos e rápidos para atuar na redução de medidas e celulite, além de melhorar a circulação sanguínea e ajudar na eliminação de toxinas."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
