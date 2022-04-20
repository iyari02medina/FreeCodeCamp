/*  
La palabra clave ifle dice a JavaScript que ejecute el código entre llaves bajo ciertas condiciones, definidas entre paréntesis. Estas condiciones se conocen como Booleancondiciones y solo pueden ser trueo false.
 */
function test(myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

console.log(test(false));
console.log(test(true));

// Comparison with the Equality Operator

function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(equalityTest(9));

// Comparison with the Strict Equality Operator

function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not equal";
}

console.log(testStrict(7));

// Practice comparing different values

function compareEquality(a, b) {
  if (a == b) { 
    return "Equal";
  }
  return "Not Equal";
}
console.log(compareEquality(10, "10"));

function compareEquality2(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(compareEquality2(10, "10"));

// Comparison with the Inequality Operator

function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}
console.log(testNotEqual(10));

// Comparison with the Strict Inequality Operator

function testStrictNotEqual(a,b) {
  if (a != b) {
    return "Not equal";
  }
  return "Equal";
}
console.log(testStrictNotEqual("2", 2));

function testStrictNotEqual2(a, b) {
  if (a !== b) {
    return "Not equal";
  }
  return "Equal";
}
console.log(testStrictNotEqual2("2", 2));

// Comparison with the Greater Than Operator

function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }
  if (val > 10) {
    return "Over 10";
  }
  return "10 or under";
}
console.log(testGreaterThan(10));

// Comparison with the Greater Than Or Equal To Operator

function testGreaterOrEqual(val) {
  if (val >= 20) return "20 or Over";
  if (val >= 10) return "10 or Over";
  return "Less than 10";
}
console.log(testGreaterOrEqual(55))

// Comparisons with the Logical And Operator

function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }
  return "No";
}
console.log(testLogicalAnd(26));

// Comparisons with the Logical Or Operator

function testLogicalOr(val) {
    if (val < 10 || val > 20) {
      return "Outside";
    }
}
console.log(testLogicalOr(26));

// Else Statements

function testElse(val) {
  var result = "";
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  return result;
}
console.log(testElse(4));

// Else If Statements

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
console.log(testElseIf(4));

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
console.log(orderMyLogic(25));

// Chaining If Else Statements

function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}
console.log(testSize(18));

// / / / / / / / / / / / / / / / / / / / / / GOLF CODE  / / / / / / / / / / / / / / / / / / / / / /

// solution 1

const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes === par - 1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else {
    return names[6];
  }
}
console.log(golfScore(5, 4));

// Solution 2
function golfScore2(par, strokes) {
  return strokes === 1
    ? names[0]
    : strokes <= par - 2
    ? names[1]
    : strokes === par - 1
    ? names[2]
    : strokes === par
    ? names[3]
    : strokes === par + 1
    ? names[4]
    : strokes === par + 2
    ? names[5]
    : names[6];
}
console.log(golfScore2(1,1))