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
  readSecondNumber();
}

function readSecondNumber() {
  readOperator();
}

function readOperator() {
  //Add, subtract, multiply or divide

  checkResultRounded();
}

function checkResultRounded() {
  // Do rounding else write result into firstnumber field
}
