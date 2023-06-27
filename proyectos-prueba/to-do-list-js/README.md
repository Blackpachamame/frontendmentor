# $\Huge\color{#d57589}{\texttt{Todo List}}$

### Seleccionando elementos

Utilizamos el método `querySelector` para recorrer el árbol del DOM y encontrar el elemento que queremos utilizando *JavaScript*. Pero, existen otro métodos que pueden ser utilizados con la misma finalidad.

- `document.getElementById(‘id’)` selecciona el elemento por el `id`
- `document.getElementsByClassName(‘clase’)` retorna un arreglo de los elementos por el nombre de la clase
- `document.getElementsByTagName(‘tag’)` retorna un arreglo de los elementos por el nombre del tag
- `document.querySelectorAll(“selector”)` regresa todos los elementos con el mismo nombre

### Nodos de DOM

Todos los elementos en nuestro árbol de DOM son nodos y todos los nodos pueden ser accedidos vía JavaScript. Los nodos pueden ser eliminados, creados o modificados. Durante el curso utilizamos el método `appendChild` que siempre es implementado al final del nodo, para colocar un nodo hijo dentro del nodo padre.

Existen otros métodos que podemos utilizar para manipular nodos:

- `insertBefore(padre, hijo)`: Coloca un nodo antes del otro
- `replaceChild(elemento1, elemento2)`: Sustituye el nodo del *elemento1* por el nodo del *elemento2*
- `removeChild(elemento)`: Remueve un nodo del árbol

### Extras

- **Immediately invoked function expression** o bien por sus siglas: IIFE, son funciones que en cuanto se declaran, se ejecutan.