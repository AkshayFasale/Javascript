// sort( sorts the elements of array and overwrites the orignal array)
// sort the elements as strings in alphabetical ascending order
// sort takes an optional compare function

let ary = [11, 44, 33, 2, 12, 66,];
let str = ["Akshay", "Kshay", "Shay", "Hay", "Ay", "y"]; //It will first convert each element of the array into a string then comparison happens based on their UTF-16 code and the order of comparison is ascending.

ary.sort();
console.log(ary); //[ 11, 12, 2, 33, 44, 66 ]

str.sort();
console.log(str); //[ 'Akshay', 'Ay', 'Hay', 'Kshay', 'Shay', 'y' ]