// fill() element will fills the specified elements in an array with value.method overwrites the original array.
// start and end position can be specified, if not all elements can be filled.

const bikes = ["Duke 250", "pulsar 220F", "Meteor 350", "FZ"];
bikes.fill("Bikess");
console.log(bikes); //[ 'Bikess', 'Bikess', 'Bikess', 'Bikess' ]

const bikes1 = ["Duke 250", "pulsar 220F", "Meteor 350", "FZ"];
bikes.fill("Meteor", 2,4);
console.log(bikes); //[ 'Bikess', 'Bikess', 'Meteor', 'Meteor' ]

