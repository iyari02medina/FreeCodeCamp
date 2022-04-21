// antes 

/* 
const myFunc = function () {
  const myVar = "value";
  return myVar;
};
 */

// ES6

const myFunc = () => {
  const myVar = "Hello World!";
  return myVar;
};
console.log(myFunc())

// Write Arrow Functions with Parameters

const multiplier = (item, multi) =>{
 let m = 0
   m = item * multi;
   return m;
}
console.log(multiplier(4, 2));

// Set Default Parameters for Your Functions

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());


const increment = (number, value = 1) => number + value;
console.log(increment(5, 2));
console.log(increment(5)); 

// Use the Rest Parameter with Function Parameters

function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], {}));


const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3,)); 

// Use the Spread Operator to Evaluate Arrays In-Place

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
console.log(maximus);


 const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
arr2 = [...arr1]; 
console.log(arr2);

// Use Destructuring Assignment to Extract Values from Objects

const user = { name: "John Doe", age: 34 };
const { name, age } = user;
console.log(user.name)
console.log(user.age);


const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
const {today, tomorrow} = HIGH_TEMPERATURES;
console.log(today);
console.log(tomorrow);
/* console.log(yesterday); */ // yesterday is not defined

// Use Destructuring Assignment to Assign Variables from Objects

const user2 = { name: "John Doe", age: 34 };
const { name: userName, age: userAge } = user2;
console.log(userName);
console.log(userAge);


const HIGH_TEMPERATURES2 = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES2;
console.log(highToday); 
console.log(highTomorrow); 

// Use Destructuring Assignment to Assign Variables from Nested Objects

const user3 = {
  johnDoe: {
    age: 34,
    email: "johnDoe@freeCodeCamp.com",
  },
};
const {
  johnDoe: { age: userAge2, email: userEmail },
} = user3;
console.log(userAge2);
console.log(userEmail);


const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
const { today: { low: lowToday, high: highToday2 } } = LOCAL_FORECAST;
console.log(lowToday);
console.log(highToday2);

// Use Destructuring Assignment to Assign Variables from Arrays

const [a, b, , , c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);


let a2 = 8,
  b2 = 6;
[a2, b2] = [b2, a2];
console.log(a2);
console.log(b2);

// Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements

const [a3, b3, ...arr3] = [1, 2, 3, 4, 5, 7];
console.log(a3, b3);
console.log(arr3);


const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  "use strict";
  const [a4, b4, ...arr4] = list;
  return arr4;
}
const arr4 = removeFirstTwo(source);
console.log(arr4); 
console.log(source);

// Use Destructuring Assignment to Pass an Object as a Function's Parameters

const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
};


const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
 const half = ({ max, min }) => (max + min) / 2.0; 
 console.log(half(stats))

 // Create Strings using Template Literals

 const person = {
   name: "Zodiac Hasbro",
   age: 56,
 };

 const greeting2 = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

 console.log(greeting2);


 const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};
function makeList(arr) {
  "use strict";
  const failureItems = arr.map(
    (i) => `<li class="text-warning">${i}</li>`
  );
  return failureItems;
}
const failuresList = makeList(result.failure);
console.log(failuresList)

// Write Concise Object Literal Declarations Using Object Property Shorthand

const getMousePosition = (x, y) => ({ x, y });
console.log(getMousePosition(5,2));


const createPerson = (name, age, gender) => {
  "use strict";
  return {
    name,
    age,
    gender,
  };
};
console.log(createPerson("Japlin", 9, "female"));

// Write Concise Declarative Functions with ES6

const person3 = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  },
};
console.log(person3.sayHello());


const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  },
};
bicycle.setGear(4);
console.log(bicycle.gear);