//Eventlistener som sætter spillet i gang når siden er loadet
window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");

  clickCalculate();
}

function clickCalculate() {
  readFirstNumber();
}

function readFirstNumber() {
  readSecondNumber();
}

function readSecondNumber() {
  readOperator();
}

function readOperator() {}
