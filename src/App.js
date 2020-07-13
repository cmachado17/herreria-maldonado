import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Servicios from "./components/Servicios";
import BarraNavegacion from "./components/BarraNavegacion";
import Slider from "./components/Slider";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <BarraNavegacion />
      <Header />
      <Servicios />
      <Slider />
      <Contacto />
      <Footer />
    </Fragment>
  );
}

export default App;
