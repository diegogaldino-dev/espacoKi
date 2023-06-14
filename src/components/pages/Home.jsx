import React, { useEffect, useState } from "react";
import Carousel from "../Carousel/CarouselHome";
import Cards from "./Cards/Cards";
import { Link } from 'react-router-dom';


import Card from "react-bootstrap/Card";

import { ref, onValue, remove } from "firebase/database";
import { db } from "../../firebase";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { Item, Text, Description } from "./style";

import missao from "../../img/missao.png";
import visao from "../../img/visao.png";
import valores from "../../img/valores.png";
// import SaboneteLiquido from "../../img/produtos/sabonete_liquido.jpeg";
import Hidratante from "../../img/produtos/hidratante.jpeg";
import Esfoliante from "../../img/produtos/esfoliante.jpeg";
// import GeleiaDeBanho from "../../img/produtos/geleia_de_banho.jpeg"
import Sache from "../../img/produtos/sache.jpeg";
import KitSabonetes from "../../img/produtos/kitsabonete.jpeg";

import Reflexologia from "../../img/terapia/reflexologia2.jpg";
import Ventosa from "../../img/terapia/ventosa.jpg";
import MassagemSueca from "../../img/terapia/MassagemSueca.jpg";
import { Button } from "react-bootstrap";

function Home() {

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 3000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const [produtos, setProdutos] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const produtosRef = ref(db, "produtos");
    onValue(
      produtosRef,
      (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const produtosList = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setProdutos(produtosList);
        }
      },
      (error) => {
        console.log(error);
      }
    );
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
                alt="Missão - é exibida uma ilustração que representa um alvo circular com cores predominantes em preto, azul e vermelho. No centro desse alvo, há um círculo vermelho, e dentro dele encontra-se uma flecha. A ilustração simboliza a ideia de ter uma meta ou objetivo (representada pelo alvo) e a busca por atingi-la (representada pela flecha). A combinação de cores utilizadas pode transmitir diferentes significados, como a força (vermelho), estabilidade (preto) e confiança (azul). A imagem ilustra visualmente o conceito de foco e determinação para alcançar um objetivo específico."
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
                alt="Visão - é apresentada uma ilustração que representa o conceito de visão. A ilustração é composta por uma engrenagem na cor azul, sobre a qual está posicionado um olho na cor preta. A engrenagem simboliza a ideia de mecanismo, funcionamento e movimento, enquanto o olho representa a visão, a capacidade de enxergar e ter clareza. Juntos, esses elementos representam a visão como a capacidade de ter uma perspectiva clara, estar atento aos detalhes e compreender como as coisas se encaixam e se movem no contexto geral. A combinação das cores azul e preto pode transmitir sensações de confiança, seriedade e assertividade. A ilustração visualiza o conceito de visão de forma simbólica e sugere a importância de ter uma visão clara e bem orientada para alcançar os objetivos."
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
                alt="Valores - é exibida uma ilustração que representa o conceito de valores. A ilustração mostra um diamante contornado em preto, com o interior preenchido por uma cor azul vibrante. Sobre o diamante, há brilhos amarelos, criando um efeito de destaque e luminosidade. O diamante é um símbolo de valor, qualidade e preciosidade, enquanto o contorno em preto pode representar a força e a solidez desses valores. A cor azul transmite confiança, serenidade e estabilidade, enquanto os brilhos amarelos podem simbolizar a luz, o destaque e a valorização desses princípios. A ilustração visualiza de forma simbólica os valores como algo precioso e brilhante, destacando a importância de mantê-los e promovê-los como elementos fundamentais em determinada situação ou contexto."
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
              alt="No primeiro card, há uma imagem em que são visíveis partes de duas pessoas. Uma delas está realizando o procedimento, enquanto a outra está deitada na mesa de massagem. A pessoa em pé está vestindo um uniforme na cor marsala e está realizando o procedimento de ventosa térmica no paciente que está deitado. O paciente está de bruços, com a cabeça virada para a esquerda. Além disso, é possível observar que o piso do chão é feito de madeira."
              description="A Ventosa Terapia é uma técnica que utiliza copos de vidro ou acrílico para criar sucção na pele, com o objetivo de melhorar a circulação sanguínea e aliviar tensões musculares. Pode ser utilizada em diversas partes do corpo."
            />
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-12 col-12 my-4"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <Cards
              name="Reflexologia Podal"
              image={Reflexologia}
              alt="
              No segundo card, há uma imagem em que são visíveis partes de duas pessoas. A pessoa que está realizando o procedimento está em evidência na imagem, enquanto a outra pessoa, sentada, aparece mais desfocada. A pessoa sentada é vista apenas do joelho para baixo, usando uma calça cinza, sentada em um sofá com almofadas azuis, recebendo o procedimento de Reflexologia Podal. A pessoa que realiza o procedimento na imagem está vestindo uma blusa xadrez marrom com detalhes quadriculados em azul. Seu cabelo está preso e ela está usando brincos. Além disso, é possível ver uma toalha branca sendo usada para secar os pés, e a cor do piso do chão é cinza."
              description="A Reflexologia Podal é uma técnica que utiliza a pressão em pontos específicos dos pés para estimular diferentes partes do corpo. Acredita-se que essa prática possa ajudar a aliviar dores, reduzir o estresse e melhorar a circulação sanguínea."
            />
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-12 col-12 my-4"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <Cards
              name="Massagem Modeladora"
              image={MassagemSueca}
              alt="No terceiro card, é exibida uma imagem em que são visíveis partes de duas pessoas. Uma delas é uma mulher que está recebendo a massagem. Ela está deitada em uma mesa de massagem na cor azul e branca, usando uma toalha listrada preta e branca. Um travesseiro azul marinho também é visível. A mulher está de olhos fechados, indicando relaxamento. A outra pessoa, que realiza o procedimento, tem apenas parte das mãos em destaque, que estão posicionadas sob a nuca da mulher que recebe a massagem."
              description="A Massagem Modeladora é uma técnica que utiliza movimentos intensos e rápidos para atuar na redução de medidas e celulite, além de melhorar a circulação sanguínea e ajudar na eliminação de toxinas."
            />
          </div>
        </div>
      </div>

      <div className="container mb-5">
      <h2 className="mb-3">Conheça nossos produtos!</h2>
      <Slider {...sliderSettings}>
        <div>
          <Card>
            <Card.Img src={Esfoliante} />
            <Card.Body>
              <Card.Title>Esfoliante</Card.Title>
              <Link to="/loja">
                <Button
                  variant="primary"
                  style={{
                    backgroundColor: "#608263",
                    color: "#fff",
                    border: "none",
                  }}
                >
                  Confira
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card>
            <Card.Img src={Hidratante} />
            <Card.Body>
              <Card.Title>Hidratante</Card.Title>
              <Link to="/loja">
                <Button
                  variant="primary"
                  style={{
                    backgroundColor: "#608263",
                    color: "#fff",
                    border: "none",
                  }}
                >
                  Confira
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card>
            <Card.Img src={Sache} />
            <Card.Body>
              <Card.Title>Sachê com Refil</Card.Title>
              <Link to="/loja">
                <Button
                  variant="primary"
                  style={{
                    backgroundColor: "#608263",
                    color: "#fff",
                    border: "none",
                  }}
                >
                  Confira
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card>
            <Card.Img src={KitSabonetes} />
            <Card.Body>
              <Card.Title>Kit de Sabonetes</Card.Title>
              <Link to="/loja">
                <Button
                  variant="primary"
                  style={{
                    backgroundColor: "#608263",
                    color: "#fff",
                    border: "none",
                  }}
                >
                  Confira
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </Slider>
    </div>
    </div>
  );
}

export default Home;
