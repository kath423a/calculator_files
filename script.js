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
  const inputVal = document.getElementById("operator").value;

  let result;

  //selecting different calculations depending on a variable (if-statements – or switch-case)
  if (inputVal == "add") {
    result == "firstnumber" + "secondnumber";
  } else if (inputVal == "sub") {
    result == "firstnumber" - "secondnumber";
  } else if (inputVal == "mul") {
    result == "firstnumber" * "secondnumber";
  } else {
    result == "firstnumber" / "secondnumber";
  }

  const output = document.getElementById("result");
  output.value = result;

  checkResultRounded();
}

function checkResultRounded() {
  // Do rounding else write result into firstnumber field
}
