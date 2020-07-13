import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

const Servicio = ({ servicio }) => {
  return (
    <Col xs={12} sm={12} md={4} className="my-3">
      <Card className="card-servicio">
        <Image src={servicio.icono} roundedCircle className="imagen-card" />

        <Card.Body className="text-center">
          <Card.Title className="card-title">{servicio.nombre}</Card.Title>
     
        <Card.Text>{servicio.descripcion}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Servicio;
