// The splice() method adds and/or removes array elemets
// The splice() method overwrites the original array.

// array.splice(index, howmany, item1, .... , itemX)

let ary = [99, 32, 23, 43, 53, 100];
ary.splice(2, 3, "a", "b", "c");

console.log(ary); // [ 99, 32, 'a', 'b', 'c', 100 ]

ary.splice(1, 2, "11", "99");
console.log(ary); // [ 99, '11', '99', 'b', 'c', 100 ]