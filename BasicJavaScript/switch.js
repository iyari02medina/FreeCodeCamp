// Selecting from Many Options with Switch Statements

function caseInSwitch(val) {
  let answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}
console.log(caseInSwitch(1));

// Adding a Default Option in Switch Statements

function switchOfStuff(val) {
  var answer = "";
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
  }
  return answer;
}
console.log(switchOfStuff("c"));

// Multiple Identical Options in Switch Statements

function sequentialSizes(val) {
  var answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
  }
  return answer;
}
console.log(sequentialSizes(1));

// Replacing If Else Chains with Switch

function chainToSwitch(val) {
  var answer = "";
  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }
  return answer;
}
console.log(chainToSwitch(7));

// Returning Boolean Values from Functions

function isLess(a, b) {
  return a <= b;
}
console.log(isLess(10, 15));

// Return Early Pattern for Functions

function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(2, 1));

// / / / / / / / / / / / / / / / / / / Counting Cards / / / / / / / / / / / / / / / / / / / / / /
/* 
Count Change	Cards
+1	           2, 3, 4, 5, 6
0	           7, 8, 9
-1	          10, 'J', 'Q', 'K', 'A'
 */

// solution 1

let count = 0;
function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

console.log(cc(2));
console.log(cc(3));
console.log(cc(7));
console.log(cc("K"));
console.log(cc("A"));

// solution 2

function cc2(card) {
  var regex = /[JQKA]/;
  if (card > 1 && card < 7) {
    count++;
  } else if (card === 10 || regex.test(card)) {
    count--;
  }
  if (count > 0) return count + " Bet";
  return count + " Hold";
}
console.log(cc2(2));
console.log(cc2(3));
console.log(cc2(7));
console.log(cc2("K"));
console.log(cc2("A"));