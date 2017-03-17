//Do not change any of the function names

function multiplyByTen(num) {
  //return num after multiplying it by ten
  //code here
  return num * 10;
}

function subtractFive(num) {
  //return num after subtracting five
  //code here
  return num - 5;
}

function areSameLength(str1, str2) {
  //return true if the two strings have the same length
  //otherwise return false
  //code here
  if (str1.length === str2.length) {
    return true;
  } else {
    return false;
  }
}

function areEqual(x, y) {
  //return true if x and y are the same
  //otherwise return false
  //code here
  if (x === y) {
    return true;
  } else {
    return false;
  }
}

function lessThanNinety(num) {
  //return true if num is less than ninety
  //otherwise return false
  //code here
  if (num < 19) {
    return true;
  } else {
    return false;
  }
}

function greaterThanFifty(num) {
  //return true if num is greater than fifty
  //otherwise return false
  //code here
  if (num > 50) {
    return true;
  } else {
    return false;
  }
}

function add(x, y) {
  //add x and y together and return the value
  //code here
  return x + y;
}

function subtract(x, y) {
  //subtract y from x and return the value
  //code here
  return x - y;
}

function divide(x, y) {
  //divide x by y and return the value
  //code here
  var division = x / y;
  return division;
}

function multiply(x, y) {
  //multiply x by y and return the value
  //code here
  return x * y;
}

function getRemainder(x, y) {
  //return the remainder from dividing x by y
  //code here
  return x % y;
}

function isEven(num) {
  //return true if num is even
  //otherwise return false
  //code here
  if (num % 2 == 0) {
  return true;
  } else {
    return false;
  }
}

function isOdd(num) {
  //return true if num is false
  //otherwise return false
  //code here
  if (Math.abs(num % 2) == 1) {
    return true;
  } else {
    return false;
  }
}

function square(num) {
  //square num and return the new value
  //code here
  var math = Math.pow(num,2);
  return math;
}

function cube(num) {
  //cube num and return the new value
  //code here
  var math = Math.pow(num, 3);
  return math;
}

function raiseToPower(num, exponent) {
  //raise num to whatever power is passed in as exponent
  //code here
  var math = Math.pow(num, exponent);
  return math;
}

function roundNumber(num) {
  //round num and return it
  //code here
  var math = Math.round(num);
  return math;
}

function roundUp(num) {
  //round num up and return it
  //code here
  var math = Math.ceil(num);
  return math;
}

function addExclamationPoint(str) {
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
  //code here
  var fullSentence = str + '!';
  return fullSentence;
}

function combineNames(firstName, lastName) {
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
  //code here
  var combinedName = firstName + ' ' + lastName;
  return combinedName;
}

function getGreeting(name) {
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
  //code here
  return 'Hello ' + name + '!';
}

//If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
  //return the area of the rectangle by using length and width
  //code here
  var area = length * width;
  return area;
}

function getTriangleArea(base, height) {
  //return the area of the triangle by using base and height
  //code here
  var triangleArea = 0.5 * base * height;
  return triangleArea;
}

function getCircleArea(radius) {
  //return the rounded area of the circle given the radius
  //code here
  var circleArea = Math.PI * Math.pow(radius,2);
  return Math.round(circleArea);
}

function getRectangularPrismVolume(length, width, height) {
  //return the area of the 3D rectangular prism given the length, width, and height
  //code here
  var rectangularPrismVolume = length * width * height;
  return rectangularPrismVolume;
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
