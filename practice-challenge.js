// 1. multiplication table of 13

function multiplicationTable(){
     for(var i = 1; i <= 10; i++){
          var number = 13 ;
          var value = number * i;
          console.log(value);
     }
}
multiplicationTable();

// 2. UPPERCASE-lowercase

var uppercase = "MY NAME IS MAHMUDA. I LIKE JAPANESE AND KOREAN SPICY FOOD."
console.log(uppercase.toLowerCase()); // toLowerCase function  is used to get all inputs in lowercase.

// 3. Name function

function fullName(firstName, lastName){
     console.log(firstName, lastName);
     var name = firstName + ' ' + lastName;
     return name;
}
fullName('Mahmuda', 'Akter');

// 4. square numbers

function square(number){
     console.log(number)
     var result = number * number;
     console.log('Square of the number is', result);
     return result ;
}
square(45);

// 5. print peperoni

const pizza = {
     toppings: ['cheese', 'sauce', 'pepperoni'],
     crust: 'deep dish',
     serves: 2
}
console.log(pizza.toppings[2]);
//
const dress = {
     color: ['black', 'yellow', 'maroon'],
     size: [36, 37, 38, 39],
     pieceAvailable: 7
}
console.log(dress.color[1]);
console.log(dress.size[2]);