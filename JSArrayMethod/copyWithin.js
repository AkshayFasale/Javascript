// the copywithin() methods copy array elements to another position in an array and this method overwrites the existing values

//it does not add items to the array.

// array.copyWithin(target,start, end);

const bikes = ["Duke 250", "pulsar 220F", "Meteor 350", "FZ"];
bikes.copyWithin(2, 0);
console.log(bikes); //[ 'Duke 250', 'pulsar 220F', 'Duke 250', 'pulsar 220F' ]

const bikes1 = ["Duke 250", "pulsar 220F", "Meteor 350", "FZ", "Bullet"];
bikes1.copyWithin(2, 0, 2);
console.log(bikes1); // [ 'Duke 250', 'pulsar 220F', 'Duke 250', 'pulsar 220F', 'Bullet' ]

