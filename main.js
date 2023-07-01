// Write a JavaScript program to find the maximum of two numbers.

const number1 = 10;
const number2 = 30;
const maximum = findMaximum(number1, number2);

function findMaximum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}


document.write("<h3> The maximum number of", " "  + number1, " " + "and", " " + number2," " + "is", " " +maximum);