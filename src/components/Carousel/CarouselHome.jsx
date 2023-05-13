import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {TitleCarousel} from '../pages/style'
import {StyledCarousel} from './style'


import Imagem1 from '../../img/1.jpg'
import Imagem2 from '../../img/5.jpg'
import Imagem3 from '../../img/7.jpg'


export default function CarouselHome() {
  return (
    <StyledCarousel>
    <Carousel.Item interval={1500}>
      <div style={{ height: '600px' }}>
        <img className="d-block w-100" src={Imagem1} alt="Primeiro slide - apresenta uma imagem onde aparece a mão de uma mulher que usar shotrs verde musgo, desfocado junto com um armario atrás. 
        Em evidencia fica as maos da pessoa de shortr, uma segunda pessoa aparece deitada em uma mesa de massagem a qual fica em evidencia o rosto,
        parte ombro e peito coberto com uma toalha e com os olho fechados, 
        a mão em evidencia a direita enconta abaixo do queixo da moça e a mão esquerda encosta no topo da testa" />
      </div>
      <Carousel.Caption>
      <TitleCarousel>
        Desperte seus sentidos e cuide do seu bem-estar com nossos tratamentos exclusivos.
        </TitleCarousel>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1500}>
      <div style={{ height: '600px' }}>
        <img className="d-block w-100" src={Imagem2} alt="Segundo slide - apresenta uma imagem de uma pessoa massageando o pe de outra na qual 
        se evedencia o pe e as maos e parte da roupa, na cor vermelha e detalhes em preto e dourado e parte do braço com o fundo desfocado " />
      </div>
      <Carousel.Caption>
      <TitleCarousel>
        Relaxe e renove suas energias com nossas massagens.
        </TitleCarousel>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={1500}>
      <div style={{ height: '600px' }}>
        <img className="d-block w-100" src={Imagem3} alt="Terceiro slide - apresenta uma imagem onde aparece duas pessoas dessas duas pessoa uma está 
        deitada de brusos na mesa de massagem com a cabeça sobre as maos totalmente desfocada. A segunda pessoa com as mãos em maior evidencia manuzei com as maos um vidro 
        com oleo de tonalidade amarela as roupas que essa pessoa usa são uma blusa branca e uma calça roxa que se encontra descofocada." />
      </div>
      <Carousel.Caption>
        <TitleCarousel>
          Acalme a mente e alivie o estresse com nossas terapias especializadas.
        </TitleCarousel>
      </Carousel.Caption>
    </Carousel.Item>
  </StyledCarousel>
  );
}
