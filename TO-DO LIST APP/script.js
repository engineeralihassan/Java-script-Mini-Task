// let button = document.querySelector("#addtodo");
// let container = document.querySelector("#todocontainer");
// let input = document.querySelector("#inp");
// button.addEventListener("click", function () {
//   let paragraph = document.createElement("p");
//   paragraph.classList.add("paragraphs");
//   paragraph.innerText = input.value;
//   container.appendChild(paragraph);
//   input.value = "";
//   paragraph.addEventListener("click", function () {
//     //     paragraph.style.textDecoration = "line-through";
//     console.log("Hello");

//     container.removeChild(paragraph);
//   });
//   //   paragraph.addEventListener("dblclick", function () {
//   //     console.log("Hello");

//   //     container.removeChild(paragraph);
//   //   });
// });
// llllllllllllllllllllllllllllllllllllllll
let button = document.querySelector("#addtodo");
let container = document.querySelector("#todolist");
let input = document.querySelector("#inp");
button.addEventListener("click", function () {
  let listitem = document.createElement("li");
  listitem.classList.add("paragraphs");
  listitem.innerText = input.value;
  container.appendChild(listitem);
  input.value = "";
  listitem.addEventListener("dblclick", function () {
    //     paragraph.style.textDecoration = "line-through";
    let con = confirm(`You Really Want to delete this item this is not 
    recoverd again`);
    if (con) {
      console.log("Hello");

      container.removeChild(listitem);
    }
  });
  //   paragraph.addEventListener("dblclick", function () {
  //     console.log("Hello");

  //     container.removeChild(paragraph);
  //   });
});
