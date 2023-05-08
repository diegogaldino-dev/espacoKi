import React, { useEffect } from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import {
  ContatoStyle,
  Buttons,
  StyledForm,
  MapWrapper,
  Unidade,
  Paragrafo,
  Endereco,
} from "./style";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

import AOS from "aos";
import "aos/dist/aos.css";

const Contato = ({ src, title }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const enviarWhatsapp = () => {
    const nome = document.getElementsByName("nome_completo")[0].value;
    const conheceu = document.getElementsByName("como_conheceu")[0].value;
    const email = document.getElementsByName("email")[0].value;
    const mensagem = document.getElementsByName("mensagem")[0].value;

    const texto = `Olá, meu nome é ${nome}. Eu conheci vocês através de ${conheceu} e gostaria de entrar em contato por email: ${email}. Aqui está minha mensagem: ${mensagem}`;

    // const telefone = 5511946438748; // Substitua pelo seu número de telefone
    const link = `https://api.whatsapp.com/send?phone=${5511946438748}&text=${encodeURIComponent(
      texto
    )}`;

    window.open(link);
  };

  return (
    <Container>
      <div>
        <ContatoStyle>Contato</ContatoStyle>
      </div>
      <Row>
        <Col>
          <StyledForm
            action="mailto:contato@espacokiterapias.com.br"
            method="POST"
          >
            <Form.Group>
              <Form.Label>Nome completo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite seu nome completo"
                name="nome_completo"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Como nos conheceu?</Form.Label>
              <Form.Control as="select" name="como_conheceu" required>
                <option value="" disabled selected hidden>
                  Como você nos encontrou?
                </option>
                <option value="google">Pesquisa no Google</option>
                <option value="facebook">Anúncio no Facebook</option>
                <option value="instragram">Instragram</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite seu email"
                name="email"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Mensagem</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Digite sua mensagem"
                name="mensagem"
                required
              />
            </Form.Group>
            <Buttons>
              <Button variant="primary" type="submit">
                Enviar via email
                <AiOutlineMail className="ms-2" />
              </Button>{" "}
              <Button variant="success" onClick={enviarWhatsapp}>
                Enviar via WhatsApp
                <FaWhatsapp className="ms-2" />
              </Button>
            </Buttons>
          </StyledForm>

          <Paragrafo>Unidades que atendemos</Paragrafo>

          <Unidade data-aos="zoom-in-left">Unidade Paraiso</Unidade>

          <Endereco data-aos="zoom-in-left">
            Endereço: Rua Manuel da Nóbrega, 354, Paraíso, São Paulo - SP
          </Endereco>
          <MapWrapper data-aos="fade-up" data-aos-anchor-placement="top-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14629.226445439916!2d-46.67695321877131!3d-23.55742903921312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59a8deeb3f7f%3A0x693c62ae09b3b7d0!2sVarappe%20Apresenta!5e0!3m2!1spt-BR!2sbr!4v1682361599453!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              style={{ border: "0", marginBottom: "60px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </MapWrapper>

          <Unidade data-aos="zoom-in-left">Unidade Jardim Paulista</Unidade>
          <Endereco data-aos="zoom-in-left">
            Endereço: Alameda Tietê, 580, Jardim Paulista, São Paulo - SP
          </Endereco>
          <MapWrapper
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2373491863955!2d-46.67052762395383!3d-23.559917578800892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59d4d50fa957%3A0x425e934f51389da2!2sAlameda%20Tiet%C3%AA%2C%20580%20-%20Jardim%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001417-020!5e0!3m2!1spt-BR!2sbr!4v1682362067896!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              style={{ border: "0", marginBottom: "60px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </MapWrapper>
        </Col>

        <Col sm={6}>
          <Unidade data-aos="zoom-in-left">Unidade Casa Verde</Unidade>
          <Endereco data-aos="zoom-in-left">
            Endereço: Av. Professora Ida Kolb, 225, Casa Verde , São Paulo - SP
          </Endereco>
          <MapWrapper
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d914.6567620126801!2d-46.6645261!3d-23.5099392!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef7f07d450ffb%3A0x7b1c04b1df156190!2sAv.%20Profa.%20Ida%20Kolb%2C%20225%20-%20Casa%20Verde%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002518-000!5e0!3m2!1spt-BR!2sbr!4v1682362683304!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              style={{ border: "0", marginBottom: "60px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </MapWrapper>

          <Unidade data-aos="zoom-in-left">Unidade Jardins</Unidade>
          <Endereco data-aos="zoom-in-left">
            Endereço: Av. Augusta, 1939, Jardins , São Paulo - SP
          </Endereco>
          <MapWrapper
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.242303002967!2d-46.6614851!3d-23.559739600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59d288828a23%3A0xc60177692807d776!2sEspa%C3%A7o%20Varappe%20-%20Unidade%20metr%C3%B4%20Consola%C3%A7%C3%A3o%20-%20Loca%C3%A7%C3%A3o%20de%20salas%2C%20aluguel%20de%20salas%2C%20escrit%C3%B3rio%20virtual%2C%20endere%C3%A7o%20fiscal.!5e0!3m2!1spt-BR!2sbr!4v1682362935652!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              style={{ border: "0", marginBottom: "60px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </MapWrapper>
        </Col>
      </Row>

      <hr />
    </Container>
  );
};

export default Contato;
