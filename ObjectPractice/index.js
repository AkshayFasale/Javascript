// Creating a new object 

const a = new Object();
a.foo = 42;
console.log(a);

//
const userName = {
    FirstName: 'Akshay',
    LastName: 'Fasale',
    RollNo: 000,
}
// console.log(userName)
// console.log(userName.FirstName);

for (let x in userName) {
    console.log(userName);
    console.log(userName[x]);    
}
// Object assign

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true