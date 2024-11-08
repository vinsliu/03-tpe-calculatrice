document.getElementById("show").addEventListener("click", function () {
  // document.getElementById("calculator").style.display = "block";
  document.getElementById("calculatorForm").style.display = "block";
});
document.getElementById("hide").addEventListener("click", function () {
  // document.getElementById("calculator").style.display = "none";
  document.getElementById("calculatorForm").style.display = "none";
});

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
      if (operator == "+") {
        result = firstInput + secondInput;
      } else if (operator == "-") {
        result = firstInput - secondInput;
      } else if (operator == "*") {
        result = firstInput * secondInput;
      } else if (operator == "/") {
        result = firstInput / secondInput;
      } else {
        result = "ERREUR !";
      }
    }

    document.getElementById(
      "form-display"
    ).innerHTML = `<span>${result}</span>`;

    if (!isNaN(result)) {
      let formHist = document.getElementById("form-history");
      let history = `<span>${firstInput} ${operator} ${secondInput} = ${result}</span>`;
      formHist.insertAdjacentHTML("afterbegin", history);
    }
  });

// Format calculatrice
let screen = document.getElementById("screen");
document.getElementById("keys").addEventListener("click", function () {});
