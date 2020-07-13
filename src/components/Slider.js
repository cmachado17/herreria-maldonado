import React from "react";
import Carousel from "react-bootstrap/Carousel";
import shortid from "shortid";

// Imagenes
import Candelabro from "../styles/img/candelabro.jpg";
import Candelabro2 from "../styles/img/candelabro2.jpg";
import Cerramiento from "../styles/img/cerramiento.jpg";
import Escritorio from "../styles/img/escritorio.jpg";
import Escritorio2 from "../styles/img/escritorio2.jpg";
import Estanteria from "../styles/img/Estanteria.jpg";
import Porton from "../styles/img/porton.jpg";
import Reja from "../styles/img/reja.jpg";
import Repisa from "../styles/img/repisa.jpg";
import Repisa2 from "../styles/img/repisa2.jpg";

const Slider = () => {
  const trabajos = [
    {
      nombre: "Candelabro",
      foto: Candelabro,
      id: shortid.generate(),
    },
    {
      nombre: "Candelabro",
      foto: Candelabro2,
      id: shortid.generate(),
    },
    {
      nombre: "Cerramiento de parrilla",
      foto: Cerramiento,
      id: shortid.generate(),
    },
    {
      nombre: "Escritorio de PC",
      foto: Escritorio,
      id: shortid.generate(),
    },
    {
      nombre: "Escritorio de PC",
      foto: Escritorio2,
      id: shortid.generate(),
    },
    {
      nombre: "Estanteria",
      foto: Estanteria,
      id: shortid.generate(),
    },
    {
      nombre: "Porton",
      foto: Porton,
      id: shortid.generate(),
    },
    {
      nombre: "Reja",
      foto: Reja,
      id: shortid.generate(),
    },
    {
      nombre: "Repisa con perchero",
      foto: Repisa,
      id: shortid.generate(),
    },
    {
      nombre: "Repisa con perchero",
      foto: Repisa2,
      id: shortid.generate(),
    },
  ];
  return (
    <div className="slider p-5">
      <div className="text-center mb-5 text-white">
        <h2>Trabajos</h2>
      </div>
      <div className="container">
        <Carousel>
          {trabajos.map((trabajo) => (
            <Carousel.Item key={trabajo.id}>
              <img
                src={trabajo.foto}
                className="d-block w-100"
                alt={trabajo.nombre}
              />
              <Carousel.Caption className="titulo-slider">
                <h3>{trabajo.nombre}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
