// the entries() method returns an array iterator object with key value pairs and this method does not change the orignal array.

// syntax -  array.entries()
const days = ["sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const day = days.entries();
for (let x of day) {
    console.log(x+"\n")
}
// Output
// 0, sun

// 1, Mon

// 2, Tue

// 3, Wed

// 4, Thu

// 5, Fri

// 6, Sat