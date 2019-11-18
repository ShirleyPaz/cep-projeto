# projeto_cep

Este projeto permite consultar as informações referentes a um cep. 
A API foi criada utilizando Node.js e o frontend com React.

## Requisitos
  - NPM v6.9.0
  - Node.js v12.6.0
  - Jest v24.9.0
  - Express v4.17.1
  - Request v2.88.0
  - React.js v16.11.0
  - testing-library/React v9.3.2

## Execução Frontend

Na pasta frontend, instalar os pacotes correspondentes com o comando abaixo: 
```bash
npm install
```
Executar o comando abaixo para executar a aplicação.
```bash
npm install
```

Para executar os testes e2e, executar o comando abaixo:
```bash
npm run test
```

## Execução Backend

Na pasta backend, instalar os pacotes correspondentes com o comando abaixo: 
```bash
npm install
```
Executar o comando abaixo para executar a aplicação. Será aberta a URL http://localhost:4000/
```bash
npm install
```
Para executar os testes unitários, executar o comando abaixo:
```bash
npm run test
```

## Endpoints API

A API consta com apenas 1 endpoint para consulta do CEP:
```bash
/consulta/:cep
```

## Respostas API

 - status: 400
message: "Cep inválido"




 - status: 406
message: "Cep não foi encontrado na base de dados"




 - status: 200
message: {
        cep: **string**,
        logradouro: **string**,
        localidade: **string**,
        uf: **string**
      },



