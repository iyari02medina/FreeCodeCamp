//  ### 1. Utilice la consola de JavaScript para verificar el valor de una variable

/* El console.log()método, que "imprime" la salida de lo que está entre paréntesis en la consola, probablemente será la herramienta de depuración más útil. Ubicarlo en puntos estratégicos de su código puede mostrarle los valores intermedios de las variables. Es una buena práctica tener una idea de cuál debería ser el resultado antes de ver qué es. Tener puntos de control para ver el estado de sus cálculos a lo largo de su código ayudará a reducir dónde está el problema. */

// ### 3. Use typeof para verificar el tipo de una variable

/* Puede utilizar typeofpara comprobar la estructura de datos, o el tipo, de una variable. JavaScript reconoce siete tipos de datos primitivos (inmutables): Boolean, Null, Undefined, Number, String( Symbolnuevo con ES6) y BigInt(nuevo con ES2020), y un tipo para elementos mutables: Object. Tenga en cuenta que en JavaScript, las matrices son técnicamente un tipo de objeto.
 */

// ### Tenga cuidado al reinicializar variables dentro de un bucle

/* A veces es necesario guardar información, incrementar contadores o restablecer variables dentro de un ciclo. Un problema potencial es cuando las variables deben reiniciarse y no lo hacen, o viceversa. Esto es particularmente peligroso si reinicia accidentalmente la variable que se está utilizando para la condición del terminal, lo que provoca un ciclo infinito.

La impresión de valores de variables con cada ciclo de su bucle console.log()puede descubrir comportamientos defectuosos relacionados con el restablecimiento o la falla al restablecer una variable.
 */


