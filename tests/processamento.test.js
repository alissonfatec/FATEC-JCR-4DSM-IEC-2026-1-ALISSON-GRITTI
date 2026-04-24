const {
  processarAlerta,
  classificarAlerta,
  enviarNotificacao,
} = require('../src/alertas');

/**
 * Exercício 1 e 7: Teste de Integração
 * Valida a execução conjunta das funções de classificação e notificação.
 */
test('processamento completo de alerta crítico', () => {
  const resultado = processarAlerta(90);
  expect(resultado).toBe('Notificação enviada: Crítico');
});

test('classificação + notificação', () => {
  const alerta = classificarAlerta(90);
  const resultado = enviarNotificacao(alerta);
  expect(resultado).toBe('Notificação enviada: Crítico');
});

/**
 * Exercício 2: Simulação com Mock
 * Simula uma chamada de API externa para evitar disparos reais durante os testes.
 */
const api = {
  enviar: jest.fn(() => 'Simulado!'),
};

test('simulação de envio', () => {
  const resposta = api.enviar();
  expect(resposta).toBe('Simulado!');
  expect(api.enviar).toHaveBeenCalled();
});
