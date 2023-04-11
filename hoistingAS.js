// Hoisting is a phenomena by which you can access variable and function
// before initialized it without any error

// 

var x = 1;
a();
b();

console.log(x);

function a() {
    var x = 10;
    console.log(x);
}
 
function b() {
    var x = 100;
    console.log(x);
}

// 10
// 100
// 1