import React from "react";

import { StyledFooter, FooterText } from "./style";

import Logo from "../../img/logo/img9.svg";

import {
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <StyledFooter className="text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0 d-flex align-items-center">
            <div className="d-flex flex-column flex-md-row align-items-center">
              <img
                src={Logo}
                alt="Logo_ki_terapia"
                style={{ marginRight: "1rem", maxWidth: 200, height: "auto" }}
              />
              <div className="text-center text-md-start">
                <h3 className="text-uppercase font-weight-bold">Espaço Ki Terapia</h3>
                <p style={{fontSize: "18px"}}>
                Oferecemos tratamentos personalizados de massagem terapêutica com uma equipe altamente treinada de massoterapeutas. Nosso objetivo é proporcionar um ambiente acolhedor e relaxante para ajudá-lo a aliviar o estresse e melhorar sua saúde e bem-estar físico e mental. Marque sua consulta hoje e descubra os benefícios da massagem terapêutica.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0">Social Media</h5>

            <ul className="list-unstyled d-flex justify-content-between">
              {/* <li>
                <a href="#!" className="text-dark">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  <FaGoogle />
                </a>
              </li> */}
              <li>
                <a href="https://www.instagram.com/espacokiterapia/?igshid=YmMyMTA2M2Y%3D" className="text-dark">
                  <FaInstagram />
                </a>
              </li>
              {/* <li>
                <a href="#!" className="text-dark">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  <FaGithub />
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>

      <FooterText>
        Espaço Ki Terapia © 2023 Todos os direitos reservados. Desenvolvido por:{" "}
        <a href="https://instagram.com/dds_desenvolvimento?igshid=NTc4MTIwNjQ2YQ==">
          DDS Desenvolvimento
        </a>
      </FooterText>
    </StyledFooter>
  );
}

export default Footer;
