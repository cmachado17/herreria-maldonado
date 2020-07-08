import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Servicios from "./components/Servicios";
import BarraNavegacion from "./components/BarraNavegacion";
import Slider from "./components/Slider";

function App() {
  return (
    <Fragment>
      <BarraNavegacion />
      <Header />
      <Servicios />
      <Slider />
    </Fragment>
  );
}

export default App;
