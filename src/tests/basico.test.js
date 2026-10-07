describe('Pruebas básicas del portafolio', function () {

  it('debería sumar correctamente dos números', function () {
    const resultado = 2 + 2;

    expect(resultado).toBe(4);
  });

  it('debería reconocer el nombre del portafolio', function () {
    const nombre = 'Mi Portafolio';

    expect(nombre).toBe('Mi Portafolio');
  });

  it('debería comprobar que existen tres proyectos', function () {
    const proyectos = [
      'MasterBikes',
      'Sáltate la Fila',
      'UrbanPark'
    ];

    expect(proyectos.length).toBe(3);
  });

});