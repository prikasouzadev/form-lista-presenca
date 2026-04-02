# Processo Seletivo MARKO - Front End

## Visão Geral

Este projeto foi desenvolvido como solução para o desafio técnico Front End da MARKO.

A aplicação consiste em uma interface de **lista de presença**, onde o usuário pode informar **nome e e-mail**, salvar os dados e visualizar os registros em tempo real, sem recarregamento da página.

A solução foi construída utilizando **Angular**, **TypeScript**, **Signals** e **Tailwind CSS**, com foco em:

- organização e clareza de código
- separação de responsabilidades
- experiência do usuário (UX)
- escalabilidade e manutenção

---

## Descrição da Solução

A aplicação foi estruturada de forma modular, separando responsabilidades entre componentes e serviço:

### Componentes

- **PresenceForm**
  - Responsável pelo formulário, validações e envio dos dados
  - Controle de estado do botão e feedback de erro

- **PresenceTable**
  - Responsável pela exibição da lista de presença
  - Ações de limpeza e exportação dos dados

### Serviço

- **PresenceService**
  - Centraliza a lógica da aplicação
  - Gerencia estado com **Angular Signals**
  - Simula chamada de API com loading
  - Persiste dados em `localStorage`
  - Controla modal de feedback ao usuário
  - Responsável pela exportação de dados (CSV e PDF)

### Tipagem

- Interface `IPresenceItem` para garantir consistência dos dados

---

## Funcionalidades Implementadas

### Requisitos Obrigatórios

- Imagem no topo do formulário (50x50px), centralizada horizontalmente
- Campo **Nome obrigatório**
- Campo **Email obrigatório**
- Validação de formato de e-mail
- Botão **Salvar** desabilitado enquanto o formulário for inválido
- Simulação de chamada de API com **loading de 10 segundos**
- Durante o loading:
  - inputs desabilitados
  - botão desabilitado
- Inserção de dados na lista **sem recarregar a página**

---

## Melhorias Implementadas (Além do Desafio)

Com foco em elevar a qualidade da aplicação e a experiência do usuário, foram adicionadas as seguintes melhorias:

### UX e Layout

- Layout com **formulário e lista lado a lado em telas maiores**
  - melhora a visualização simultânea dos dados
  - reduz necessidade de scroll
- Layout responsivo:
  - empilhamento automático em dispositivos móveis
- Lista exibida em formato de **tabela estruturada**
  - melhora legibilidade
  - organização superior ao formato textual simples proposto

---

### Feedback ao Usuário

- Exibição de mensagem ao usuário após inserção dos dados:
  - *"Seus dados foram inseridos na lista de presença"*

---

### Funcionalidades Extras

- **Limpar tabela**
  - Remove todos os registros de forma imediata (sem loading)
  - melhora controle do usuário sobre os dados

- **Exportação CSV**
  - Geração de arquivo `.csv` com os dados da lista
  - compatível com Excel e outras ferramentas

- **Exportação PDF**
  - Geração de arquivo `.pdf` com tabela formatada
  - uso da biblioteca `jsPDF` com `autoTable`

- **Persistência de dados**
  - Utilização de `localStorage`
  - mantém os dados mesmo após reload da página

---

## Tecnologias Utilizadas

- Angular
- TypeScript
- Angular Signals
- Reactive Forms
- Tailwind CSS
- jsPDF
- jspdf-autotable

---
## Uso de Inteligência Artificial (IA)

Durante o desenvolvimento deste projeto, foram utilizadas ferramentas de Inteligência Artificial ( CHatGPT) como apoio no processo de construção da solução.

A IA foi utilizada principalmente para:

- geração inicial de estrutura do formulário
- apoio na organização de layout com Tailwind CSS
- sugestões de validações e regras de negócio
- refinamento de UX e responsividade
- auxílio na separação de responsabilidades entre componentes e service
- apoio na escrita da documentação

---

### Prompt utilizado

O seguinte prompt foi utilizado como base para geração inicial da solução:

Crie um formulario em Angular utilizando Tailwind usando a imagem de inspiração porém utilizando as cores #343434 no backgrond e nos desaques (onde na imagem está o verde) utilizar a cor #ec1f27. Essas cores bases mais a cor branca devem ficar de uma forma global utiliando variaveis. os campos do formulário são Nome e E-maill e ambos deverão ser obrigatórios. No campo nome ele deverá permitir até 50 caracteres e no e-mail deverá validar se o formato digitado é padãro de e-mail. Quando o usuario não diigitar um dos campos deverá aprecer a msg "Campo Obrigatório". Caso no campo nome seja digitado masi que o permitido aparecer a msg "Campo permite até 50 caracteres"e no campo e-mail se or digitado fora do padrão aparecer a msg "digite um e-mail válido". Ao final do formulário deve ter um botão escrito salvar que ficará desabilitado e o mesmo se habilita após os dois campos estarem preenchidos corretamente. Após esses dados serem digitados corretamente os dados deverão aparecer em uma lista de presença a qual quero que apareça em um formato de tabela e sses dados deverão ser inseridos dinamicamente, sem recarregar a página. Essa tabela deverá ter um scroll nela para transitar entre os dados digitados pois a altura da tabela deverá ser a mesma do formulário e na versão desktop um deve ficar ao lado do outro sendo que o formulário deverá ficar ao lado esquerdo e a tabela ao lado direito. Na versão mobile o formulario fica em cima e a tabela. abaixo do formulário mas em ambos com a mesma altura e mesma função do desktop. abaixo da tabela deverá ter um botão que vai ficar habiltado quando algum dado for inserido para que o usuario possa baixar. em formato de pdf e outro botão no formato cvs. acima da tabela quero que tenha um botão limpar tabela e os dados deverão ser excluidos. Esses dados devem ser salvos no localstorage com um loading temporário de 10 segundos e quero que a logica fique em um service simulando uma chamada para api lembrando que todos os campos e botões devem ficar desabilitados enquanto o loading não fnalizar. durante o loading deixe umm cor mais escurado entre a tela o o carregamento do loading para similuar bem que os botões estão desabilitados. antes dos dados serem inseridos e depois do loading aparecer um opo-up no estilo modal com a msg "seus dados foram inseridos na lista de presença" Use signals, e quero dividido em dois componentes. 1 - presence-form 2 - presence table
---

---

### Considerações

- todo o código foi **revisado e ajustado manualmente**
- as decisões de arquitetura foram **validadas e refinadas**
- a implementação final foi adaptada para garantir:
  - aderência aos requisitos do desafio
  - organização e boas práticas
  - melhoria de experiência do usuário (UX)

---


## Como Rodar o Projeto

### Pré-requisitos

Antes de iniciar, é necessário ter instalado na máquina:
- Node.js (versão 18+ recomendada)
- npm
- Angular CLI

### Instalação do Angular CLI

1 - Caso ainda não tenha o Angular CLI instalado globalmente, execute:
npm install -g @angular/cli


2 - Para fazer o clone do projeto no git:
git clone <url-do-repositorio>

3 - Acesse a pasta do projeto:
cd FORM-LISTA-PRESENCA

4 - Instale as dependências do projeto:
npm install

5 - Execute a aplicação em ambiente de desenvolvimento:
ng serve

6 - Acesso o link no navegador:
http://localhost:4200/


***Build de Produção***
1 - Para gerar a versão de produção do projeto, execute:
ng build

2 - Os arquivos finais serão gerados na pasta:
dist/