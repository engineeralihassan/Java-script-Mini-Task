console.log("Hello");
let calculatebutton = document.querySelector(".calculate");
let compMarks = document.getElementById("inp1");
let mobMarks = document.getElementById("inp2");
let webMarks = document.getElementById("inp3");
let chempMarks = document.getElementById("inp5");
let phypMarks = document.getElementById("inp4");
let obtained;
let perctage;
let grade = "A";
let total = 500;
function Result(pass, gr, per, obt) {
  document.querySelector(".pass").textContent = pass;
  document.querySelector(".grade").textContent = gr;
  let p = Math.trunc(per);

  document.querySelector(".perc").textContent = `${p}%`;
  document.querySelector(".obtain").textContent = obt;
}

calculatebutton.addEventListener("click", function () {
  console.log("Hello ali mrks are");

  parseInt(compMarks.value);
  parseInt(chempMarks.value);
  parseInt(phypMarks.value);
  parseInt(mobMarks.value);
  parseInt(webMarks.value);
  obtained =
    parseInt(compMarks.value) +
    parseInt(chempMarks.value) +
    parseInt(phypMarks.value) +
    parseInt(mobMarks.value) +
    parseInt(webMarks.value);
  perctage = (obtained / total) * 100;
  if (perctage > 50 && perctage < 60) {
    Result("passed", "D", perctage, obtained);
  } else if (perctage >= 60 && perctage < 70) {
    Result("passed", "C", perctage, obtained);
  } else if (perctage >= 70 && perctage < 80) {
    Result("passed", "B", perctage, obtained);
  } else if (perctage >= 80 && perctage < 90) {
    Result("passed", "A", perctage, obtained);
  } else if (perctage >= 90 && perctage < 100) {
    Result("passed", "A+", perctage, obtained);
  } else {
    Result("Fail", "F", perctage, obtained);
  }
});
