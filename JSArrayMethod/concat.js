// the concat() method concatenates (joins) two or more arrays returns a new array, containing the joined array.

// IMP -  This method does not CHANGE the existing arrays.

// syntax - array1.concat(array2,array3, ..., arrayX)

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6, 7, 8];
let arr3 = [11, 33, 55];

let arr4 = arr1.concat(arr3);
let arr5 = arr1.concat(arr2, arr3);

console.log(arr4); //[ 1, 2, 3, 11, 33, 55 ]
console.log(arr5); //[1, 2, 3, 4, 5,6, 7, 8, 11, 33,55]
