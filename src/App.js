import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Servicios from "./components/Servicios";
import BarraNavegacion from "./components/BarraNavegacion";

function App() {
  return (
    <Fragment>
      <BarraNavegacion />
      <Header />
      <Servicios />
    </Fragment>
  );
}

export default App;
