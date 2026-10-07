function Footer() {

  const volverArriba = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-moderno">

      <div className="footer-contenido-moderno">

        <h3 className="footer-nombre">
          Tamara Gutiérrez
        </h3>

        <p className="footer-carrera">
          Estudiante de Ingeniería en Informática
        </p>

        <div className="footer-skills">
          <span>React</span>
          <span>JavaScript</span>
          <span>Kotlin</span>
          <span>SQL</span>
          <span>HTML/CSS</span>
        </div>

        <button
          type="button"
          className="footer-boton"
          onClick={volverArriba}
        >
          ↑ Volver arriba
        </button>

        <div className="footer-separador"></div>

        <p className="footer-copy">
          © 2026 Tamara Gutiérrez | Portafolio Personal
        </p>

      </div>

    </footer>
  );
}

export default Footer;