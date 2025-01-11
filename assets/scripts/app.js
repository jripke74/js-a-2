const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  currentResult = currentResult + userInput.value;
  outputResult(currentResult, "");
}

addBtn.addEventListener("click", add);

// assingment 2
const task3Element = document.getElementById("task-3");

function greet() {
  alert("hello");
}

function greetUser(name) {
  alert(name);
}

function fullName(first, last, middle) {
  return `${first} ${last}, ${middle}`;
}

greet();
greetUser("Jeff");

task3Element.addEventListener("click", greet);

const combinedName = fullName('Jeff', 'Ripke', 'Allen')
alert(combinedName);
