// join() return a new string by concatenating all of the elemets in an array, separated by commas or a specified string.

// syntax - array.join(separator)

let bikes = ["Duke 250", "pulsar 220F", "Meteor 350", "FZ"];
console.log(bikes.join()); // Duke 250,pulsar 220F,Meteor 350,FZ
console.log(bikes.join("")); // Duke 250pulsar 220FMeteor 350FZ // it changed all names of bikes 😂😂
console.log(bikes.join("-")); // Duke 250-pulsar 220F-Meteor 350-FZ
