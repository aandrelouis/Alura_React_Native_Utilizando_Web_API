<h1 align="center">
    <img alt="FicandoOnline" title="#FicandoOnline" src=".images/header.jpg" width="100%" />
</h1>

# ⚛️ React Native: utilizando Web API

O projeto foi desenvolvido durante do curso **React Native: utilizando Web API** em que é feita uma aplicação em React Native que permite salvar um perfil com informações como nome da pessoa e uma foto. Além disso, possibilita consultar um repositório que armazena alguns dados. O aplicativo consome uma API externa, no caso uma fake API com json-server.


![foto1](https://github.com/aandrelouis/Alura_React_Native_Utilizando_Web_API/blob/main/assets/App/foto.png)

<h4 align="center"> 
	AluraHub 
</h4>

## :information_source: O que é o AluraHub?

O AluraHub é uma aplicação feita em React Native que permite salvar um perfil com informações como nome da pessoa e uma foto, e possibilita consultar um repositório que armazena dados.

Como ele funciona? O app consome uma API externa, no caso, a API pública do Github ou uma fake API com json-server.


## 🧑‍💻 Tecnologias

Esse projeto foi desenvolvido com a utilização das seguintes tecnologias:
- [React Native][rn]
- `Expo`: tecnologia para simplificar o ambiente de desenvolvimento
- `Componentes React Native`: componentes já existentes básicos da tecnologia para compor a tela
- `Componentes customizados`: criação e utilização de componentes customizados
- `StyleSheet`: estilização básica de componentes
- `Json Server`: Para criação de fake Api
- `Web APi`: Através de requisições conectar a aplicação com outras aplicações
- `Hooks`: Uso de Hooks para organização dos estados dentro do componente

## :information_source: Como usar

Para copiar e executar essa aplicação, você precisa de três pré-requisitos: [Git](https://git-scm.com), [Node.js][nodejs] + [Yarn][yarn] intalados no seu computador.



## 🛠️ Abrir e rodar o projeto

```bash
# Clonar esse repositório
$ git clone https://github.com/aandrelouis/Alura_React_Native_Utilizando_Web_API.git
# Vá para o ropositório
$ cd Alura_React_Native_Utilizando_Web_API
# Agora que já tem a pasta do projeto na sua máquina, dentro dela instale as dependências:
$ npm install
# Então rodar o projeto:
$ npm start
```

## 🛠️  Executar a Web API

```bash
# Execute em outro terminal (dentro da pasta AluraCommerce)
# Lembre-se de alterar o endereco ip (192.168.5.123) para o do seu computador!
$ json-server --watch --host 192.168.5.123 db.json
```

[nodejs]: https://nodejs.org/
[expo]: https://docs.expo.dev/
[rn]: https://facebook.github.io/react-native/
[yarn]: https://yarnpkg.com/
