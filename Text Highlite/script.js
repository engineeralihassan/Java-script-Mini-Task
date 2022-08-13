let button = document.getElementById("btn");
let input = document.getElementById("searchText");
let para = document.getElementById("para");
button.addEventListener("click", function () {
  console.log(input.value);
  let val = input.value;
  console.log(val);
  val = val.replace(/[.**?^${}()|[\]\\]/g, "\\$&");
  let pattern = new RegExp(`${val}`, "gi");
  para.innerHTML = para.textContent.replace(
    pattern,
    (match) => `<mark>${match}</mark>`
  );
});
