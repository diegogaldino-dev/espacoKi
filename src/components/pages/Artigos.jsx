import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Artigos = () => {
  const id = 1; // substitua pelo id do artigo que você quer linkar

  return (
    <div className="bg-light p-5">
      <div className="container">
        <h1>Meu Título</h1>
        <img src="caminho/para/imagem.jpg" alt="Imagem de destaque" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed lobortis vel nisl in fringilla. Morbi lobortis turpis 
          eget urna fermentum dictum. Integer ultricies enim non dui 
          ultrices, sit amet scelerisque lectus tincidunt. Fusce 
          convallis est vitae dolor consequat suscipit. Nullam 
          fringilla mi sed purus efficitur, id pharetra mi congue.
        </p>
        <Link to={`/pageArtigos/${id}`}>
          <Button variant="primary">Ir para a página de destino</Button>
        </Link>
      </div>
    </div>
  )
}

export default Artigos;