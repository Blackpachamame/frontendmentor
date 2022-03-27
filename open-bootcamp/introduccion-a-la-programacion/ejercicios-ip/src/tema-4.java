/* - Usando un if, crear una condición que compare si la variable numeroIf es positivo, negativo, o 0.
    
    Pista: Los números inferiores a 0 son negativos y los superiores, positivos.
    
- Crea un bucle While, este bucle tendrá que tener como condición que la 
variable numeroWhile sea inferior a 3, el bloque de código que tendrá el bucle deberá:
    - Incrementar el valor de la variable en uno cada vez que se ejecute.
    - Mostrarlo por pantalla cada vez que se ejecute.

- Para el bucle Do While, deberás crear la misma estructura que en el While, 
pero solo se debe ejecutar una vez.

- Para el bucle For, crea una variable numeroFor, 
esta variable tendrá como valor 0 y su condición será que la variable sea igual o menor que 3, 
se irá incrementando en 1 su valor cada vez que se ejecute y deberá mostrarse por pantalla.

- Por último, para el Switch, deberás crear la variable estacion, 
y distintos *case* para las cuatro estaciones del año. Dependiendo del valor de la variable estacion 
se deberá mandar un mensaje por consola informando de la estación en la que está. 
También habrá que poner un default para cuando el valor de la variable no sea una estación. */

public class Main {

    public static void main(String[] args) {
        int unNumero = 0;
        esPositivo(unNumero);
        incrementarDoWhile();
        incrementarWhile();
        incrementarFor();
        incrementarSwitch();
    }

    public static void esPositivo(int numeroIf) {

        if (numeroIf > 0) {
            System.out.println("El número es positivo.");
        } else {
            if (numeroIf == 0) {
                System.out.println("El número es cero.");
            } else {
                System.out.println("El número es negativo.");
            }
        }
    }

    /*
     * Para el bucle For, crea una variable numeroFor,
     * esta variable tendrá como valor 0 y su condición será que la variable sea
     * igual o menor que 3,
     * se irá incrementando en 1 su valor cada vez que se ejecute y deberá mostrarse
     * por pantalla.
     */
    public static void incrementarFor() {

        for (int numeroFor = 0; numeroFor <= 3; numeroFor++) {
            System.out.println(numeroFor);
        }

    }

    /*
     * Para el bucle Do While, deberás crear la misma estructura que en el While,
     * pero solo se debe ejecutar una vez.
     */
    public static void incrementarDoWhile() {
        int numeroDoWhile = 0;
        do {
            numeroDoWhile++;
            System.out.println(numeroDoWhile);
        } while (4 < 3);
    }

    /*
     * Crea un bucle While, este bucle tendrá que tener como condición que la
     * variable numeroWhile sea inferior a 3, el bloque de código que tendrá el
     * bucle deberá:
     * - Incrementar el valor de la variable en uno cada vez que se ejecute.
     * - Mostrarlo por pantalla cada vez que se ejecute.
     */
    public static void incrementarWhile() {
        int numeroWhile = 0;
        while (numeroWhile < 3) {
            numeroWhile++;
            System.out.println(numeroWhile);
        }
    }

    /*
     * Por último, para el Switch, deberás crear la variable estacion,
     * y distintos *case* para las cuatro estaciones del año. Dependiendo del valor
     * de la variable estacion
     * se deberá mandar un mensaje por consola informando de la estación en la que
     * está.
     * También habrá que poner un default para cuando el valor de la variable no sea
     * una estación.
     */
    public static void incrementarSwitch() {

        String estacion = "VERANO";
        switch (estacion) {
            case "VERANO":
                System.out.println("Es verano");
            case "INVIERNO":
                System.out.println("Es invierno");
            case "OTOÑO":
                System.out.println("Es otoño");
            case "PRIMAVERA":
                System.out.println("Es primavera");
            default:
                System.out.println("No es una estación");
        }

    }

}