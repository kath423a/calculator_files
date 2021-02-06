//Eventlistener som sætter spillet i gang når siden er loadet
window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");

  clickCalculate();
}

function clickCalculate() {
  document
    .querySelector("#calculate")
    .addEventListener("click", readFirstNumber);

  readFirstNumber();
}

function readFirstNumber() {
  const inputVal = document.getElementById("firstnumber").value;

  console.log(inputVal);

  readSecondNumber();
}

function readSecondNumber() {
  const inputVal = document.getElementById("secondnumber").value;

  console.log(inputVal);

  readOperator();
}

function readOperator() {
  //Read the operator, either: Add, subtract, multiply or divide
  const operatorInput = document.querySelector('#operator');
console.log("Operator value: " + operatorInput.value");
  

  //selecting different calculations depending on a variable (if-statements – or switch-case)
  if (operatorInput.value === "add")

  const output = document.getElementById("result");
  output.value = result;

  checkResultRounded();
}

function checkResultRounded() {
  // Do rounding else write result into firstnumber field
}
