import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Contacto = () => {
  return (
    <div className="contacto container my-5">
      <div className="text-center">
        <h2>Contacto</h2>
        <div className="separador"></div>
      </div>
      <Row className="mt-5">
        <Col sm={12} md={6}>
          <ul>
            <li><a href="#">Whatsapp</a> </li>
            <li><a href="https://www.facebook.com/herreria.maldonado.509" target="_blank" rel="noopener noreferrer">Facebook</a></li>
         
          </ul>
        </Col>
        <Col sm={12} md={6}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d821.8177139082248!2d-58.56719247076973!3d-34.52136509878006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcba6ff195f98d%3A0x4e39e4f23d1b7f35!2sBartolom%C3%A9%20Novaro%201346%2C%20Jos%C3%A9%20Le%C3%B3n%20Su%C3%A1rez%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1594663700946!5m2!1ses!2sar"
            width="100%"
            height="100%"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
            className="mapa"
          ></iframe>
        </Col>
      </Row>
    </div>
  );
};

export default Contacto;
