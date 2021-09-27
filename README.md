<img src="https://storage.googleapis.com/golden-wind/experts-club/capa-github.svg" />

## Configurando Microfrontends com Module Federation para carregar módulos remotos de URL dinâmica

Nesta aula, vamos compartilhar como fazer com que seus micro-frontends orquestrados por Module Federation possam se comunicar armazenando a URL dos módulos em variáveis de ambientes, sem precisar que eles estejam em um único repositório, um monorepo e sem precisar colocar hardcoded a url de consumo dos seus micro-frontends.

## Tecnologias 🧰

- [x] React como uma linguagem de IU
- [x] Webpack5 como module bundler + module federation plugin
- [x] External remotes plugin para gerenciar o consumo de url
- [x] TailwindCss UI como nosso kit de ferramentas de design

## Estrutura do Projeto 🏗

Na pasta raiz, temos os projetos:

- `header`: MFE criado em ReactJS que exporta o componente `header`
- `content`: MFE criado em ReactJS exportando o componente `content`
- `consumer`: projeto principal que consome o `header` e o `content`

## Expert

| [<img src="https://xesque.rocketseat.dev/users/avatar/profile-18684239-1608559236312.jpg" width="75px;"/>](https://github.com/mayckcoelho) |
| :----------------------------------------------------------------------------------------------------------------------------------------: |
|                                               [Mayck Coelho](https://github.com/mayckcoelho)                                               |
