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
      descricaoimg1:"A primeira slide mostra duas pessoas uma delas recebendo o procedimento deitada na maca de massagem de olho fechado e com o corpo coberto com um toalha branca e a pessoa que esta realizando o procedimento esta com uma camisa preta e uma calça marrom claro.",
      descricaoimg2:"No segundo slide mostra duas pessoas uma delas que esta recebendo o procedimento esta deitada de brusos com os branços acima da cabela a segunda pesseoa esta realizando o procedimento esta massagenado as costa da primeira pessoa cita.",
      descricaoimg3:" No terceiro slide mostra partes de duas pessoas a que esta recebendo o procedimento esta aparecendo somente as perna a pessoa que esta com uma olha do joelho pra cima branca aparentemente esta de bruso e a que esta realizando o procedimento esta de camiseta branca e esta massageando a parte da paturrilha da perna direita",


    },
    reflexologiaPodal: {
      title: "Reflexologia Podal",
      description:
        "A Reflexologia Podal é uma técnica que utiliza a pressão em pontos específicos dos pés para estimular diferentes partes do corpo. Acredita-se que essa prática possa ajudar a aliviar dores, reduzir o estresse e melhorar a circulação sanguínea.",
      image1: P1,
      image2: P2,
      image3: P3,
      descricaoimg1:"A primeira imagem do slide apresenta parte de duas pessoas a que esta recebendo o procedimento estão apenas aparecendo os pes e a pessoa que esta realizando o procedimento estão aparecendo as maos da pessoa fazendo o procedimento na sola do pe direito.",
      descricaoimg2:"No segundo slide apresenta parte de duas pessoas que na que esta realizando o procedimento com o foco nas mãos esta massageando o pe da pessoa que esta recebendo, a que esta recebendo o procedimento mostra em foco nos pes esta recebendo a o procedimento nos pes",
      descricaoimg3:"No terceiro slide apresenta parte de duas pessoas a que esta recebendo o procedimento mostra os pés que estão em cima de uma toalha branca e esta recebendo o procedimento, a pessoa que esta aplicando o procedimento esta fazendo o procedimento nos dois pes da pessoa e ela esta com as unhas pintadas de uma cor cinzentada",
    },
    kanrenbui: {
      title: "Kanrenbui",
      description:
        "A Kanrenbui é uma técnica de massagem japonesa que trabalha a musculatura do corpo todo, com foco em pontos específicos que correspondem a órgãos e sistemas do corpo. É uma técnica bastante relaxante e que ajuda a aliviar tensões musculares e estresse.",
      image1: K1,
      image2: K2,
      image3: K3,
      descricaoimg1:"A primeira imagem do slide aparecem parte de duas pessoas, uma esta com o pe esquerdo virado recendo o procedimento, a pessoa que esta realizando o procedimento esta com um instrumento de mandeira rolando pela a lateral do pe da primeira pessoa",
      descricaoimg2:"No segundo slide aparecem parte de duas pessoa a que esta realizando o procedimento esta aparecendo as duas mãos dela fazendo o procedimento nas solas do pe direito da pessoa, a pessoa que esta recebendo o procedimento esta de bruso com o foco nos pes e esta recebendo o procedimento no pe direito dela.",
      descricaoimg3:"No terceiro slide aparece parte de duas pessoas a pessoa que esta recebendo o procedimento esta de bruso e esta com o foco no pe esquedo da pessoa, a pessoa que esta realizando o procedimento esta mostrando as mãos e um equipamento cilindrico de madeira fazendo pressão na sola do pe da pessoa que esta recebendo o procedimento.",

    },
    massagemModeladora: {
      title: "Massagem Modeladora",
      description:
        "A Massagem Modeladora é uma técnica que utiliza movimentos intensos e rápidos para atuar na redução de medidas e celulite, além de melhorar a circulação sanguínea e ajudar na eliminação de toxinas.",
      image1: M1,
      image2: M2,
      image3: M3,
      descricaoimg1:"A primeira imagem do slide apresenta partes do corpo de duas pessoas uma massageando a outra na parte superior esquerda desfocado aparecem uma mesa com velas. Em evidencia aparece as mãos do massagista nas cortas de uma moça que esta deitada de brusos com um toalha de baixo da cabeça de olhos fechados, na mesa de massagem se encontra dois vidro de tampa preta com detalhes verde e vermelho ",
      descricaoimg2:"No segundo slide aparecem partes do corpo de duas pessoas uma  delas esta a direita so aparecem os braços massagendo as cortas de uma mulher que esta deitada de brusos com a cabeça em cima das mãos",
      descricaoimg3:"No terceiro slide aparecem partes do corpo de duas pessoas sendo elas mulheres a que esta fazendo a massagem so aparece os dois braços e parte da blusa verde disfocada atras dela desfocado tambem do lado esquerdo uma mesa onde estão acesas tres velas tambem desfocado em evidencia em uma mesa coberta com uma toalha branca esta a mulher que esta recebendo o procedimento deitada em cima de uma das mãos ela recebe a massagem tambem temos cinco flores intercaladas de cores brancas e verde",

    },
    drenagem: {
      title: "Drenagem Linfática",
      description:
        "A drenagem linfática é uma técnica que consiste em realizar movimentos suaves e rítmicos, com o objetivo de estimular a circulação linfática e promover a eliminação de toxinas do organismo. Ela é indicada para reduzir o inchaço, combater a celulite e melhorar a circulação sanguínea.",
      image1: D1,
      image2: D2,
      image3: D3,
      descricaoimg1:"A primeira imagem do slide ela tem um fundo branco encotra-se uma pessoa em uma mesa de massagem coberta com toalha ou lençol branco uma mulher deitada de bruso com a cabeça sobre as mãos recebendo o procedimento de uma outra pessoa que realiza o procedimento vente uma camiseta cinza e uma calça azul escuro",
      descricaoimg2:"No segundo slide apresenta duas pessoas com um fundo totalmente branco com a mesa de massagem coberta com toalha ou lençol branco uma mulher deitada de bruso com a cabeça sobre as mãos recebendo o procedimento de uma outra pessoa que realiza o procedimento vente uma camiseta cinza e uma calça azul escuro.",
      descricaoimg3:"No terceiro slide apresenta partes de dois corpos uma pessoa recebe o procedimento aparentemente a pessoa se encontra de brusos com as pernas com oleo, em evidencia a pessoa que esta recebendo o procedimento so aparece apenas partes das pernas e a pessoa esta deitada de brusos se encotra recebendo o procedimento na parte da panturilha a mesa e coberta com um lençol branco no fundo se encotra desfocado um armario com varios utencilhos de massagem",

    },
    ventosaTerapia: {
      title: "Ventosa Terapia",
      description:
        "A Ventosa Terapia é uma técnica que utiliza copos de vidro ou acrílico para criar sucção na pele, com o objetivo de melhorar a circulação sanguínea e aliviar tensões musculares. Pode ser utilizada em diversas partes do corpo.",
      image1: V1,
      image2: V2,
      image3: V3,
      descricaoimg1:"A primeira imagem do apresenta uma mulher deitada em cima de uma mesa coberta de toalha branca um almofada branca ela esta deita sobre as mão aparentemete com os olhos fechados com os copos da ventosa terapias com uma toalha branca cobrindo da cintura para baixo e existe algumas decorações nas mesas que estão desfocadas",
      descricaoimg2:"Na segunda imagem do slide apresenta uma pessoa de brusos que não aparece a cabeça somente a parte das costas e uma mão de uma segunda pessoa toda de branco com uma blusa preta por baixo a pessoa possue aonde verifica os pontos que foram feitos a ventosa terapia",
      descricaoimg3:"Na terceira imagem do slide apresenta de um angulo visto de cima aonde tem uma mesa do lado direito de madeira com oleos e velas e sais e outras decorações do lado esquerdo uma mulher que recebe o procedimento de ventosa terapias que esta com cinco copos em suas cortas e o sexto esta sendo aplicado por uma mão que esta sendo colocado do lado esquedo esta deitada de brusos com a cabeça em cima das mãos aparentemente esta de olhos fechados.",

    },
    laserterapia: {
      title: "Laserterapia",
      description:
        "A Laserterapia é uma técnica que utiliza luz laser para estimular a produção de colágeno e elastina na pele, além de ajudar no tratamento de inflamações, dores e lesões.",
      image1: L1,
      image2: L2,
      image3: L3,
      descricaoimg1:"A primeira imagem do slide apresenta aparentemente sentada aonde recebe o procedimento de laserterapia no joelho somente aparece parte de mãos e dedos da pessoa que aplica a laserterapia.",
      descricaoimg2:"No segundo slide apresenta parte de dois corpos um esta deitado de brusos recebendo o procedimento de laserterapia, a outra pessoa aparece somente a mão direita com o laiser apontando para as costas e fazendo o procedimento",
      descricaoimg3:"No terceiro slide aparecenta uma imagem com duas pessoas com partes dos seus corpos uma pessoa esta deitada em uma mesa coberta com lençol ou toalha branca desfocado esta suas pernas em evidencia as mãos de ambas as pessoas esta recebendo o procedimento na mão esquerda e com o laser apontado nas mãos a segunda pessoa segura com a mão direita o laser e a esquerda a mão de quem esta recebendo o procedimento",

    },
    reiki: {
      title: "Reiki",
      description:
        "O Reiki é uma técnica de origem japonesa que utiliza a imposição de mãos para transmitir energia vital ao corpo, com o objetivo de promover equilíbrio e bem-estar. Acredita-se que essa prática possa ajudar a aliviar dores, reduzir o estresse e melhorar a qualidade do sono, entre outros benefícios.",
      image1: A1,
      image2: A2,
      image3: A3,
      descricaoimg1:"A primeira imagem do ",
      descricaoimg2:"",
      descricaoimg3:"",

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
                alt={servico.descricaoimg1}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={servico.image2}
                alt={servico.descricaoimg2}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={servico.image3}
                alt={servico.descricaoimg3}
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
