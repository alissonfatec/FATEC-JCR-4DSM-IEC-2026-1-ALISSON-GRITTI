const { classificarAlerta } = require('../src/alertas');

test('Garantir cobertura total do INPE', () => {
  expect(classificarAlerta(90)).toBe('Critico');
  expect(classificarAlerta(70)).toBe('Alto');
  expect(classificarAlerta(40)).toBe('Moderado');
});
