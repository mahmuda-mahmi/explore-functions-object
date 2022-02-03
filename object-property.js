var computer = {
     price: 30000,
     storage: '500gb',
     processor: 'intel i5',
     ram: '8gb'
}
// console.log(computer);
// console.log(computer.processor);
var computerPrice = computer.price;

// set an object property value
// computer.price = 22000
// console.log(computerPrice);

// different ways to set a value of an object property

// one
computer.price = 22000;
computer.storage = '256gb';
console.log(computer);

// two
computer["price"]= 23000;
computer["storage"] = '1TB';
console.log(computer);

// three
var priceProperty = "price"
computer[priceProperty] = 19000;
var storageProperty = 'storage'
computer[storageProperty] = '5tb' ;
console.log(computer);
