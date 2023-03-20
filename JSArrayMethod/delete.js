// array elements can be deleted using the javascript operator delete
// using delete leaves undefined holes in the array

// syntax -  delete array[index];

let bikes = ["Duke 250", "pulsar 220F", "Meteor 350", "FZ"];
delete bikes[2];
console.log(bikes); // [ 'Duke 250', 'pulsar 220F', <1 empty item>, 'FZ' ]