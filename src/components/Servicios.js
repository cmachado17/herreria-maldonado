import React from 'react';
import Row from 'react-bootstrap/Row';
import Servicio from './Servicio';



const Servicios = () => {

    const servicios = [
        {
            nombre: "Uno",
            descripcion: "una descripcion",
            icono: "sad"
        },
        {
            nombre: "dos",
            descripcion: "una descripcion",
            icono: "sad"
        },
        {
            nombre: "tres",
            descripcion: "una descripcion",
            icono: "sad"
        },
    ]

    return (
        <section className="container">
<Row>
{servicios.map(servicio =>(
    <Servicio servicio={servicio}/>
))}
</Row>
        </section>
      );
}
 
export default Servicios;