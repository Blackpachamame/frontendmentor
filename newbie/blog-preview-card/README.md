<h1 align="center">Blog preview card</h1>

<div align="center">
   Esta es una solución al desafío de <a href="https://www.frontendmentor.io/">frontendmentor.io</a>.
</div>
<br>
<div align="center">
<img src="design/preview.jpg"></img>
  <h3>
    <a href="https://blackpachamame.github.io/frontendmentor/newbie/blog-preview-card/">
      En Vivo
    </a>
    <span> | </span>
    <a href="#">
      Solución
    </a>
   <span> | </span>
    <a href="https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS">
      Desafío
    </a>
  </h3>
</div>

## Tabla de contenido

- [Tabla de contenido](#tabla-de-contenido)
- [Descripción](#descripción)
  - [Desafío](#desafío)
- [Mi Procedimiento](#mi-procedimiento)
  - [Construido con](#construido-con)
  - [Lo que aprendí](#lo-que-aprendí)
    - [Beneficios](#beneficios)
  - [Recursos útiles](#recursos-útiles)
- [Autor](#autor)

## Descripción

### Desafío

Su desafío es construir la vista previa de una tarjeta de blog y lograr que se vea lo más parecido posible al diseño.

Puedes usar cualquier herramienta que te guste para ayudarte a completar el desafío. Entonces, si tienes algo que te gustaría practicar, no dudes en intentarlo.

Sus usuarios deberían poder:

- Ver los estados de `hover` y `focus` de todos los elementos interactivos de la página

## Mi Procedimiento

### Construido con

- HTML5
- CSS3
- Flexbox
- BEM

### Lo que aprendí

Para hacer que toda la tarjeta sea clickeable sin necesidad de envolver todo el contenido en un `<a>`, utilizamos pseudo-elementos (`::before`, `::after`) para extender el área clickeable del enlace y abarcar toda la tarjeta.

#### Beneficios
- La estructura semántica del HTML se mantiene correcta: el enlace solo envuelve el título.
- Usando `::before`, la tarjeta completa se vuelve clickeable sin necesidad de envolver todo el contenido en un `<a>`.
- El enlace sigue siendo accesible y compatible con las buenas prácticas de HTML y CSS.

### Recursos útiles

- A completar...

## Autor

- Github - [Blackpachamame](https://github.com/Blackpachamame)
- Frontend Mentor - [@Blackpachamame](https://www.frontendmentor.io/profile/Blackpachamame)
