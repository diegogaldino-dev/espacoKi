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
      descricaoimg1:"No primeiro slide, há duas pessoas. Uma delas está deitada em uma maca de massagem, recebendo o procedimento. Essa pessoa está de olhos fechados e seu corpo está coberto por uma toalha branca. A pessoa que está realizando o procedimento está vestindo uma camisa preta e uma calça marrom claro.",
      descricaoimg2:"No segundo slide, há duas pessoas. A pessoa que está recebendo o procedimento está deitada de bruços, com os braços posicionados acima da cabeça. A segunda pessoa está realizando o procedimento, massageando as costas da primeira pessoa.",
      descricaoimg3:"No terceiro slide, são visíveis partes de duas pessoas. A pessoa que está recebendo o procedimento tem apenas as pernas em destaque, sendo que a pessoa que está realizando o procedimento está massageando a panturrilha da perna direita. A pessoa que realiza o procedimento está vestindo uma camiseta branca. A outra pessoa, cuja parte do corpo é visível, está deitada de bruços, com a parte de cima do corpo fora da visualização, e suas pernas estão cobertas por uma toalha branca.",


    },
    reflexologiaPodal: {
      title: "Reflexologia Podal",
      description:
        "A Reflexologia Podal é uma técnica que utiliza a pressão em pontos específicos dos pés para estimular diferentes partes do corpo. Acredita-se que essa prática possa ajudar a aliviar dores, reduzir o estresse e melhorar a circulação sanguínea.",
      image1: P1,
      image2: P2,
      image3: P3,
      descricaoimg1:"Na primeira imagem do slide, são visíveis partes de duas pessoas. A pessoa que está recebendo o procedimento mostra apenas os pés, enquanto a pessoa que está realizando o procedimento mostra as mãos massageando a sola do pé direito.",
      descricaoimg2:"No segundo slide, são visíveis partes de duas pessoas. A pessoa que está realizando o procedimento é focada nas mãos, que estão massageando o pé da pessoa que está recebendo o procedimento. A pessoa que está recebendo o procedimento mostra os pés em foco, indicando que está recebendo a massagem nos pés.",
      descricaoimg3:"No terceiro slide, são visíveis partes de duas pessoas. A pessoa que está recebendo o procedimento mostra os pés, que estão posicionados em cima de uma toalha branca, indicando que está recebendo o procedimento. A pessoa que está aplicando o procedimento está trabalhando nos dois pés da pessoa que está recebendo a massagem. Além disso, a pessoa que está realizando o procedimento tem as unhas pintadas com uma cor cinzentada.",
    },
    kanrenbui: {
      title: "Kanrenbui",
      description:
        "A Kanrenbui é uma técnica de massagem japonesa que trabalha a musculatura do corpo todo, com foco em pontos específicos que correspondem a órgãos e sistemas do corpo. É uma técnica bastante relaxante e que ajuda a aliviar tensões musculares e estresse.",
      image1: K1,
      image2: K2,
      image3: K3,
      descricaoimg1:"Na primeira imagem do slide, são visíveis partes de duas pessoas. Uma delas tem o pé esquerdo virado, indicando que está recebendo o procedimento. A pessoa que está realizando o procedimento está utilizando um instrumento de madeira para rolar ao longo da lateral do pé da primeira pessoa.",
      descricaoimg2:"No segundo slide, são visíveis partes de duas pessoas. A pessoa que está realizando o procedimento mostra as duas mãos enquanto realiza a massagem nas solas do pé direito da outra pessoa. A pessoa que está recebendo o procedimento está de bruços, com o foco nos pés, e está recebendo a massagem no pé direito dela.",
      descricaoimg3:"No terceiro slide, são visíveis partes de duas pessoas. A pessoa que está recebendo o procedimento está de bruços, com o foco no pé esquerdo da outra pessoa. A pessoa que está realizando o procedimento mostra as mãos e está utilizando um equipamento cilíndrico de madeira para aplicar pressão na sola do pé da pessoa que está recebendo o procedimento.",

    },
    massagemModeladora: {
      title: "Massagem Modeladora",
      description:
        "A Massagem Modeladora é uma técnica que utiliza movimentos intensos e rápidos para atuar na redução de medidas e celulite, além de melhorar a circulação sanguínea e ajudar na eliminação de toxinas.",
      image1: M1,
      image2: M2,
      image3: M3,
      descricaoimg1:"Na primeira imagem do slide, são visíveis partes do corpo de duas pessoas envolvidas em uma sessão de massagem. Na parte superior esquerda, de forma desfocada, aparece uma mesa com velas. Em evidência, estão as mãos do massagista nas costas de uma mulher que está deitada de bruços, com uma toalha abaixo da cabeça e os olhos fechados. Na mesa de massagem, são encontrados dois vidros com tampa preta e detalhes verde e vermelho.",
      descricaoimg2:"No segundo slide, são visíveis partes do corpo de duas pessoas. Uma delas está à direita, mostrando apenas os braços, que estão massageando as costas de uma mulher que está deitada de bruços, com a cabeça apoiada nas mãos.",
      descricaoimg3:"No terceiro slide, são visíveis partes do corpo de duas mulheres. A mulher que está realizando a massagem mostra apenas os dois braços e parte de sua blusa verde, com o fundo desfocado. Ao lado esquerdo, há uma mesa com três velas acesas, também desfocada. Em destaque, sobre uma mesa coberta por uma toalha branca, está a mulher que está recebendo o procedimento. Ela está deitada, apoiando-se em uma das mãos, enquanto recebe a massagem. Além disso, há cinco flores intercaladas, nas cores branca e verde.",

    },
    drenagem: {
      title: "Drenagem Linfática",
      description:
        "A drenagem linfática é uma técnica que consiste em realizar movimentos suaves e rítmicos, com o objetivo de estimular a circulação linfática e promover a eliminação de toxinas do organismo. Ela é indicada para reduzir o inchaço, combater a celulite e melhorar a circulação sanguínea.",
      image1: D1,
      image2: D2,
      image3: D3,
      descricaoimg1:"Na primeira imagem do slide, há um fundo branco e uma pessoa deitada em uma mesa de massagem coberta com uma toalha ou lençol branco. A pessoa está deitada de bruços, com a cabeça apoiada nas mãos, recebendo o procedimento. Outra pessoa está realizando o procedimento, vestindo uma camiseta cinza e calça azul escuro.",
      descricaoimg2:"No segundo slide apresenta duas pessoas com um fundo totalmente branco com a mesa de massagem coberta com toalha ou lençol branco uma mulher deitada de bruso com a cabeça sobre as mãos recebendo o procedimento de uma outra pessoa que realiza o procedimento vente uma camiseta cinza e uma calça azul escuro.",
      descricaoimg3:"No terceiro slide, são mostradas partes de dois corpos. A pessoa que está recebendo o procedimento parece estar deitada de bruços, com as pernas cobertas de óleo. A imagem foca nas partes das pernas da pessoa que está recebendo o procedimento, especificamente na região da panturrilha. A mesa onde ocorre a massagem está coberta com um lençol branco. Ao fundo, há um armário desfocado com vários utensílios de massagem.",

    },
    ventosaTerapia: {
      title: "Ventosa Terapia",
      description:
        "A Ventosa Terapia é uma técnica que utiliza copos de vidro ou acrílico para criar sucção na pele, com o objetivo de melhorar a circulação sanguínea e aliviar tensões musculares. Pode ser utilizada em diversas partes do corpo.",
      image1: V1,
      image2: V2,
      image3: V3,
      descricaoimg1:"Na primeira imagem, é apresentada uma mulher deitada em cima de uma mesa coberta com uma toalha branca, com uma almofada branca para apoio. Ela está deitada sobre as mãos, aparentemente com os olhos fechados. Há copos de ventosa terapia posicionados em seu corpo, e uma toalha branca cobrindo a região da cintura para baixo. Além disso, existem algumas decorações na mesa, porém estão desfocadas na imagem.",
      descricaoimg2:"Na segunda imagem do slide, é mostrada uma pessoa deitada de bruços, mas sua cabeça não é visível na imagem. A ênfase está nas costas dessa pessoa. Uma segunda pessoa, vestindo roupas totalmente brancas com uma blusa preta por baixo, está presente na imagem. Essa segunda pessoa está verificando os pontos onde foram aplicadas as ventosas durante a terapia.",
      descricaoimg3:"Na terceira imagem do slide, a vista é de cima, mostrando uma mesa de madeira à direita com óleos, velas, sais e outras decorações. À esquerda, há uma mulher recebendo o procedimento de ventosa terapia. Ela tem cinco copos aplicados em suas costas, e o sexto copo está sendo colocado por uma mão ao lado esquerdo. A mulher está deitada de bruços, com a cabeça apoiada nas mãos, aparentemente de olhos fechados.",

    },
    laserterapia: {
      title: "Laserterapia",
      description:
        "A Laserterapia é uma técnica que utiliza luz laser para estimular a produção de colágeno e elastina na pele, além de ajudar no tratamento de inflamações, dores e lesões.",
      image1: L1,
      image2: L2,
      image3: L3,
      descricaoimg1:"Na primeira imagem do slide, é mostrada uma pessoa aparentemente sentada recebendo o procedimento de laserterapia no joelho. Na imagem, apenas partes das mãos e dos dedos da pessoa que está aplicando a laserterapia são visíveis.",
      descricaoimg2:"No segundo slide, são apresentadas partes de dois corpos. Um deles está deitado de bruços, recebendo o procedimento de laserterapia. A outra pessoa aparece apenas com a mão direita visível, segurando o laser e apontando-o para as costas da pessoa que está recebendo o procedimento.",
      descricaoimg3:"No terceiro slide, é apresentada uma imagem com partes dos corpos de duas pessoas. Uma pessoa está deitada em uma mesa coberta com lençol ou toalha branca, com as pernas em evidência. As mãos de ambas as pessoas estão envolvidas no procedimento, com a pessoa que está aplicando o tratamento segurando o laser e apontando-o para as mãos da pessoa que está recebendo o procedimento. A segunda pessoa segura o laser com a mão direita e segura a mão da pessoa que está recebendo o procedimento com a mão esquerda.",

    },
    reiki: {
      title: "Reiki",
      description:
        "O Reiki é uma técnica de origem japonesa que utiliza a imposição de mãos para transmitir energia vital ao corpo, com o objetivo de promover equilíbrio e bem-estar. Acredita-se que essa prática possa ajudar a aliviar dores, reduzir o estresse e melhorar a qualidade do sono, entre outros benefícios.",
      image1: A1,
      image2: A2,
      image3: A3,
      descricaoimg1:"Na primeira imagem do slide, é apresentado um fundo branco desfocado e partes de duas pessoas. Uma pessoa está deitada em um travesseiro branco, sendo visível apenas parte de sua blusa cinza. Essa pessoa aparenta estar de olhos fechados. A outra pessoa, vestida inteiramente de branco, tem suas mãos em evidência juntamente com parte de suas roupas, realizando movimentos de Reiki.",
      descricaoimg2:"No segundo slide, são mostradas partes dos corpos de duas pessoas. Uma pessoa está deitada em uma mesa coberta com toalhas brancas e um lençol branco. Aparece apenas a cabeça da pessoa, que está apoiada em um travesseiro branco. Essa pessoa está de olhos fechados. A outra pessoa, que realiza o procedimento, está vestida com roupas brancas, e apenas suas mãos estão em evidência. O fundo da imagem está desfocado, apresentando uma cor laranja. As mãos da pessoa que realiza o procedimento estão próximas à cabeça da pessoa que está recebendo a terapia de Reiki.",
      descricaoimg3:"No terceiro slide, a imagem parece ter sido tirada ao ar livre, com o fundo desfocado, mostrando plantas verdes e uma árvore. Há uma pessoa deitada usando roupas brancas, e ao lado dela, outra pessoa vestida de branco está realizando a terapia de Reiki na área abdominal da paciente.",

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
