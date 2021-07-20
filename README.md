# Repositório de exemplos do TypeScript

## Preparar o ambiente:

- Crie uma pasta;
- Com o **NPM** ou **YARN** inicie o projeto; <br/>
```
npm init -y
```
```
yarn init -y
```
- Instale o **TypeScript** como dependência de desenvolvimento;
```
npm install typescript -D
```
```
yarn add typescript -D
```
- Criar arquivo de configuração *tsconfig.json*;
```
npx tsc --init
```
```
yarn tsc --init
```

## Dica:
Existem várias formas de transpilar seu código **TypeScript**, como:
- **TSC (TypeScript Compiler):** já vem na instalação do TypeScript;
- **Babel**;
- **Sucrase**;

Em ambiente de desenvolvimento, utilize o **ts-node-dev**,
implementa as funcionalidades de Decorators, compila seus projetos e reinicia quando o arquivo é modificado.

```
npm install ts-node-dev -D
```
```
yarn add ts-node-dev -D
```

No **package.json**, crie um *script*:
```
"scripts": {
  "dev": "ts-node-dev ./src
}
```
