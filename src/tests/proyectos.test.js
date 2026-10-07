describe('Pruebas de proyectos del portafolio', function () {

  const proyectos = [
    {
      titulo: 'MasterBikes',
      tecnologia: 'HTML, CSS y JavaScript'
    },
    {
      titulo: 'Sáltate la Fila',
      tecnologia: 'Base de Datos y SQL'
    },
    {
      titulo: 'UrbanPark',
      tecnologia: 'Kotlin'
    }
  ];

  it('debería cargar tres proyectos', function () {
    expect(proyectos.length).toBe(3);
  });

  it('debería encontrar el proyecto MasterBikes', function () {
    expect(proyectos[0].titulo).toBe('MasterBikes');
  });

  it('debería comprobar la tecnología de Sáltate la Fila', function () {
    expect(proyectos[1].tecnologia).toBe('Base de Datos y SQL');
  });

  it('debería comprobar que UrbanPark utiliza Kotlin', function () {
    expect(proyectos[2].tecnologia).toBe('Kotlin');
  });

  it('todos los proyectos deberían tener un título', function () {

    proyectos.forEach(function (proyecto) {
      expect(proyecto.titulo).toBeTruthy();
    });

  });

});