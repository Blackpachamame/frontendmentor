# Iniciando con Create React App

Create React App es una forma oficialmente admitida de crear aplicaciones React de una sola página. Como proyecto inicial haremos una página de colaboradores que debe contar con:

- Formulario para agregar un nuevo colaborador
- Formulario para agregar un nuevo equipo
- Ocultar/mostrar formularios
- Lista de colaboradores divididos por equipo
- Opción de marcar/desmarcar como favorito a un colaborador
- Eliminar colaborador
- Opción para editar el color de equipo
- Nos basaremos en el siguiente [diseño](https://www.figma.com/file/g0lPfF6MnBImDq7ube3STz/Intro-a-React-Org)

## [Sitio en vivo](https://org-alura-orcin.vercel.app)

## Comenzando

```
npx create-react-app my-app
cd my-app
npm start
```

Luego abra `http://localhost:3000/` para ver su aplicación.

Cuando esté listo para implementar en producción, cree un paquete minimizado con `npm run build`.
Puedes levantar un servidor estático con: `serve -s build`.

## Lo que aprendimos

- Creamos un nuevo proyecto de React con `create-react-app`
- Analizamos las dependencias de nuestro proyecto
- Analizamos los comandos disponibles en nuestro archivo `package.json`
- Creamos componentes funcionales
- Agregamos estilos CSS a nuestros componentes
- Instalamos `React Developer Tools` para poder inspeccionar nuestros componentes
- Generamos los componentes Formulario y CampoTexto
- Aprendimos cómo pasar `props` para un componente
- Trabajamos con elementos anidados utilizando la `prop children`
- Aprendimos cómo reaccionar a eventos del DOM como el `onSubmit` de nuestro form
- Controlar inputs utilizando `value` y `onChange`
- Manejar el `estado de un componente` utilizando el `hook useState`
- Trabajar con props que son funciones
- Cómo representar con un arreglo de objetos una lista
- A utilizar el `método map` y como este nos ayuda a generar nuevos componentes a partir de un arreglo
- Cada elemento generado con map necesita tener un prop especial llamada `key` la cual le permite a React tener una referencia a cada componente creado dinámicamente
- Actualizamos el estado de nuestros colaboradores agregando uno nuevo con la información que introducimos en el formulario
- Creamos los colaboradores con la información de cada uno a partir del objeto que los representa en el estado de colaboradores
- Como pasar la `props` a través de diferentes `componentes`
- Como instalar nuevas dependencias en tu aplicación
- Diferencia entre `export` y `export default`
- Como realizar la comunicación entre componentes hijos a padres
- La forma de cómo actualizar un arreglo de objetos y cómo react al estar al pendiente de esa información por medio del hook `useState` actualiza el DOM comparándolo con el `virtual DOM`

## Extra
Con el filtro `drop-shadow()` podemos darle un sombreado a las imágenes.

## Recursos útiles

- [Create React App](https://create-react-app.dev) - Documentación.
- [Uuid](https://github.com/uuidjs/uuid) - Para crear un UUID aleatorio.