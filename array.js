//Arrays - Variable that hold multiple values

const number = new Array(1,2,3,4,5);  // new key ward is a constructor

console.log(number);

//The popular way

const fruits = ['apples','oranges','pears',10,true];
console.log(fruits[0]); //Array starts from 0
console.log(typeof fruits[2]);

//push method is used to add values at the end of the array 
fruits.push('mangos');
console.log(fruits);

//to add anything in the begaining 
fruits.unshift('Strawberries');
console.log(fruits);

//to remove an item from the end of the array
fruits.pop();
console.log(fruits);

//Check anything is in a array
console.log(Array.isArray(fruits));

console.log(fruits.indexOf('oranges'));