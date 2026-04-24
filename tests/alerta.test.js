const { classificarAlerta } = require('../src/alertas');

/**
 * Exercício 6: Teste Unitário
 * Fortalece a prática de testar funções de forma isolada.
 */
test('alerta alto', () => {
  expect(classificarAlerta(70)).toBe('Alto');
});

test('deve retornar Moderado para valor 40', () => {
  expect(classificarAlerta(40)).toBe('Moderado');
});

/**
 * Exercício 8: Simulação de Erro (Metacognição)
 * Para testar a falha, altere o "Crítico" abaixo para "Alto" e rode npm test.
 * Depois, volte para "Crítico" para o pipeline passar.
 */
test('deve falhar se a classificação estiver incorreta', () => {
  expect(classificarAlerta(90)).toBe('Crítico');
});
