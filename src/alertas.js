/**
 * Funções principais do sistema de monitoramento do INPE.
 * Usamos module.exports para permitir a importação nos arquivos de teste.
 */

function classificarAlerta(valor) {
  if (valor > 80) return 'Crítico';
  if (valor > 50) return 'Alto';
  return 'Moderado';
}

function enviarNotificacao(alerta) {
  return `Notificação enviada: ${alerta}`;
}

function processarAlerta(valor) {
  const alerta = classificarAlerta(valor);
  return enviarNotificacao(alerta);
}

module.exports = {
  classificarAlerta,
  enviarNotificacao,
  processarAlerta,
};
