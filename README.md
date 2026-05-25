Relatório de Atividade Prática - Aula 08

Disciplina: Integração e Entrega Contínua (IEC)

Tema: Relatórios de Cobertura, Vulnerabilidade e Badges no README

Estudante: Alisson Gritti

1. Exercício 1: Adição do script de cobertura no package.json

Descrição: Configuração do script test:coverage no arquivo package.json para mapear se os testes estão cobrindo todas as linhas do módulo de queimadas do INPE.

Justificativa: Garantir que 100% da lógica crítica seja testada evita falhas em produção que colocariam populações em risco real.

Evidência: (Insira aqui o print do seu arquivo package.json mostrando a linha "test:coverage": "jest --coverage")

2. Exercício 2: Execução de Testes com Cobertura Local

Descrição: Execução local do comando de cobertura para validar as funções de monitoramento climático.

Evidência:
(Insira aqui o print do terminal rodando npm run test:coverage mostrando a tabela de cobertura com 100% de sucesso)

3. Exercício 3 e 4: Configuração de Pipeline e Codecov

Descrição: Configuração do pipeline do GitHub Actions (.github/workflows/ci.yml) para rodar os testes automaticamente em cada Pull Request para a branch main, integrando o envio dos relatórios históricos ao Codecov para auditoria contínua.

Evidência:
(Insira aqui o print da aba "Actions" no GitHub mostrando o pipeline executando o job com sucesso)

4. Exercício 5: Badges no README

Descrição: Implementação de Badges dinâmicas no topo do README.md do projeto para dar visibilidade instantânea da saúde do build e da cobertura aos coordenadores e stakeholders do INPE.
