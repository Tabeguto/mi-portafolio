# Mi Portafolio Personal

Portafolio personal desarrollado como proyecto académico utilizando React.

## Descripción

Este proyecto presenta información personal, proyectos desarrollados durante mi formación académica, noticias y un formulario de contacto.

El objetivo es aplicar conceptos de desarrollo frontend utilizando componentes reutilizables, estado, propiedades y diseño responsivo.

## Tecnologías utilizadas

- React
- JavaScript
- HTML
- CSS
- Bootstrap
- React Bootstrap
- JSON
- Jasmine
- Karma

## Proyectos incluidos

### MasterBikes
Sistema desarrollado para apoyar la gestión de venta, arriendo y reparación de bicicletas.

### Sáltate la Fila
Proyecto orientado a facilitar la compra de productos en kioscos y reducir los tiempos de espera.

### UrbanPark
Aplicación desarrollada para gestionar espacios de estacionamiento.

## Funcionalidades

- Navegación entre secciones.
- Presentación personal.
- Visualización de proyectos.
- Vista detallada de proyectos.
- Noticias cargadas desde un archivo JSON.
- Uso de estado con React.
- Uso de props entre componentes.
- Formulario de contacto.
- Diseño responsivo.
- Navegación mediante teclado.
- Pruebas automatizadas.

## Estructura del proyecto

El proyecto utiliza componentes separados para organizar las distintas secciones del portafolio.

Entre los principales componentes se encuentran:

- Navbar
- Introduccion
- Proyectos
- ProyectoCard
- DetalleProyecto
- Noticias
- Contacto
- Footer

## Noticias

Las noticias se encuentran almacenadas en:

src/data/noticias.json

El componente Noticias utiliza esta información para generar dinámicamente las tarjetas de noticias.

## Pruebas

Se configuraron Jasmine y Karma para realizar pruebas automatizadas.

Las pruebas se encuentran en:

src/tests/

Actualmente se incluyen pruebas básicas y pruebas relacionadas con los proyectos del portafolio.

Para ejecutar las pruebas:

npx.cmd karma start karma.conf.js

Resultado actual:

8 pruebas ejecutadas correctamente.

## Ejecutar el proyecto

Instalar las dependencias:

npm install

Ejecutar el proyecto:

npm start

En PowerShell, si existe una restricción de ejecución de scripts, se puede utilizar:

npm.cmd start

## Autor

Tamara Gutiérrez

Estudiante de Ingeniería en Informática