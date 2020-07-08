import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const BarraNavegacion = () => {
  return (
    <Navbar expand="lg" className="barra-navegacion sticky-top">
      <Navbar.Toggle aria-controls="barra-navegacion" />
      <Navbar.Collapse id="barra-navegacion">
        <Nav className="ml-auto">
          <Nav.Link href="#">Inicio</Nav.Link>
          <Nav.Link href="#">Servicios</Nav.Link>
          <Nav.Link href="#">Trabajos</Nav.Link>
          <Nav.Link href="#">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BarraNavegacion;
