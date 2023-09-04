# Iniciando con React Route DOM

## Comenzando

```
npx create-react-app my-app
cd my-app
npm start
```

Luego abra `http://localhost:3000/` para ver su aplicación.

Cuando esté listo para implementar en producción, cree un paquete minimizado con `npm run build`.

## Instalando React Router DOM

`npm i react-router-dom`

## Install JSON Server

`npm install -g json-server`

Puede iniciar JSON Server en otros puertos con el indicador `--port` o `-p`:

`json-server --watch db.json -p 5000`

## Lo que aprendimos

- Hemos configurado rutas para componentes diversos utilizando condiciones con if.
- Vimos el problema de utilizar las condiciones if para la navegación de componentes.
- Mejoramos el código con la `biblioteca de React Router` y dejamos la responsabilidad de direccionar los componentes con la misma.
- Hemos creado un `componente 404` para cuando el usuario intente acceder alguna página que no existe.
- Vimos la diferencia entre una `SPA` (Single Page Application) y un `MPA` (Multi Pages Application).
- Montamos una navbar utilizando React Router para simular una MPA (Multi Pages Application).
- Cambiamos la tag `<a>` del html para que React pueda entender utilizando `Link`.
- Utilizamos la `biblioteca axios` para hacer requisiciones en el servidos para buscar artículos.
- Hicimos una requisición de un artículo específico pasando el id del curso utilizando `useEffect`.
- Mandamos el usuario para el componente 404 utilizando la función `useNavigate()`.
- Mejoramos la experiencia de buscar un artículo creando un filtro por categorías.
- Trabajamos con `rutas anidadas`.
- Vimos cómo crear una segunda camada de filtros para mostrar artículos de una subcategoría específica, mejorando la experiencia del usuario al buscar un artículo.
- Usamos el hook `useResolvedPath` para crear caminos dinámicos.

## Recursos útiles

- [Create React App](https://create-react-app.dev) - Documentación.
- [React Router](https://reactrouter.com/en/main) - Documentación.