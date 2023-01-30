//Layson, Aron E.
//WD - 201
//Prelims Hands-On Quiz
//Prof. Joseph A. Esquivel

//to include external modules calculation.js
var calcu = require('./calculation.js');

//declaring variables
var rate = 300;
var hours = 4;
var days = 6;
var tax = 0.1;

var sss = 1200;
var pagibig = 300;
var philhealth = 400;

//To calculate/solve the problem
var gpay = calcu.multiply(rate, hours);
var gpay2 = calcu.multiply(gpay, days);
var tax1 = calcu.multiply(gpay2, tax);
var deduct = calcu.add(tax1, sss);
var deduct2 = calcu.add(pagibig, philhealth);
var deduct3 = calcu.add(deduct, deduct2);

//Print the output
console.log('The Gross Income: ' + gpay2);
console.log('Tax: ' + tax1);
console.log('SSS: ' + sss);
console.log('Pag-Ibig Fund: ' + pagibig);
console.log('PhilHealth: ' + philhealth);
console.log('Total Deductions: ' + deduct3);
console.log('The Net Salary: ' + calcu.subtract(gpay2, deduct3));