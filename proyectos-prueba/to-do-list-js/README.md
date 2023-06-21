### Nodos de DOM

Todos los elementos en nuestro árbol de DOM son nodos y todos los nodos pueden ser accedidos vía JavaScript. Los nodos pueden ser eliminados, creados o modificados. Durante el curso utilizamos el método `appendChild` que siempre es implementado al final del nodo, para colocar un nodo hijo dentro del nodo padre.

Existen otros métodos que podemos utilizar para manipular nodos:

- insertBefore(padre, hijo): Coloca un nodo antes del otro
- replaceChild(elemento1, elemento2): Sustituye el nodo del elemento 1 por el nodo del elemento 2
- removeChild(elemento): Remueve un nodo del árbol