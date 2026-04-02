# PLAN.md

## Planejamento da Solução

Este documento descreve o planejamento da implementação da aplicação de lista de presença, incluindo decisões de arquitetura, fluxo de dados e estratégia de desenvolvimento.

---

## Objetivo

Desenvolver uma aplicação Front End onde o usuário possa:

- preencher um formulário com nome e e-mail
- validar os dados informados
- salvar as informações em uma lista de presença
- visualizar os dados dinamicamente sem recarregar a página

---

## Estratégia Geral

A solução foi planejada com base nos seguintes princípios:

- separação de responsabilidades
- componentização
- reutilização de lógica
- uso de estado reativo (Signals)
- foco em experiência do usuário (UX)

---

## Arquitetura da Aplicação

A aplicação foi dividida em três principais camadas:

### 1. Componentes

#### PresenceForm
Responsável por:

- exibir o formulário
- controlar validações
- controlar estado do botão salvar
- enviar dados para o service

#### PresenceTable
Responsável por:

- exibir lista de presença
- permitir limpar dados
- permitir exportação (CSV e PDF)

---

### 2. Service (PresenceService)

Responsável por centralizar toda a lógica da aplicação:

- gerenciamento da lista de presença
- controle de loading (simulação de API)
- persistência em localStorage
- controle de modal de feedback
- exportação de dados (CSV e PDF)

Utiliza **Angular Signals** para gerenciamento de estado:

- entries
- loading
- modalOpen
- modalMessage

---

### 3. Interface de Dados

#### IPresenceItem

Define a estrutura dos dados:

- id
- name
- email
- createdAt

---

## Fluxo da Aplicação

1. Usuário preenche o formulário
2. Validações são aplicadas:
   - nome obrigatório
   - limite de caracteres
   - e-mail válido
3. Botão salvar é habilitado apenas quando válido
4. Ao clicar em salvar:
   - inicia loading (simulação de API - 10s)
   - inputs e botões são desabilitados
5. Após o loading:
   - dados são adicionados na lista
   - dados são persistidos no localStorage
   - modal de confirmação é exibido
6. Lista é atualizada automaticamente via Signals

---

## Decisões Técnicas

### Uso de Angular Signals

Motivo:

- simplificação do gerenciamento de estado
- atualização automática da UI
- menor necessidade de subscriptions (RxJS)

---

### Uso de Service

Motivo:

- centralizar regras de negócio
- evitar lógica duplicada nos componentes
- facilitar manutenção e escalabilidade

---

### Persistência com localStorage

Motivo:

- manter dados após reload
- simular comportamento de backend

---

### Simulação de API

- uso de delay de 10 segundos
- melhora percepção de fluxo assíncrono
- permite demonstrar controle de loading

---

## UX e Layout

### Layout Responsivo

- Desktop:
  - formulário à esquerda
  - tabela à direita
- Mobile:
  - layout vertical (formulário acima, tabela abaixo)

Motivo:

- melhor aproveitamento de espaço em telas maiores
- melhor legibilidade em dispositivos móveis

---

### Exibição em Tabela

Decisão de usar tabela ao invés de lista simples:

- melhor organização visual
- mais escalável para grandes volumes de dados
- melhor leitura das informações

---

### Feedback ao Usuário

- mensagens de erro nos campos
- desabilitação de botões durante loading
- modal de confirmação após inserção

---

## Funcionalidades Planejadas

### Obrigatórias

- formulário com validação
- botão salvar com controle de estado
- lista dinâmica
- loading simulado

---

### Extras (Melhoria da Solução)

- limpar tabela
- exportação CSV
- exportação PDF
- persistência em localStorage
- layout responsivo
- feedback visual (modal)

---

## Riscos e Cuidados

- garantir que validações funcionem corretamente
- evitar travamento da UI durante loading
- garantir consistência dos dados no localStorage
- tratar corretamente erros de parsing

---

## Evoluções Futuras

- integração com API real
- paginação da tabela
- filtros de busca
- edição e remoção individual de registros
- testes unitários

---

## Conclusão

O planejamento foi focado em entregar uma solução:

- clara e organizada
- alinhada com os requisitos do desafio
- com melhorias de UX e arquitetura
- preparada para evolução futura