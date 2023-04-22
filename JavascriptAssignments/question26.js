// 26. Write a program to print the table of any number given by the user.The format of the output 
// should be smiliar to the below example -
//     If the number given by the user is 2 then the output should look like this -
//         2 * 1 = 2
// 2 * 2 = 4
// 2 * 3 = 6 and so on till 2 * 10 = 20.

const num = 5;

for (let i = 1; i <= 10; i++) {
  
    const table = i * num;
    console.log(`${num} * ${i} = ${table}`);
}
// 5 * 1 = 5
// 5 * 2 = 10
// 5 * 3 = 15
// 5 * 4 = 20
// 5 * 5 = 25
// 5 * 6 = 30
// 5 * 7 = 35
// 5 * 8 = 40
// 5 * 9 = 45
// 5 * 10 = 50

//using function

function printTable(num1) {
    for (let i = 1; i <= 10; i++){
        const table1 = i * num1;
        console.log(`${num1} * ${i} = ${table1}`);
    }
}

let num1 = 10;
printTable(num1);
// 10 * 1 = 10
// 10 * 2 = 20
// 10 * 3 = 30
// 10 * 4 = 40
// 10 * 5 = 50
// 10 * 6 = 60
// 10 * 7 = 70
// 10 * 8 = 80
// 10 * 9 = 90
// 10 * 10 = 100