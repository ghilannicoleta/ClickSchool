const container = document.getElementsByClassName("container")[0];
const btn = document.getElementsByClassName("btn")[0];
let input = document.getElementById("input");
const AC = document.getElementById("clear");

let numA = "";
let numB = "";
let opetation = "";
let inputWasCleared = false;
let isNumBInput = false;

input.addEventListener("keypress", (event) => {
  const regex = /[\d\-\/+\*\.]/;
  if (!regex.test(event.key) || input.value.includes(event.key)) {
    event.preventDefault();
  }
});

container.addEventListener("click", (event) => {
  switch (event.target.innerHTML) {
    case ".":
      if (!input.value.includes(".")) {
        input.value = input.value + event.target.innerHTML;
      }
      break;
    case "0":
      if (!(input.value === "0")) {
        input.value = input.value + event.target.innerHTML;
      }
      break;
    case "+":
    case "-":
    case "*":
    case "/":
      if (numA !== "" && isNumBInput) {
        numB = input.value;
        input.value = calculate(numA, numB, opetation);
        isNumBInput = false;
      } else {
        numA = input.value;
      }
      opetation = event.target.innerHTML;

      break;
    case "=":
      numB = input.value;
      input.value = calculate(numA, numB, opetation);
      isNumBInput = false;
      break;
    case "AC":
      input.value = "";
      numA = "";
      numB = "";
      opetation = "";
      inputWasCleared = false;
      isNumBInput = false;
      break;
    case "+/-":
      if (input.value !== "0" && input.value !== "") {
        if (input.value.includes("-")) {
          input.value = input.value.replace("-", "");
        } else {
          input.value = `-${input.value}`;
        }
      }
      break;
    default:
      if (opetation !== "" && !inputWasCleared) {
        inputWasCleared = true;
        input.value = "";
      }

      if (event.target.classList[0].includes("btn")) {
        if (opetation !== "") {
          isNumBInput = true;
        }
        input.value = input.value + event.target.innerHTML;
      }
  }
});

function calculate(a, b, opetation) {
  let result = "";

  switch (opetation) {
    case "+":
      result = Number(a) + Number(b);
      break;
    case "-":
      result = Number(a) - Number(b);
      break;
    case "*":
      result = Number(a) * Number(b);
      break;
    case "/":
      result = Number(a) / Number(b);
      break;
  }

  cleanAfterCalc(result);
  return result;
}

function cleanAfterCalc(calcResult) {
  numA = calcResult;
  numB = "";
  inputWasCleared = false;
}
