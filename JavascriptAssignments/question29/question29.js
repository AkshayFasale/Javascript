// 29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

let fileName = prompt("Enter Your file name");

function extnName(fileName) {
    const index = fileName.indexOf(".");
    const extn = fileName.slice(index);
    console.log(`The extension name of file ${fileName} is : ${extn}`);
}

extnName(fileName);