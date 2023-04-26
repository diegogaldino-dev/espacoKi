import styled from "styled-components";
import Carousel from 'react-bootstrap/Carousel';


export const StyledCarousel = styled(Carousel)`  
@media (max-width: 768px) {
  .carousel-item {
    height: 300px;
  }
  .carousel-item img {
    object-fit: cover;
    height: 300px;
  }
}
`;

