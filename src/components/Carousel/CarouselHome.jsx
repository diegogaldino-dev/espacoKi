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
    <Carousel.Item interval={4000}>
      <div style={{ height: '600px' }}>
        <img className="d-block w-100" src={Imagem1} alt="No primeiro slide, uma imagem mostra a mão de uma mulher vestindo shorts verde musgo, em primeiro plano, desfocada junto com um armário ao fundo. Em destaque, aparecem as mãos da pessoa de shorts, enquanto uma segunda pessoa está deitada em uma mesa de massagem. O rosto da pessoa deitada é evidenciado, assim como parte do ombro e do peito, que estão cobertos por uma toalha. Os olhos da pessoa estão fechados. A mão direita da mulher em destaque encontra-se abaixo do queixo da outra pessoa, enquanto a mão esquerda toca o topo da testa." />
      </div>
      <Carousel.Caption>
      <TitleCarousel>
        Desperte seus sentidos e cuide do seu bem-estar com nossos tratamentos exclusivos.
        </TitleCarousel>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={4000}>
      <div style={{ height: '600px' }}>
        <img className="d-block w-100" src={Imagem2} alt="No segundo slide, há uma imagem que retrata uma pessoa massageando o pé de outra. O foco está no pé e nas mãos em destaque, bem como em partes da roupa que são predominantemente vermelhas, com detalhes em preto e dourado. Também é possível ver parte do braço da pessoa que está massageando. O fundo da imagem está desfocado, dando ênfase ao ato da massagem." />
      </div>
      <Carousel.Caption>
      <TitleCarousel>
        Relaxe e renove suas energias com nossas massagens.
        </TitleCarousel>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={4000}>
      <div style={{ height: '600px' }}>
        <img className="d-block w-100" src={Imagem3} alt="No terceiro slide, é exibida uma imagem com duas pessoas. A primeira pessoa está deitada de bruços na mesa de massagem, com a cabeça apoiada nas mãos, que estão totalmente desfocadas. A segunda pessoa é evidenciada com as mãos em destaque, segurando um frasco de óleo de cor amarela. A pessoa que segura o frasco está vestindo uma blusa branca e calças roxas, que estão desfocadas na imagem." />
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
