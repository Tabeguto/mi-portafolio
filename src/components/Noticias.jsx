import { Container, Row, Col, Card } from 'react-bootstrap';

function Noticias() {
  return (
    <Container id="noticias" className="my-5">

      <h2 className="text-center mb-2">
        Noticias
      </h2>

      <p className="noticias-subtitulo text-center">
        Novedades sobre mi aprendizaje y desarrollo profesional
      </p>

      <Row className="g-4 mt-3">

        {/* Noticia 1 */}
        <Col md={4}>
          <Card className="h-100 noticia-card">
            <Card.Body>

              <span className="noticia-etiqueta">
                PROYECTOS
              </span>

              <Card.Title className="noticia-titulo">
                Nuevos proyectos
              </Card.Title>

              <Card.Text className="noticia-texto">
                Continúo desarrollando nuevos proyectos para
                fortalecer mis conocimientos en programación
                y desarrollo de aplicaciones.
              </Card.Text>

            </Card.Body>
          </Card>
        </Col>


        {/* Noticia 2 */}
        <Col md={4}>
          <Card className="h-100 noticia-card">
            <Card.Body>

              <span className="noticia-etiqueta">
                APRENDIZAJE
              </span>

              <Card.Title className="noticia-titulo">
                Aprendiendo React
              </Card.Title>

              <Card.Text className="noticia-texto">
                Actualmente estoy trabajando con React y Bootstrap
                para crear interfaces web responsivas y organizadas
                mediante componentes.
              </Card.Text>

            </Card.Body>
          </Card>
        </Col>


        {/* Noticia 3 */}
        <Col md={4}>
          <Card className="h-100 noticia-card">
            <Card.Body>

              <span className="noticia-etiqueta">
                TECNOLOGÍA
              </span>

              <Card.Title className="noticia-titulo">
                Nuevas tecnologías
              </Card.Title>

              <Card.Text className="noticia-texto">
                Durante mi formación académica he trabajado con
                diferentes tecnologías y lenguajes para desarrollar
                distintos tipos de proyectos.
              </Card.Text>

            </Card.Body>
          </Card>
        </Col>

      </Row>

    </Container>
  );
}

export default Noticias;