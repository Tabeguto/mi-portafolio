import { Container, Row, Col } from 'react-bootstrap';
import ProyectoCard from './ProyectoCard';

function Proyectos({ seleccionarProyecto }) {

    const masterBikes = {
        titulo: 'MasterBikes',
        descripcion: 'Sistema desarrollado para apoyar la gestión de venta, arriendo y reparación de bicicletas.',
        tecnologia: 'HTML, CSS y JavaScript',
        imagen: `${process.env.PUBLIC_URL}/proyecto1.jpg`
    };

    const saltateFila = {
        titulo: 'Sáltate la Fila',
        descripcion: 'Proyecto orientado a facilitar la compra de productos en kioscos y reducir los tiempos de espera.',
        tecnologia: 'Base de Datos y SQL',
        imagen: `${process.env.PUBLIC_URL}/proyecto2.jpg`
    };

    const urbanPark = {
        titulo: 'UrbanPark',
        descripcion: 'Aplicación desarrollada para gestionar espacios y registrar información relacionada con estacionamientos.',
        tecnologia: 'Kotlin',
        imagen: `${process.env.PUBLIC_URL}/proyecto3.jpg`
    };

    return (
  <Container id="proyectos" className="my-5">

    <h2 className="text-center mb-4">
      Mis Proyectos
    </h2>

    <Row className="g-4">

      {/* MasterBikes */}
      <Col md={4}>
        <ProyectoCard
          titulo={masterBikes.titulo}
          descripcion={masterBikes.descripcion}
          tecnologia={masterBikes.tecnologia}
          imagen={masterBikes.imagen}
          seleccionarProyecto={() =>
            seleccionarProyecto(masterBikes)
          }
        />
      </Col>

      {/* Sáltate la Fila */}
      <Col md={4}>
        <ProyectoCard
          titulo={saltateFila.titulo}
          descripcion={saltateFila.descripcion}
          tecnologia={saltateFila.tecnologia}
          imagen={saltateFila.imagen}
          seleccionarProyecto={() =>
            seleccionarProyecto(saltateFila)
          }
        />
      </Col>

      {/* UrbanPark */}
      <Col md={4}>
        <ProyectoCard
          titulo={urbanPark.titulo}
          descripcion={urbanPark.descripcion}
          tecnologia={urbanPark.tecnologia}
          imagen={urbanPark.imagen}
          seleccionarProyecto={() =>
            seleccionarProyecto(urbanPark)
          }
        />
      </Col>

    </Row>

  </Container>
);

}

export default Proyectos;
