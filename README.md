# Lista de Tarefas - Next.js

## Objetivo

Aplicação simples de gerenciamento de tarefas desenvolvida com Next.js (App Router), com foco em:

* Separação entre Server e Client Components
* Uso de hooks personalizados
* Testes unitários com React Testing Library

---

## Tecnologias

* Next.js
* React
* TypeScript
* Jest
* React Testing Library

---

## Funcionalidades

* Listagem de tarefas simuladas (API fake)
* Adição de novas tarefas
* Contagem automática de tarefas (hook personalizado)
* Validação de formulário

---

## Instalação

```bash
npm install
```

---

## Execução

```bash
npm run dev
```

Acesse: http://localhost:3000

---

## Testes

```bash
npm test
```

Os testes cobrem:

* Componente de formulário (`NovaTarefa`)
* Hook personalizado (`useContadorDeTarefas`)
* Fluxo principal da aplicação:

  * Renderização da lista
  * Adição de tarefas
  * Atualização do contador

---

## Estrutura

```
src/
  app/
  components/
  hooks/
  lib/
  types/
  __tests__/
```

---

## Observações

* Os dados são simulados em memória (não persistem após reload)
* O projeto foi estruturado para fins de aprendizado e prática de testes

```
```
