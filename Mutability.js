// We have this array fruits which contains 4 elements
let fruits = ["apple", "bada apple", "chhota apple", "double apple"];
console.log(fruits)
// ["apple", "bada apple", "chhota apple", "double apple"]

//Now mutability means that we can change or modifiy content of this array
fruits[1] = "BADA APPLE";
console.log(fruits)
//[ 'apple', 'BADA APPLE', 'chhota apple', 'double apple']

//Here you can see that 2nd element (at position index 1 ) has changed in the original array.But we can't do this with primitive data types.
let str = "Akshay";
console.log(str[0]) // "A"
str[0] = "H";
console.log(str[0]) //"S"
console.log(str) //"Akshay"

//Here you can see that first character of string str has not changed Because String is immutable

let arra = [11, 22, 33, 44, 55, 66];
console.log(arra); //[11, 22, 33, 44, 55, 66]

let str1 = arra.toString();
console.log(str1) //11,22,33,44,55,66
console.log(typeof str1); //string
console.log(arra) //[11, 22, 33, 44, 55, 66]