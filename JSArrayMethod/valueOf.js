// The valueOf() method return the array itself thid method does not change the original array.

// syntax - array.valueOf();

const bikes1 = ["Duke 250", "pulsar 220F", "Meteor 350", "FZ", "Bullet"];
const bikes2 = bikes1.valueOf();
console.log(bikes2); //[ 'Duke 250', 'pulsar 220F', 'Meteor 350', 'FZ', 'Bullet' ]

let text = "Hello World!";
let result = text.valueOf();
console.log(result); //Hello World!
