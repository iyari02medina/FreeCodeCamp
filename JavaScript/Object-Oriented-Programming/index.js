// ### 1. Crear un objeto JavaScript básico

let dog = {
  name: "Japlin",
  numLegs: 4,
};

// ### 2. Use la notación de puntos para acceder a las propiedades de un objeto

// objeto # 1.
console.log(dog.name);
console.log(dog.numLegs);

// ### 3. Crear un método en un objeto

// Los métodos son propiedades que son funciones.

// objeto #1
dog.sayLegs = () => `This dog has ${dog.numLegs} legs.`;
console.log(dog.sayLegs());

// ### 4. Haga que el código sea más reutilizable con esta palabra clave

// this. se refiere al objeto con el que está asociado el método. Si el nombre del objeto se cambia, no es necesario encontrar todas las referencias el código.

let dog2 = {
  numLegs: 4,
  sayLegs: function () {
    return "This dog has " + this.numLegs + " legs.";
  },
};
console.log(dog.sayLegs());

// ### 5. Definir una función constructora
// Los constructores son funciones que crean nuevos objetos. Definen propiedades y comportamientos que pertenecerán al nuevo objeto. Piense en ellos como un modelo para la creación de nuevos objetos.
// -> Los constructores se definen con un nombre en mayúsculas para distinguirlos de otras funciones que no lo son constructors.
// -> Los constructores usan la palabra clave this para establecer las propiedades del objeto que crearán. Dentro del constructor, this se refiere al nuevo objeto que creará.
// -> Los constructores definen propiedades y comportamientos en lugar de devolver un valor como lo harían otras funciones.

function Dog() {
  (this.name = "Japlin"), (this.color = "Golden"), (this.numLegs = 4);
}

// ### 6. Usar un constructor para crear objetos

// objeto #5.
let hound = new Dog();

// ### 7.Extender constructores para recibir argumentos
//  Para crear más fácilmente diferentes objetos, puede diseñar su constructor para aceptar parámetros:

function Dog2(name, color) {
  (this.name = name), (this.color = color), (this.numLegs = 4);
}
let terrier = new Dog2("Fito", "White");
console.log(terrier);

// ### 8. Verificar el constructor de un objeto con instance of
// Cada vez que una función constructora crea un nuevo objeto, se dice que ese objeto es una instancia de su constructor. JavaScript brinda una manera conveniente de verificar esto con el instance of operador. instance of le permite comparar un objeto con un constructor, devolviendo true o false en función de si ese objeto se creó o no con el constructor.

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
let myHouse = new House(3);
console.log(myHouse instanceof House);

// ### 9. Comprender las propiedades propias
// se llaman propiedades propias , porque se definen directamente en el objeto de instancia. Eso significa que el emento creado con una funcion constructora tiene su propia copia separada de estas propiedades.

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}
let canary = new Bird("Tweety");
let ownProps = [];
for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}
console.log(ownProps);

//  ### 10. Utilice las propiedades del prototipo para reducir el código duplicado
// usar el prototype of en el constructor. Las propiedades de prototype se comparten entre TODAS las instancias de del constructor.

function Dog3(name) {
  this.name = name;
}
Dog3.prototype.numLegs = 4;
let beagle = new Dog3("Snoopy");
console.log(beagle);

// ### 11. Iterar sobre todas las propiedades
// Las propiedades propias se definen directamente en la propia instancia del objeto. Y las propiedades del prototipo se definen en el archivo prototype

function Dog4(name) {
  this.name = name;
}
Dog4.prototype.numLegs = 4;
let beagle2 = new Dog4("Snoopy");
let ownProps2 = [];
let prototypeProps2 = [];
for (let property in beagle2) {
  if (beagle2.hasOwnProperty(property)) {
    ownProps2.push(property);
  } else {
    prototypeProps2.push(property);
  }
}
console.log(ownProps2);
console.log(prototypeProps2);

// ### 12. Comprender la propiedad del constructor
//  la constructor propiedad es una referencia a la función constructora que creó la instancia. La ventaja de la constructor propiedad es que es posible verificar esta propiedad para averiguar qué tipo de objeto es.

// objeto #11.
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog4) {
    return true;
  } else {
    return false;
  }
}
console.log(joinDogFraternity(beagle2));

// ### 13. Cambiar el prototipo a un nuevo objeto
// Una forma más eficiente es establecer el prototype en un nuevo objeto que ya contiene las propiedades. De esta manera, las propiedades se agregan todas a la vez:

function Dog5(name) {
  this.name = name;
}
Dog5.prototype = {
  numLegs: 4,
  eat: function () {},
  describe: function () {},
};

// ### 14. Recuerde establecer la propiedad del constructor al cambiar el prototipo
// Hay un efecto secundario crucial de configurar manualmente el prototipo en un nuevo objeto. ¡Borra la constructor propiedad! Esta propiedad se puede usar para verificar qué función constructora creó la instancia
// Para solucionar esto, siempre que un prototipo se establezca manualmente en un nuevo objeto, recuerde definir la constructorpropiedad.

Bird.prototype = {
  constructor: Bird,
  numLegs: 2,
  eat: function () {
    console.log("nom nom nom");
  },
};

// ### 15. Entender de dónde viene el prototipo de un objeto
// Al igual que las personas heredan genes de sus padres, un objeto hereda prototypedirectamente de la función constructora que lo creó. Puedes mostrar esta relación con el isPrototypeOf método:

function Dog6(name) {
  this.name = name;
}
let beagle3 = new Dog6("Snoopy");
console.log(Dog6.prototype.isPrototypeOf(beagle3));

// ### 16.Comprender la cadena de prototipos
// .Todos los objetos en JavaScript (con algunas excepciones) tienen una extensión prototype. Además, un objeto en prototype sí mismo es un objeto.
function Bird2(name) {
  this.name = name;
}
console.log(typeof Bird2.prototype);
// ¡ Porque a prototype es un objeto, a prototype puede tener el suyo propio prototype! En este caso, el prototypede Bird.prototypees Object.prototype:
console.log(Object.prototype.isPrototypeOf(Bird2.prototype));
let duck = new Bird2("Donald");
console.log(duck.hasOwnProperty("name"));

// ### 17. Usa la herencia para no repetirte
// Hay un principio en la programación llamado Don't Repeat Yourself (DRY)
// El eat metodo se repetia en dos lugares. El código se puede editar para seguir el principio DRY creando un supertype(o padre) llamado Animal:
function Animal() {}
Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};
function Cat(name) {
  this.name = name;
}
Cat.prototype = {
  constructor: Cat,
};
function Bear(name) {
  this.name = name;
}
Bear.prototype = {
  constructor: Bear,
};

// ### 18. Heredar comportamientos de un supertipo
// Utiliza una técnica llamada herencia. Este desafío cubre el primer paso: crear una instancia del supertype(o padre). Ya conoce una forma de crear una instancia de Animaluso del newoperador:

//supertype #17
// let animal = new Animal(); -> Hay algunas desventajas al usar esta sintaxis para la herencia
let animal = Object.create(Animal.prototype);

// Object.create(obj) crea un nuevo objeto y lo establece obj como el nuevo objeto prototype. Recuerde que prototypees como la "receta" para crear un objeto. Al configurar el prototypede animalpara que sea el prototypede Animal, le está dando a la animalinstancia la misma "receta" que cualquier otra instancia de Animal.
animal.eat();
console.log(animal instanceof Animal);

// ### 19. Establecer el prototipo del niño en una instancia del padre
//  configurar el prototypedel subtipo (o secundario), en este caso, Birdpara que sea una instancia de constructor principal.
function Animal2() {}
Animal2.prototype = {
  constructor: Animal2,
  eat: function () {
    console.log("nom nom nom");
  },
};
function Dog7() {}
Dog7.prototype = Object.create(Animal2.prototype);
let beagle4 = new Dog7();
console.log(beagle4);

// ### 20. Restablecer una propiedad de constructor heredada
// Cuando un objeto hereda su prototypepropiedad de otro objeto, también hereda la propiedad constructora del supertipo.
// ejemplo
// function Bird() {}
// Bird.prototype = Object.create(Animal.prototype);
// let duck = new Bird();
// duck.constructor;

// Pero duck y todas las instancias de Bird deben mostrar que fueron construidas por Bird y no Animal. Para hacerlo, puede establecer manualmente la propiedad del constructor del Bird objeto Bird:
// Bird.prototype.constructor = Bird;

// ### 21. Agregar métodos después de la herencia
// Una función constructora que hereda su prototypeobjeto de una función constructora de supertipo aún puede tener sus propios métodos además de los métodos heredados.

function Animal3() {}
Animal3.prototype.eat = function () {
  console.log("nom nom nom");
};
function Bird3() {}
Bird3.prototype = Object.create(Animal3.prototype);
Bird3.prototype.constructor = Bird3;

// Además de lo que se hereda de Animal, desea agregar un comportamiento que sea exclusivo de los Birdobjetos. Aquí, Birdobtendrá una fly()función. Las funciones se agregan de Bird's prototypela misma manera que cualquier función constructora:
Bird3.prototype.fly = function () {
  console.log("I'm flying!");
};
let duck2 = new Bird3();
duck2.eat();
duck2.fly();

// ### 23. Anular métodos heredados
// Es posible anular un método heredado. Se hace de la misma manera: agregando un método para ChildObject.prototypeusar el mismo nombre de método que el que se va a anular. Aquí hay un ejemplo de Birdcómo anular el eat()método heredado de Animal:

    // function Animal() {}
    // Animal.prototype.eat = function () {
    //   return "nom nom nom";
    // };
    // function Bird() {}

    // Bird.prototype = Object.create(Animal.prototype);

    // Bird.prototype.eat = function () {
    //   return "peck peck peck";
    // };

// ### 24. Use un Mixin para agregar un comportamiento común entre objetos no relacionados
// Para objetos no relacionados, es mejor usar mixins . Un mixin permite que otros objetos usen una colección de funciones.

let flyMixin = function(obj){
  obj.fly = function(){
    return ('Flying, wooosh');
  }
};
let pajaro = {
  name: 'Donald',
  numLegs: 2
};
let plane = {
  model: '666',
  numPassengers: 524
};
flyMixin(pajaro);
flyMixin(plane);
console.log(pajaro.fly())
console.log(plane.fly())

// ### 25. Use Closure to Protect Properties Within an Object from Being Modified Externally
// La forma más sencilla de hacer que esta propiedad pública sea privada es creando una variable dentro de la función constructora. Esto cambia el alcance de esa variable para que esté dentro de la función constructora en lugar de estar disponible globalmente. De esta manera, solo se puede acceder a la variable y cambiarla mediante métodos también dentro de la función constructora.
function Bird4() {
 let hatchedEgg = 10;
 this.getHatchedEggCount = function(){
  return hatchedEgg;
 }
};
let ducky = new Bird4();
console.log(ducky.getHatchedEggCount())

// ### 26. función inmediatamente invocada / Immediately Invoked Function Expression (IIFE)
// Tenga en cuenta que la función no tiene nombre y no se almacena en una variable. Los dos paréntesis () al final de la expresión de la función hacen que se ejecute o invoque inmediatamente. Este patrón se conoce como una expresión de función invocada inmediatamente o IIFE .

    // ((function(){
    //   console.log('A cozy nest is ready ')
    // })());

// ### 27. Use un IIFE para crear un módulo
// Una expresión de función inmediatamente invocada (IIFE) se usa a menudo para agrupar la funcionalidad relacionada en un solo objeto o módulo .
// Podemos agrupar mixins en un módulo de la siguiente manera:
let motionModule = (function () {
  return {
    glideMixin: function (obj) {
      obj.glide = function () {
        return "Gliding on the water";
      };
    },
    flyMixin: function (obj) {
      obj.fly = function () {
        return "Flying, wooosh!";
      };
    },
  };
})();
motionModule.glideMixin(ducky)
console.log(ducky.glide())
