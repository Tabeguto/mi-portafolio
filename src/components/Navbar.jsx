import { Navbar, Nav, Container } from 'react-bootstrap';

function Menu() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">
      <Container>

        <Navbar.Brand href="#inicio">
          Mi Portafolio
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="menu-principal" />

        <Navbar.Collapse id="menu-principal">

          <Nav className="ms-auto">

            <Nav.Link href="#inicio">
              Inicio
            </Nav.Link>

            <Nav.Link href="#proyectos">
              Proyectos
            </Nav.Link>

            <Nav.Link href="#noticias">
              Noticias
            </Nav.Link>

            <Nav.Link href="#contacto">
              Contacto
            </Nav.Link>

          </Nav>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Menu;