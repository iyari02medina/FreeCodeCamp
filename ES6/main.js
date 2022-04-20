// Mutate an Array Declared with const

const s = [5, 6, 7];
/* s = [1, 2, 3]; */ // Error.
s[2] = 45;
console.log(s);


const q = [5, 7, 2];
function editInPlace() {
  "use strict";
  q[0] = 2;
  q[1] = 5;
  q[2] = 7;
}
editInPlace();
console.log(q);

// Prevent Object Mutation

let obj = {
  name: "FreeCodeCamp",
  review: "Awesome",
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj); 