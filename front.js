
console.log("hello world")
let a=10;
let b=20;
let sum=a-b;
console.log("sum=", sum)
let n = 4;

if (n % 2 == 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

let str="yasodha"
let reversed=str.split("").reverse().join();
console.log(reversed);
let name = prompt("");
console.log("hello " + name);
function showTime(){
document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
    showTime();
},1000);
