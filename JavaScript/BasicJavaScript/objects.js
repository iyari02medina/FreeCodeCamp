// Build JavaScript Objects

var cat = {
  name: "Whiskers",
  legs: 4,
  tails: 1,
  enemies: ["Water", "Dogs"],
};
console.log(cat.enemies);

// Accessing Object Properties with Dot Notation

var testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats"
};
var hatValue = testObj.hat; 
var shirtValue = testObj.shirt;
console.log(hatValue);
console.log(shirtValue);

// Accessing Object Properties with Bracket Notation

var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

var entreeValue = testObj["an entree"]; 
var drinkValue = testObj["the drink"]; 
console.log(entreeValue);
console.log(drinkValue);

// Accessing Object Properties with Variables 

var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

var playerNumber = 16; 
var player = testObj[playerNumber];
console.log(player);

// Updating Object Properties

var myDog = {
  name: "Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"]
};

myDog.name = "Happy Coder";
console.log(myDog.name);

// Add New Properties to a JavaScript Object

var myDog = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
};
myDog.bark = "woof";
console.log(myDog);

// Delete Properties from a JavaScript Object

var ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["everything!"],
  bark: "bow-wow",
};
delete ourDog.bark;
console.log(ourDog)

var myDog2 = {
  name: "Happy Coder",
  legs: 4,
  tails: 1,
  friends: ["freeCodeCamp Campers"],
  bark: "woof",
};
delete myDog.tails;
console.log(myDog2);

// Using Objects for Lookups

function phoneticLookup(val) {
  var result = "";
  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };
  result = lookup[val];
  return result;  
}
console.log(phoneticLookup("charlie"))

// Testing Objects for Properties

const myObj = {
  top: "hat",
  bottom: "pants",
};
console.log(myObj.hasOwnProperty("top"));
console.log(myObj.hasOwnProperty("middle"));


function checkObj(obj, checkProp) { 
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}

// Manipulating Complex Objects

var myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
  {
    artist: "Deep Purple",
    title: "Smoke on the water",
    release_year: 1976,
    formats: ["CD", "8T", "LP"],
  },
];

// Accessing Nested Objects

const ourStorage = {
  desk: {
    drawer: "stapler",
  },
  cabinet: {
    "top drawer": {
      folder1: "a file",
      folder2: "secrets",
    },
    "bottom drawer": "soda",
  },
};

console.log(ourStorage.cabinet["top drawer"].folder2);
console.log(ourStorage.desk.drawer);

// Accessing Nested Arrays

const ourPets = [
  {
    animalType: "cat",
    names: ["Meowzer", "Fluffy", "Kit-Cat"],
  },
  {
    animalType: "dog",
    names: ["Spot", "Bowser", "Frankie"],
  },
];
console.log(ourPets[0].names[1]);
console.log(ourPets[1].names[0]);


var myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"]
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"]
  }
];
var secondTree = myPlants[1].list[1];
console.log(secondTree)

// / / / / / / / / / / / / / / / / / / / / Record Collection / / / / / / / / / / / / / / / / / / / / 
/* 
Colección de registros
Se le proporciona un objeto literal que representa una parte de su colección de álbumes musicales. Cada álbum tiene un número de identificación único como clave y varias otras propiedades. No todos los álbumes tienen información completa.

Comienza con una updateRecordsfunción que toma un objeto literal, recordsque contiene la colección de álbumes musicales, un id, un prop(como artisto tracks) y un value. Complete la función usando las reglas a continuación para modificar el objeto pasado a la función.

Su función siempre debe devolver el objeto de colección de registros completo.
Si propno es tracksy valueno es una cadena vacía, actualice o establezca ese álbum propen value.
Si propes trackspero el álbum no tiene una trackspropiedad, cree una matriz vacía y agréguela value.
Si propes tracksy valueno es una cadena vacía, agregue valueal final de la tracksmatriz existente del álbum.
Si valuees una cadena vacía, elimine la proppropiedad dada del álbum.
Nota: Se utiliza una copia del recordCollectionobjeto para las pruebas.
 */
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Solution 1
function updateRecords(records, id, prop, value) {
  if (prop !== 'tracks' && value !== "") {
    records[id][prop] = value;
  } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop];
  }
  return records;
}

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));

// Solution 2
function updateRecords2(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop];
  } else if (prop === "tracks") {
    records[id][prop] = records[id][prop] || []; // this is called shortcircuit evaluation, see below for explanation
    records[id][prop].push(value);
  } else {
    records[id][prop] = value;
  }
  return records;
}
console.log(updateRecords2(recordCollection, 5439, "artist", "ABBA"));