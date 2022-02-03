function addTwoNumbers(number1 , number2){
     console.log(number1 , number2);
     var total = number1 + number2;
     return total;
}

var firstNumber = 35 ;
var secondNumber = 47 ;

var result = addTwoNumbers(firstNumber, secondNumber);
console.log('result value:' , result);



function multiplyTwoNumbers(num1, num2) {
     console.log(num1, num2);
     var total = num1 * num2;
     return total;
}

var firstNumber = 10;
var secondNumber = 7;

var result = multiplyTwoNumbers(firstNumber, secondNumber);
console.log('result value:', result);



function devideTwoNumbers(num1, num2) {
     console.log(num1, num2);
     var total = num1 / num2;
     return total;
}

var firstNumber = 35;
var secondNumber = 7;

var result = devideTwoNumbers(firstNumber, secondNumber);
console.log('result value:', result);


function substractTwoNumbers(num1, num2) {
     console.log(num1, num2);
     var total = num1 - num2;
     return total;
}

var firstNumber = 50;
var secondNumber = 7;

var result = substractTwoNumbers(firstNumber, secondNumber);
console.log('result value:', result);

function sumOfCube(n){
     console.log(n);
     var sum = (n* (n + 1) / 2) ** 2;
     return sum;
}
sumOfCube(3)
console.log('Cube of these numbers is', sum);