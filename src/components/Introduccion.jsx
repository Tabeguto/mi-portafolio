import { Container, Row, Col } from 'react-bootstrap';

function Introduccion() {
  return (
    <Container id="inicio" className="my-5">
      <Row className="align-items-center">

        {/* Foto de perfil */}
        <Col md={4}>
          <img
            src={`${process.env.PUBLIC_URL}/perfil.jpg`}
            alt="Foto de perfil del portafolio"
            className="img-fluid rounded-circle"
          />
        </Col>

        {/* Información personal */}
        <Col md={8}>

          <p className="saludo">
            HOLA, SOY
          </p>

          <h1 className="nombre-principal">
            Tamara <span>Gutiérrez</span>
          </h1>

          <h2 className="profesion">
            ESTUDIANTE DE INGENIERÍA EN INFORMÁTICA
          </h2>

          <p className="descripcion-personal">
            Me interesa el desarrollo de aplicaciones, la gestión de datos
            y seguir fortaleciendo mis conocimientos en programación.
            En este portafolio presento algunos de los proyectos y tecnologías
            que he utilizado durante mi formación académica.
          </p>

          {/* Tecnologías */}
          <div className="tecnologias">

            <span className="tecnologia">
              React
            </span>

            <span className="tecnologia">
              JavaScript
            </span>

            <span className="tecnologia">
              Kotlin
            </span>

            <span className="tecnologia">
              SQL
            </span>

            <span className="tecnologia">
              HTML/CSS
            </span>

            <span className="tecnologia">
              Bootstrap
            </span>

          </div>

        </Col>

      </Row>
    </Container>
  );
}

export default Introduccion;