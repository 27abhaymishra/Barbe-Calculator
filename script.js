function sum(){
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
 
    let sum = a + b;
       document.getElementById("print").innerHTML = "The sum is " + sum;

}
function diff(){
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
 
    let diff = a - b;
       document.getElementById("print").innerHTML = "The difference is " + diff;

}
function muti(){
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
 
    let muti = a * b;
       document.getElementById("print").innerHTML = "The multiply is " + muti;

}
function div(){
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
 
    let div = a / b;
       document.getElementById("print").innerHTML = "The division is " + div;

}
function mod(){
    
    let a = parseInt(document.getElementById("num1").value);
    let b = parseInt(document.getElementById("num2").value);
 
    let mod = a%b;
       document.getElementById("print").innerHTML = "The Modulus is " + mod;
}