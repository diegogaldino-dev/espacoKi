import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaWhatsapp } from 'react-icons/fa';

function Cards({name, image, description}) {
  const whatsappNumber = '5511941265438';

  const handleAgendar = () => {
    const message = 'Olá, gostaria de agendar um horário.';
  
    window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`);
  };


  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="" style={{backgroundColor: '#608263', color:"#fff"}} onClick={handleAgendar}>Agendar <FaWhatsapp className="ms-2" /></Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
