var phones = ['iphone', 'xaomi', 'samsung', 'huawei', 'lg', 'htc'];
phones[3] = 'walton';
console.log(phones)

// check oppo not exists in an array
if(phones.indexOf('oppo') == -1){
     console.log('opps! oppo is missing!');
}

// if lg is available
if(phones.indexOf('lg') != -1){
     console.log('lg is here! so no fear!');
}

// function
function addFourNumbers(number1, number2, number3, number4) {
     var total = number1 + number2 + number3 + number4;
     return total;
}
var result = addFourNumbers(3, 5, 6, 9);
console.log(result);