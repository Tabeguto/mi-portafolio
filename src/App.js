import { useState } from 'react';
import './App.css';

import Menu from './components/Navbar';
import Introduccion from './components/Introduccion';
import Proyectos from './components/Proyectos';
import Noticias from './components/Noticias';
import Contacto from './components/Contacto';
import DetalleProyecto from './components/DetalleProyecto';
import Footer from './components/Footer';


function App() {

  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  if (proyectoSeleccionado) {

    return (
      <DetalleProyecto
        proyecto={proyectoSeleccionado}
        volver={() => setProyectoSeleccionado(null)}
      />
    );

  }

  return (
    <div>

     

      <Menu />

      <Introduccion />

      <Proyectos
        seleccionarProyecto={setProyectoSeleccionado}
      />

      <Noticias />

      <Contacto />

      <Footer />

    </div>
  );
}

export default App;