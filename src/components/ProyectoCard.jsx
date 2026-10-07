import { Card, Button } from 'react-bootstrap';

function ProyectoCard({
  titulo,
  descripcion,
  tecnologia,
  imagen,
  seleccionarProyecto
}) {

  return (
    <Card className="h-100 proyecto-card">

      {/* Imagen del proyecto */}
      <div className="proyecto-imagen">

        <Card.Img
          variant="top"
          src={imagen}
          alt={`Imagen del proyecto ${titulo}`}
        />

      </div>


      <Card.Body className="d-flex flex-column">

        {/* Etiqueta */}
        <span className="proyecto-etiqueta">
          PROYECTO
        </span>


        {/* Título del proyecto */}
        <Card.Title className="proyecto-titulo">
          {titulo}
        </Card.Title>


        {/* Descripción */}
        <Card.Text className="proyecto-descripcion">
          {descripcion}
        </Card.Text>


        {/* Tecnología utilizada */}
        <div className="proyecto-tecnologias">

          <span className="proyecto-chip">
            {tecnologia}
          </span>

        </div>


        {/* Botón para ver el proyecto */}
        <div className="mt-auto">

          <Button
            type="button"
            className="proyecto-boton"
            onClick={seleccionarProyecto}
            aria-label={`Ver detalles del proyecto ${titulo}`}
          >
            Ver proyecto →
          </Button>

        </div>

      </Card.Body>

    </Card>
  );
}

export default ProyectoCard;