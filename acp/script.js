//how to define/create/declare a function
//normal way
function introduce(naam,boyosh){
    return `Hello, I'm ${naam} and I'm ${boyosh} years old`;
}
let f_name = `Afif`;
let age = 11;
//calling a function
document.getElementById("result").textContent = introduce(f_name,age);
// modern way to define a function
//function expression: declare a function using variables
let oddEven = function(number){
    if (number%2 == 0){
        document.getElementById("p2").innerHTML = `${number} is an even number`;
    }else{
        document.getElementById("p2").innerHTML = `${number} is an odd number`;
    }
}

let num = prompt("Enter a number");
oddEven(Number(num))

function result(a,b){
    document.getElementById("result2").textContent = a*b;
}