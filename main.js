var info = document.querySelector("h2")

info.textContent = "Javascript is a dynamic programming language that can add functionality and interactivity to a website. It has const, let and var datatypes which can store all type of values like integer, float, boolean, array,objects, etc."

var printArray = document.querySelector("h1")

const array = [1,2,3,4,5]

let value = array[3].toString()
printArray.innerHTML = value

console.log(`array at index 3 is a ${typeof value}`);

var variableOne = 40;

var variableTwo = "virtual"

console.log(variableOne);
console.log(variableTwo);
