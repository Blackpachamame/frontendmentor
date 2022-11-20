<p align="center">
  <a href="https://quasar.dev" target="blank"><img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" width="200" alt="Quasar Logo" /></a>
</p>

## Requisitos

```
Node 12+ for Quasar CLI with Webpack, Node 14+ for Quasar CLI with Vite.
Yarn v1 (strongly recommended), PNPM, or NPM.
```

## Instalación Quasar

- Debemos estar parados en la carpeta del frontend: `cd frontEndTpFinal`

`npm i -g @quasar/cli`
`npm init quasar`

## ¿Cómo levantar el proyecto de quasar?

- Instalamos dependencias: `npm install`
- Levantamos el proyecto: `quasar dev`

Lo visualizamos en `http://localhost:9000/`

## ¿Errores / Advertencias?

1. Error de linebreak-style en windows: **`Expected linebreaks to be 'LF' but found 'CRLF' linebreak-style`**.

Solución: Solución completa en [Stackoverflow](https://stackoverflow.com/questions/39114446/how-can-i-write-a-eslint-rule-for-linebreak-style-changing-depending-on-windo/43008668#43008668).

```
module.exports = {
  extends: 'google',
  quotes: [2, 'single'],
  globals: {
    SwaggerEditor: false
  },
  env: {
    browser: true
  },
  rules:{
    // windows linebreaks when not in production environment
    "linebreak-style": ["error", process.env.NODE_ENV === 'prod' ? "unix" : "windows"] // <----------
  }
};
```

2. Advertencia de soporte de typescript

```
WARNING: You are currently running a version of TypeScript which is not officially supported by @typescript-eslint/typescript-estree.

You may find that it works just fine, or you may not.

SUPPORTED TYPESCRIPT VERSIONS: >=3.3.1 <4.8.0

YOUR TYPESCRIPT VERSION: 4.8.2

Please only submit bug reports when using the officially supported version.
```

Solución: Pasarse a una versión anterior que tenga soporte. De todas formas, esta advertencia no afecta en el proyecto en general, solo es un mensaje molesto al momento de levantar el servidor.

## Instalación Capacitor

- Deberá instalar Android Studio y el SDK de la plataforma Android en su máquina. Puede [descargar Android Studio aquí](https://developer.android.com/studio) y seguir estos [pasos de instalación](https://developer.android.com/studio/install.html) después.

- Asegúrese de que después de instalar el SDK de Android acepte sus licencias. Abra la terminal y vaya a la carpeta donde se instaló el SDK, en tools/bin y llame a sdkmanager --licenses.

- Continuar con la instalación según sistema operativo: [Guía para integrar Capacitor a Quasar](https://quasar.dev/quasar-cli-vite/developing-capacitor-apps/introduction)

## Add Capacitor Quasar Mode

- Para desarrollar/construir una aplicación móvil, necesitamos agregar el modo Capacitor a nuestro proyecto Quasar. Esto usará Capacitor CLI para generar un proyecto Capacitor en la carpeta /src-capacitor: `quasar mode add capacitor`

## Start Developing

- Para iniciar un servidor de desarrollo con HMR, ejecute el siguiente comando:: `quasar dev -m capacitor -T android` o `quasar build -m capacitor -T android`

- Una vez que el servidor de desarrollo esté listo, su IDE se abrirá (Android Studio o Xcode) y desde allí puede seleccionar manualmente el emulador (¡o varios simultáneamente!) e instalar la aplicación de desarrollo en él/ellos. También puede ejecutar la aplicación de desarrollo en un dispositivo móvil o tablet.

## Bibliografía

- [Documentación de Quasar](https://quasar.dev)
- [Foro de Quasar](https://github.com/quasarframework/quasar/discussions/)
- [Comunidad de Quasar en Discord](https://discord.com/invite/5TDhbDg)
- [Descargar Android Studio](https://developer.android.com/studio)
- [Documentación de Vue](https://vuejs.org/guide/introduction.html)
