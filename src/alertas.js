function classificarAlerta(valor) {
  if (valor > 80) return 'Critico';
  if (valor > 50) return 'Alto';
  return 'Moderado';
}
module.exports = { classificarAlerta };
