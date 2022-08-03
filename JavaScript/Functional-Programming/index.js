// ### 1. Aprenda sobre la programación funcional
    // -> Funciones aisladas: no depende del estado del programa, que incluye variables globales que están sujetas a cambios.
    // -> Funciones puras: la misma entrada siempre da la misma salida
    // -> Funciones con efectos secundarios limitados: cualquier cambio o mutación en el estado del programa fuera de la función se controla cuidadosamente
    
    // Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';
const getTea = (numOfCups) => {
    const teaCups = [];
    for(let cups = 1; cups <= numOfCups; cups++){
        const teaCup = prepareTea();
        teaCups.push(teaCup)
    }
    return teaCups;
}
const tea4TeamFCC = getTea(4);
console.log(tea4TeamFCC);

// ### 2. Comprender la terminología de programación funcional
    // -> Las funciones que se pueden asignar a una variable, pasar a otra función o devolver desde otra función como cualquier otro valor normal, se denominan "first class functions." . 
    // -> Las funciones que toman una función como argumento o devuelven una función como valor de retorno se denominan "higher order functions".
    // -> Cuando las funciones se pasan o se devuelven desde otra función, las funciones que se pasaron o se devolvieron se pueden llamar lambda.

const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';
const getTea2 = (prepareTea, numOfCups) =>{
    const teaCups = [];
    for(let cups = 1; cups <= numOfCups; cups++){
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
}
const tea4GreenTeamFCC= getTea2(prepareGreenTea,1);
const tea4BlackTeamFCC = getTea2(prepareBlackTea, 2);
console.log(tea4GreenTeamFCC, tea4BlackTeamFCC)

// ### 3. Comprender los peligros del uso del código imperativo
// JavaScript ofrece muchos métodos predefinidos que manejan tareas comunes. Por ejemplo, en lugar de usar el for ciclo mencionado anteriormente, puede llamar al map método que maneja los detalles de iterar sobre una matriz.
//pestañas es una matriz de títulos de cada sitio abierto dentro de la ventana

// funcion constructora 
const Window = function(tabs) { 
    this.tabs = tabs; 
};
// Prototipos  
Window.prototype = {
    join : function(otherWindow) { // union de dos ventanas 
        this.tabs = this.tabs.concat(otherWindow.tabs)
        return this;
    },
    tabOpen : function(tab){ // abrir una pestaña al final
        this.tabs.push('new tab');
        return this;
    },
    tabClose : function(index) { // cerrar pestañas
        const tabsBeforeIndex = this.tabs.splice(0,index);
        const tabsAfterIndex = this.tabs.splice(1);
        this.tabs = tabsBeforeIndex.concat(tabsAfterIndex);
        return this;
    }

};
const workWindow = new Window(['Gmail', 'Slack']);
const socialWindow =  new Window(['FB', 'Twitter']);
const videoWindow = new Window(['Netflix', 'Youtube']);
const finalTabs = socialWindow
    .tabOpen()
    .join(videoWindow.tabClose(1))
    .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs)

// ### 4. Evite mutaciones y efectos secundarios mediante la programación funcional
// Recuerde que en la programación funcional, cambiar o alterar cosas se llama mutación , y el resultado se llama efecto secundario . Una función, idealmente, debería ser una función pura , lo que significa que no causa ningún efecto secundario.

        // el ejercicion no es relevante

// ### 5. Pasar argumentos para evitar la dependencia externa en una función
// Otro principio de la programación funcional es declarar siempre tus dependencias explícitamente. Esto significa que si una función depende de la presencia de una variable u objeto, pase esa variable u objeto directamente a la función como argumento.
// The global variable
let fixedValue = 4;
function incrementer(value) { 
return value + 1;
}
console.log(incrementer(fixedValue));

// ### 6. Refactorizar variables globales fuera de funciones
// -> No altere una variable u objeto: cree nuevas variables y objetos y devuélvalos si es necesario desde una función. Sugerencia: usar algo como const newArr = arrVar, where arrVaris a array simplemente creará una referencia a la variable existente y no una copia. Entonces, cambiar un valor en newArrcambiaría el valor en arrVar.
// -> Declarar parámetros de función: cualquier cálculo dentro de una función depende solo de los argumentos pasados ​​a la función, y no de ningún objeto o variable global.

const bookList = ['Principito', 'Biblia', 'Troya', 'Mafalda'];
function add(list, bookName) {
    return [...list,bookName] // crea una copia del array sin modificarlo
};
function remove(list, bookname){
    return list.filter(book=>book !== bookname)
};
var newBookList = add(bookList, "A Brief History of Time");
console.log(newBookList)
var newerBookList = remove(bookList, "Principito");
console.log(newerBookList)
// array no se modifico
console.log(bookList); 

// ### 7. Use el método de map para extraer datos de una matriz
// El mapmétodo itera sobre cada elemento de una matriz y devuelve una nueva matriz que contiene los resultados de llamar a la función de devolución de llamada en cada elemento. Hace esto sin mutar la matriz original.
// Cuando se utiliza la devolución de llamada, se pasan tres argumentos. El primer argumento es el elemento actual que se está procesando. El segundo es el índice de ese elemento y el tercero es la matriz sobre la que mapse llamó al método.

const watchList = [
  {
    Title: "Inception",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
  },
  {
    Title: "Batman",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
  },
  {
    Title: "Spider-man",
    imdbRating: "8.8",
    imdbVotes: "1,446,708",
  },
];
const ratings = watchList.map(item=>({
    Title: item.Title,
    rating: item.imdbRating
}))

console.log(ratings);
