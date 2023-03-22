// find() method returns the first elements in the provided array that satisfies the provided testing if no values satisfies the testing function, undefined is returned

//find(element) => {/* .. */}

const arry = [5, 1, 2, 4, 17, 8, 15];
const found = arry.find((element) => element > 10);
console.log(found); // 17

