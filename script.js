//Eventlistener som sætter spillet i gang når siden er loadet
window.addEventListener("load", sidenVises);

//Variabler
let firstNumber;
let sencondNumber;
let operatorInput;
let output;
let result;

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
  firstNumber = document.getElementById("firstnumber").value;

  console.log(firstNumber);

  readSecondNumber();
}

function readSecondNumber() {
  sencondNumber = document.getElementById("secondnumber").value;

  console.log(sencondNumber);

  readOperator();
}

function readOperator() {
  //Read the operator, either: Add, subtract, multiply or divide
  operatorInput = document.querySelector("#operator");
  console.log("Operator value: " + operatorInput.value);

  //selecting different calculations depending on a variable (if-statements – or switch-case)
  if (operatorInput.value === "add") {
    const output = document.getElementById("results");
    console.log(result);
  }

  checkResultRounded();
}

function checkResultRounded() {
  // Do rounding else write result into firstnumber field
}
