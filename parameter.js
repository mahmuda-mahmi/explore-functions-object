function bringShingara(taka){
     console.log('Shingara er jnno dise', taka);
     console.log('Mama shingara den')
     var shingaraPrice = 10;
     var shingaraQuantity = taka / shingaraPrice;
     return shingaraQuantity ;
      
}

var money = 250 ;
var shingara = bringShingara(money);
console.log('ei nen shingara', shingara);