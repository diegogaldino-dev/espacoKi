import React, { useState } from "react";
import { Nav, Container, Card, Button, Carousel } from "react-bootstrap";
import { CustomNavLink } from "./style";

// imports de imagens
// relaxante
import R1 from '../../img/servicos_img/massagem_relaxante/1.jpg'
import R2 from '../../img/servicos_img/massagem_relaxante/2.jpg'
import R3 from '../../img/servicos_img/massagem_relaxante/3.jpg'
// podal
import P1 from '../../img/servicos_img/reflexologiaPodal/1.jpg'
import P2 from '../../img/servicos_img/reflexologiaPodal/2.jpg'
import P3 from '../../img/servicos_img/reflexologiaPodal/3.jpg'
// kanrenbui
import K1 from '../../img/servicos_img/kanrenbui/1.jpeg'
import K2 from '../../img/servicos_img/kanrenbui/2.jpeg'
import K3 from '../../img/servicos_img/kanrenbui/3.jpeg'
// Modeladora
import M1 from '../../img/servicos_img/massagemModeladora/1.jpg'
import M2 from '../../img/servicos_img/massagemModeladora/2.jpg'
import M3 from '../../img/servicos_img/massagemModeladora/3.jpg'
// Drenagem
import D1 from '../../img/servicos_img/drenagem/1.jpg'
import D2 from '../../img/servicos_img/drenagem/2.jpg'
import D3 from '../../img/servicos_img/drenagem/3.jpg'
//Ventosa Terapia
import V1 from '../../img/servicos_img/ventosaTerapia/1.jpg'
import V2 from '../../img/servicos_img/ventosaTerapia/2.jpg'
import V3 from '../../img/servicos_img/ventosaTerapia/3.jpg'
//Laserterapia
import L1 from '../../img/servicos_img/laserterapia/1.jpg'
import L2 from '../../img/servicos_img/laserterapia/2.jpg'
import L3 from '../../img/servicos_img/laserterapia/3.jpg'

//Reiki
import A1 from '../../img/servicos_img/reiki/1.jpg'
import A2 from '../../img/servicos_img/reiki/2.jpg'
import A3 from '../../img/servicos_img/reiki/3.jpg'

import { FaWhatsapp } from 'react-icons/fa';




const Servicos = () => {
  const [selectedOption, setSelectedOption] = useState("relaxante");
  const whatsappNumber = '5511941265438';

  const handleAgendar = () => {
    const message = 'Olá, gostaria de agendar um horário.';
  
    window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`);
  };

  const servicos = {
    relaxante: {
      title: "Massagem Relaxante",
      description:
        "A massagem relaxante é uma técnica que visa reduzir a tensão e o estresse, proporcionando relaxamento e bem-estar. Ela é realizada com movimentos suaves e ritmados, promovendo o alívio das dores musculares e melhorando a circulação sanguínea.",
      image1: R1,
      image2: R2,
      image3: R3,

    },
    reflexologiaPodal: {
      title: "Reflexologia Podal",
      description:
        "A Reflexologia Podal é uma técnica que utiliza a pressão em pontos específicos dos pés para estimular diferentes partes do corpo. Acredita-se que essa prática possa ajudar a aliviar dores, reduzir o estresse e melhorar a circulação sanguínea.",
      image1: P1,
      image2: P2,
      image3: P3,
    },
    kanrenbui: {
      title: "Kanrenbui",
      description:
        "A Kanrenbui é uma técnica de massagem japonesa que trabalha a musculatura do corpo todo, com foco em pontos específicos que correspondem a órgãos e sistemas do corpo. É uma técnica bastante relaxante e que ajuda a aliviar tensões musculares e estresse.",
      image1: K1,
      image2: K2,
      image3: K3,

    },
    massagemModeladora: {
      title: "Massagem Modeladora",
      description:
        "A Massagem Modeladora é uma técnica que utiliza movimentos intensos e rápidos para atuar na redução de medidas e celulite, além de melhorar a circulação sanguínea e ajudar na eliminação de toxinas.",
      image1: M1,
      image2: M2,
      image3: M3,

    },
    drenagem: {
      title: "Drenagem Linfática",
      description:
        "A drenagem linfática é uma técnica que consiste em realizar movimentos suaves e rítmicos, com o objetivo de estimular a circulação linfática e promover a eliminação de toxinas do organismo. Ela é indicada para reduzir o inchaço, combater a celulite e melhorar a circulação sanguínea.",
      image1: D1,
      image2: D2,
      image3: D3,

    },
    ventosaTerapia: {
      title: "Ventosa Terapia",
      description:
        "A Ventosa Terapia é uma técnica que utiliza copos de vidro ou acrílico para criar sucção na pele, com o objetivo de melhorar a circulação sanguínea e aliviar tensões musculares. Pode ser utilizada em diversas partes do corpo.",
      image1: V1,
      image2: V2,
      image3: V3,

    },
    laserterapia: {
      title: "Laserterapia",
      description:
        "A Laserterapia é uma técnica que utiliza luz laser para estimular a produção de colágeno e elastina na pele, além de ajudar no tratamento de inflamações, dores e lesões.",
      image1: L1,
      image2: L2,
      image3: L3,

    },
    reiki: {
      title: "Reiki",
      description:
        "O Reiki é uma técnica de origem japonesa que utiliza a imposição de mãos para transmitir energia vital ao corpo, com o objetivo de promover equilíbrio e bem-estar. Acredita-se que essa prática possa ajudar a aliviar dores, reduzir o estresse e melhorar a qualidade do sono, entre outros benefícios.",
      image1: A1,
      image2: A2,
      image3: A3,

    },
  };

  const handleSelect = (eventKey) => {
    setSelectedOption(eventKey);
  };

  const renderServicoCard = (servico) => {
    return (
      <div
        className="d-flex justify-content-center"
        style={{ marginBottom: "65px" }}
      >
        <Card style={{ width: "60rem" }}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={servico.image1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={servico.image2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={servico.image3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <Card.Body>
            <Card.Title style={{ fontFamily: 'Roboto Slab', fontWeight:"bold" }}>{servico.title}</Card.Title>
            <Card.Text style={{ fontFamily: 'Roboto Slab',  }}>{servico.description}</Card.Text>
            <Button style={{ fontFamily: 'Roboto Slab', fontWeight:"bold" }} onClick={handleAgendar} variant="success">Agendar <FaWhatsapp className="ms-2" /></Button>
          </Card.Body>
        </Card>
      </div>
    );
  };

  return (
    <Container>
      <Nav variant="tabs" defaultActiveKey="relaxante" onSelect={handleSelect}>
        <Nav.Item>
          <CustomNavLink eventKey="relaxante">Massagem Relaxante</CustomNavLink>
        </Nav.Item>
        <Nav.Item>
          <CustomNavLink eventKey="reflexologiaPodal">
            Reflexologia Podal
          </CustomNavLink>
        </Nav.Item>
        <Nav.Item>
          <CustomNavLink eventKey="kanrenbui">Kanrenbuí</CustomNavLink>
        </Nav.Item>
        <Nav.Item>
          <CustomNavLink eventKey="massagemModeladora">
            Massagem Modeladora
          </CustomNavLink>
        </Nav.Item>
        <Nav.Item>
          <CustomNavLink eventKey="drenagem">Drenagem Linfática</CustomNavLink>
        </Nav.Item>
        <Nav.Item>
          <CustomNavLink eventKey="ventosaTerapia">
            Ventosa Terapia
          </CustomNavLink>
        </Nav.Item>
        <Nav.Item>
          <CustomNavLink eventKey="laserterapia">Laserterapia</CustomNavLink>
        </Nav.Item>
        <Nav.Item>
          <CustomNavLink eventKey="reiki">Reiki</CustomNavLink>
        </Nav.Item>
      </Nav>

      <div className="mt-4">{renderServicoCard(servicos[selectedOption])}</div>
    </Container>
  );
};

export default Servicos;
