const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");
let equal = document.querySelector("#equal");

buttons.forEach((button) => {
  if (button.id !== "equal") {
    button.addEventListener("click", (e) => {
      result.textContent += e.target.id;
    });
  }
});

equal.addEventListener("click", () => {
  result.textContent = eval(result.textContent);
});

clear.addEventListener("click", () => {
  result.textContent = "";
});
