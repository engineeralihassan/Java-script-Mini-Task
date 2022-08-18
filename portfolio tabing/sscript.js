alert("file atach");
(function () {
  let buttons = document.querySelectorAll(".btn");
  const storeImges = document.querySelectorAll(".store-item");
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      const filter = e.target.dataset.filter;
      storeImges.forEach((item) => {
        if (filter === "all") {
          item.style.display = "block";
        } else {
          if (item.classList.contains(filter)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        }
      });
    });
  });
})();
