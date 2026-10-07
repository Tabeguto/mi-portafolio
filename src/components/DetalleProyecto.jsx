import { Container, Button } from 'react-bootstrap';

function DetalleProyecto({ proyecto, volver }) {
    return (
        <Container className="my-5">

            <Button
                variant="secondary"
                onClick={volver}
                className="mb-4"
            >
                Volver
            </Button>

            <h1>{proyecto.titulo}</h1>

            <img
                src={proyecto.imagen}
                alt={proyecto.titulo}
                className="img-fluid my-4"
                style={{ maxWidth: '400px' }}
            />

            <h4>Descripción</h4>

            <p>
                {proyecto.descripcion}
            </p>

            <h4>Tecnologías utilizadas</h4>

            <p>
                {proyecto.tecnologia}
            </p>

        </Container>
    );
}

export default DetalleProyecto;