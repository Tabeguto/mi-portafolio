import { useState } from 'react';
import { Container, Form, Button, Alert, Row, Col } from 'react-bootstrap';

function Contacto() {

  const [enviado, setEnviado] = useState(false);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const manejarEnvio = (event) => {
    event.preventDefault();

    setEnviado(true);

    setNombre('');
    setCorreo('');
    setMensaje('');

    setTimeout(() => {
      setEnviado(false);
    }, 3000);
  };

  return (
    <Container id="contacto" className="my-5">

      <h2 className="text-center mb-2">
        Contacto
      </h2>

      <p className="contacto-subtitulo text-center">
        ¿Quieres contactarme? Puedes enviarme un mensaje.
      </p>

      <Row className="justify-content-center mt-4">

        <Col lg={8}>

          <Form
            onSubmit={manejarEnvio}
            className="contacto-formulario"
          >

            <div className="contacto-encabezado">
              <span className="contacto-etiqueta">
                MENSAJE
              </span>

              <h3>Hablemos</h3>

              <p>
                Completa el formulario y escribe tu mensaje.
              </p>
            </div>


            <Form.Group className="mb-3">

              <Form.Label>
                Nombre
              </Form.Label>

              <Form.Control
                type="text"
                placeholder="Ingrese su nombre"
                value={nombre}
                onChange={(event) =>
                  setNombre(event.target.value)
                }
                required
              />

            </Form.Group>


            <Form.Group className="mb-3">

              <Form.Label>
                Correo electrónico
              </Form.Label>

              <Form.Control
                type="email"
                placeholder="Ingrese su correo"
                value={correo}
                onChange={(event) =>
                  setCorreo(event.target.value)
                }
                required
              />

            </Form.Group>


            <Form.Group className="mb-4">

              <Form.Label>
                Mensaje
              </Form.Label>

              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Escriba su mensaje"
                value={mensaje}
                onChange={(event) =>
                  setMensaje(event.target.value)
                }
                required
              />

            </Form.Group>


            <Button
              className="contacto-boton"
              type="submit"
            >
              Enviar mensaje →
            </Button>


            {enviado && (

              <Alert
                variant="success"
                className="mt-3 mb-0"
              >
                Mensaje enviado exitosamente.
              </Alert>

            )}

          </Form>

        </Col>

      </Row>

    </Container>
  );
}

export default Contacto;