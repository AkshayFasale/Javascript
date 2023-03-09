// 07. Declare an array containing the multiple values and use lastIndexOf to determine the
// position of the first and last occurrence of a word "pw skills".

const arr = ["Akshay", "Karan", "pw skills","Aditi", "Darshan", "pw skills"];
const lastoccur = arr.lastIndexOf("pw skills");

console.log(lastoccur);

const output1 = `The last occurrence of "pw skills" is at index : ${lastoccur} `;
console.log(output1)

