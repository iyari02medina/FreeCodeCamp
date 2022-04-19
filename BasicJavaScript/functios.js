// Write Reusable JavaScript with Functions

function functionName() {
  console.log("Hello World");
}
functionName();

// Passing Values to Functions with Arguments

function testFun(param1, param2) {
  console.log(param1, param2);
}
testFun("Japlin", "Fito");

// Return a Value from a Function with Return

function plusThree(num) {
  return num + 3;
}
const answer = plusThree(5);
console.log(answer)


function timesFive(num) {
  return num * 5;
}
console.log(timesFive(5))

// Global Scope and Functions

/* 
Las variables que se declaran sin las palabras clave leto constse crean automáticamente en el globalalcance. Esto puede crear consecuencias no deseadas en otras partes de su código o al ejecutar una función nuevamente. Siempre debe declarar sus variables con leto const.
 */

    /*
    var myGlobal = 10;

    function fun1() {
    oopsGlobal = 5;
    }


    function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
    } 
    */

// Local Scope and Functions

/* 
Las variables que se declaran dentro de una función, así como los parámetros de la función, tienen alcance local . Eso significa que solo son visibles dentro de esa función. */

function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
/* console.log(loc); // loc is not defined */

// Global vs. Local Scope in Functions

/*
 Es posible tener variables locales y globales con el mismo nombre. Cuando hace esto, la variable local tiene prioridad sobre la variable global. */

 const someVar = "Hat";

 function myFun() {
   const someVar = "Head";
   return someVar;
 }
 console.log(myFun())


 var outerWear = "T-Shirt";
 function myOutfit() {
   var outerWear = "sweater";
   return outerWear;
 }
 myOutfit();
 console.log(myOutfit())

 // Understanding Undefined Value returned from a Function

 let sum = 0;

 function addSum(num) {
   // addSumes una función sin returnsentencia. La función cambiará la sumvariable global pero el valor devuelto de la función es undefined.
   sum = sum + num;
 }

 console.log(addSum())

 // Assignment with a Returned Value

 let processed = 0;

 function processArg(num) {
   return (num + 3) / 5;
 }
 processed = processArg(7); // podemos tomar el valor de retorno de una función y asignarlo a una variable.
 console.log(processed)

 // Stand in Line

 function nextInLine(arr, item) {
     arr.push(item);
     var removed = arr.shift();
   return item
 }

 const testArr = [1, 2, 3, 4, 5];

 console.log("Before: " + JSON.stringify(testArr));
 console.log(nextInLine(testArr, 6));
 console.log("After: " + JSON.stringify(testArr));