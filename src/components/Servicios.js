import React from 'react';
import Row from 'react-bootstrap/Row';
import Servicio from './Servicio';
import Presupuesto from '../styles/img/presupuesto.jpg'
import Metal from '../styles/img/metal.jpg'
import Trabajando from '../styles/img/trabajando.jpg'

const Servicios = () => {

    const servicios = [
        {
            nombre: "Trabajos a medida",
            descripcion: "Realizamos el trabajo que necesites en tu espacio disponible",
            icono: Trabajando
        },
        {
            nombre: "Diseños personalizados",
            descripcion: "Mira en nuestra galeria la variedad de diseños que armamos",
            icono: Metal
        },
        {
            nombre: "Presupuesto",
            descripcion: "Presupuestamos cualquier diseño que quieras realizar",
            icono:Presupuesto
        },
    ]

    return (
        <section className="container my-5">
<Row>
{servicios.map(servicio =>(
    <Servicio servicio={servicio} key={servicio.nombre}/>
))}
</Row>
        </section>
      );
}
 
export default Servicios;