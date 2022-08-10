let select = document.querySelectorAll(".currency");
let btn = document.querySelector("#btn");
let inp = document.querySelector("#input");
let result = document.querySelector("#result");

fetch("https://api.frankfurter.app/currencies")
  .then((data) => data.json())
  .then((data) => {
    display(data);
  });
function display(data) {
  let entries = Object.entries(data);
  for (let i = 0; i < entries.length; i++) {
    select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
    select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
  }
}
btn.addEventListener("clcik", () => {
  let currency1 = select[0].value;
  let currency2 = select[1].value;
  let valu = inp.value;
  if (currency1 != currency2) {
    convert(currency1, currency2, valu);
  } else {
    alert("Choose Diffrent currency !!!");
  }
});

function convert(currency1, currency2, valu) {
  let host = "api.frankfurter.app";
  fetch(
    `https://${host}/latest?amount=${valu}&from=${currency1}&to=${currency2}`
  )
    .then((val) => val.json())
    .then((val) => {
      console.log(Object.values(val.rates)[0]);
      result.value = Object.values(val.rates)[0];
    });
}
