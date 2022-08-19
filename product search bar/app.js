function search() {
  let searchBox = document.getElementById("search-item").value.toUpperCase();
  let storitems = document.querySelector(".product-list");
  let product = document.querySelectorAll(".product");
  let proName = storitems.getElementsByTagName("h2");

  for (let i = 0; i < proName.length; i++) {
    let match = product[i].getElementsByTagName("h2")[0];
    if (match) {
      let textValue = match.textContent || match.innerHTML;
      if (textValue.toUpperCase().indexOf(searchBox) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
}
