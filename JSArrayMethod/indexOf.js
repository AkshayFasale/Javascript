// the indexOf() method returns the first index(position) of a specified value, return -1 if the value is not found. and it searches from left to right.
// Negative start values counts from the last element (but still searches from left to right)

// array.indexOf(item, start);

let element = ["laptops", "Headset", "Mobile", "router"];
console.log(element.indexOf("Mobile", 0)); // 2
console.log(element.indexOf("router", 2)); // 3
console.log(element.indexOf("Mobile", 3)); // -1