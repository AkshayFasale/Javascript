// the forEach method executes a provided function once for each array element. it passess a callback function for each eleement of array together with the following parameters.

// This cannot be executed for empty element.

// syntax = array.forEach(function(currentValue,index,arr));


const numbers = [1, 2, 5, 4, 3];
numbers.forEach(number => console.log(number));
// 1
// 2
// 5
// 4
// 3
numbers.forEach((number, index) => { //Basically, we can see the index number of an element if we include it as a second
    console.log('Index: ' + index + ' Value: ' + number);
});
// Index: 0 Value: 1
// Index: 1 Value: 2
// Index: 2 Value: 3
// Index: 3 Value: 4
// Index: 4 Value: 5
numbers.forEach((number, index, array) => { // array parameter will just print as many times as the number of elements of the array:
    console.log(array);
});
// [1, 2, 3, 4, 5]
// [1, 2, 3, 4, 5]
// [1, 2, 3, 4, 5]
// [1, 2, 3, 4, 5]
// [1, 2, 3, 4, 5]
