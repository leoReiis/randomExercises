function isInputInvalido() {
  value1 = document.getElementById("firstValue").value;
  value2 = document.getElementById("secondValue").value;

  value1 = parseFloat(value1);
  value2 = parseFloat(value2);

  return isNaN(value1) || isNaN(value2);
}

function calcular() {
  operador = document.getElementById("operator").value;
  let resultado;

  switch (operator.selectedIndex) {
    case 0:
      resultado = value1 + value2;
      break;
    case 1:
      resultado = value1 - value2;
      break;
    case 2:
      resultado = value1 * value2;
      break;
    case 3:
      resultado = value1 / value2;
      break;
    default:
      alert("Valores Inválidos");
      break;
  }

  return resultado;
}

function showResult() {
  if (isInputInvalido()) {
    alert("Valores inválidos!");
    return;
  }
  document.getElementById("resultado").innerText = "Resultado: " + calcular();
}
