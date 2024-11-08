let showBtn = document.getElementById("show");
let hideBtn = document.getElementById("hide");

// Format formulaire
document
  .getElementById("calculatorForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    let firstInput = parseFloat(document.getElementById("firstInput").value);
    let secondInput = parseFloat(document.getElementById("secondInput").value);
    let operator = document.getElementById("operator").value;
    console.log(operator);
    let result;

    if (isNaN(firstInput) || isNaN(secondInput)) {
      result = "Veuillez entrer des veleurs valides.";
    } else {
      if (operator == "plus") {
        result = firstInput + secondInput;
      } else if (operator == "minus") {
        result = firstInput - secondInput;
      } else if (operator == "times") {
        result = firstInput * secondInput;
      } else if (operator == "divide") {
        result = firstInput / secondInput;
      } else {
        result = "ERREUR !";
      }
    }

    document.getElementById(
      "form-display"
    ).innerHTML = `<span>${result}</span>`;
  });

// Format calculatrice
let screen = document.getElementById("screen");
let keys = document.getElementById("keys");
