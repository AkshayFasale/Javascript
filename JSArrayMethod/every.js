// in every() method tests whether all the element in the array pass the test implemented by the provided function. it will return boolean value

// every((element)=>{/* code */}) this is arrow function syntax

const array1 = [1, 30, 22, 44, 11, 3, 22];

const value1 = (currentValue) => currentValue < 50;
console.log(array1.every(value1)); // true

const value2 = (currentValue) => currentValue < 30;
console.log(array1.every(value2)); // false
