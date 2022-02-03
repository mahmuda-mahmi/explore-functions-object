// var i = 0 ;
// while(i < 15) {
//      console.log(i);
//      if (i == 5){
//           break;
//      }
//      i++ ;
// }

// for(var i = 0; i < 20; i++){
//      console.log(i);
//      if(i > 8) {
//           break;
//      }
// }

var numbers = [54, 35, 65, 76, 81, 101, 45, 98];
// for (var i = 0; i < numbers.length; i++) {
//      var number = numbers[i];
//      console.log(number);
//      if(number > 63){
//           break;
//      }
// }

for (var i = 0; i < numbers.length; i++){
     var number = numbers[i];
     if (number > 90) {
          continue;
     }
     console.log(number);
}