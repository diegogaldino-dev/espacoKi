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
    <Carousel.Item interval={1000}>
      <div style={{ height: '600px' }}>
        <img className="d-block w-100" src={Imagem1} alt="First slide" />
      </div>
      <Carousel.Caption>
      <TitleCarousel>
        Desperte seus sentidos e cuide do seu bem-estar com nossos tratamentos exclusivos.
        </TitleCarousel>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <div style={{ height: '600px' }}>
        <img className="d-block w-100" src={Imagem2} alt="Second slide" />
      </div>
      <Carousel.Caption>
      <TitleCarousel>
        Relaxe e renove suas energias com nossas massagens.
        </TitleCarousel>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <div style={{ height: '600px' }}>
        <img className="d-block w-100" src={Imagem3} alt="Third slide" />
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
