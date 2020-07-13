import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from 'react-bootstrap/Image';
import Logo from '../styles/img/logo.jpg';

const BarraNavegacion = () => {
  return (
    <Navbar expand="lg" className="barra-navegacion sticky-top">
      <Navbar.Brand href="#" className="contenedor-logo">
        <Image roundedCircle src={Logo} className="logo"/>
      </Navbar.Brand>
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
