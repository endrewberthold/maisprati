# Lista de Exercícios 2 - Junho (Módulo 1)

Esta pasta contém os exercícios resolvidos durante o mês de junho. Todos os scripts foram escritos em **JavaScript**, utilizando **Node.js** e a biblioteca `prompt-sync` para realizar entrada de dados no terminal.

## Exercícios incluídos

```
$ tree
.
maisPraTI/
├── Mod1/
│   ├── ...
│   └── Lista-Exercicios-Junho/
└── ... ├── 1-Validacao-Datas.js
        ├── 2-Jogo-Adivinhacao.js
        ├── 3-Palavras-Unicas.js
        ├── 4-Fatorial-Recursivo.js
        ├── 5-Debounce.js
        ├── 6-Memoize.js
        ├── 7-Mapeamento-Ordenação.js
        ├── 8-Agrupamento-Propriedade.js
        ├── 9-Conversao-Formatos.js
        └── README.md
```
---

## Como configurar o ambiente local

### Clonando o repositório

1. Abra o terminal no local onde deseja salvar o projeto.
2. Execute o seguinte comando para clonar o repositório:

```bash
git clone https://gitlab.com/endrew.berthold/maisprati.git
```
Navegue até o diretório clonado.
```bash
cd maisPraTI
```
---
### Requisitos

- Node.js instalado
- Editor VS Code (Visual Studio Code)
- Terminal (PowerShell, bash, zsh, ou o terminal integrado do VSCode)

### Preparação do ambiente

- Instalar o Node.js \
  Baixe e instale a versão LTS recomendada em: https://nodejs.org

- Inicializar e instalar o prompt-sync \
  No terminal, dentro da raiz do projeto maisPraTI/, execute:
```bash
npm init -y
npm install prompt-sync
```
Execute Qualquer exercício com:
```bash
node nome-do-arquivo.js
```
Exemplo:
```bash
node 5-IMC.js
```
---
## VSCode + Code Runner

Para usar o Code Runner com entrada via prompt-sync:

- Instale a extensão Code Runner no VSCode.

No menu File > Preferences > Settings, clique em Open Settings (JSON) e adicione:
```json
"code-runner.runInTerminal": true
```
Isso garante que os scripts rodem no terminal.

---
## Observações

- Se surgir o erro Cannot find module 'prompt-sync', verifique se o node_modules/ foi gerado na raiz do projeto (maisPraTI/).

- Todos os arquivos podem ser executados de forma independente.

---