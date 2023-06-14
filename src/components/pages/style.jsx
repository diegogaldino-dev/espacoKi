import styled from "styled-components";
import { Nav, Card, Form} from 'react-bootstrap';

// export const GlobalStyle = createGlobalStyle`
//   body {
//     font-family: 'Your Font Name', sans-serif;
//   }
//   `

export const MissionVisionValues = styled.div`
  display: flex;
  justify-content: center;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
  font-family: 'Roboto Slab', sans-serif;  

  img {
    margin-bottom: 5px;
    height: 380px;
  }
`;

export const Text = styled.span`
  font-weight: bold;
  font-size: 30px;
`;

export const Description = styled.span `
  font-family: 'Hind Madurai', sans-serif;
  margin-top: 5px;
  word-wrap: break-word;
`


export const CardsPrincipais = styled.div`
  display: flex;
  justify-content: center;  
  margin-right: 5px; 
  justify-content: space-between;
  margin-bottom: 40px;
  font-family: 'Roboto Slab', sans-serif;
`

export const TitleTiposDeServicos = styled.div`
  margin-top: 60px;  
  font-family: 'Roboto Slab', sans-serif;
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TextContainer = styled.div`
  flex-basis: 50%;
`;

export const TextSobre = styled.div`
  flex-grow: 1;
  font-family: 'Roboto Slab', sans-serif;
  font-size: 18px;
  @media screen and (max-width: 576px) {
    font-size: 18px;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 992px) {
    font-size: 22px;
  }
`;

export const ImageContainer = styled.div`
  flex-basis: 40%;
`;

export const ParagrafoDoSobre = styled.p`
  @media (max-width: 600px) {
    width: 40vh;
  }
`

export const Image = styled.img`
  max-width: 90%;
  height: auto;
  border-radius: 30px;
  margin-top: 80px;
  margin-bottom: 30px;
  margin-left: 20px;
`;


export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 50px;
  height: 50px;
`;

export const LogoText = styled.h1`
  margin-left: 10px;
  color: #fff;
  font-size: 24px;
`;

export const ImageArvore = styled.img`  
  justify-content: center;  
  display: block;
  max-width: 100%;
  height: auto;
`
export const CustomNavLink = styled(Nav.Link)`
  color: #000;
  margin-top: 20px;
  font-family:  'Roboto Slab', sans-serif; 
  font-weight: bold;
  
  &:hover {
    color: #FFF9F0;
    background-color:#608263;
  }
  &.active {
    background-color:#608263;
  }
  &.nav-link.active{
    background-color:#608263;
    color: #FFF9F0;
  }
`

export const StyledCard = styled(Card)`
  max-width: 400px;
`;

export const ContatoStyle = styled.h1`
  margin-top: 40px;
  margin-bottom: 30px;
  font-family:  'Roboto Slab', sans-serif; 
  font-weight: bold;

`

export const Buttons = styled.div`
  font-family: Roboto Slab, sans-serif;
  margin-top: 10px;
`
export const StyledForm = styled(Form)`
  font-family:  'Roboto Slab', sans-serif; 
  font-weight: bold;

`

export const Unidade = styled.h5`
  font-family:  'Roboto Slab', sans-serif;   
  font-weight: bold;
`

export const MapWrapper = styled.div`
position: relative;
width: 100%;
padding-bottom: 56.25%; /* altura é 56.25% da largura para manter proporção 16:9 */
margin-bottom: 60px; /* ou o valor que desejar */

& > iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
`;

export const Paragrafo = styled.h1`
  margin-top: 50px ;
  margin-bottom: 20px;
  font-family:  'Roboto Slab', sans-serif; 
  
`

export const Endereco = styled.span`
  font-family:  'Roboto Slab', sans-serif;   
`

export const TitleCarousel = styled.span `
  font-family:  'Roboto Slab', sans-serif;   
  background-color: #fff;
  opacity: 0.5;
  font-size: 18px;
  /* margin-bottom: 5px; */
  text-shadow: #000;
  color: #608263;
  font-weight: bold;
  
`

export const ImgMVV = styled.img `
  max-width:  60px;
`
