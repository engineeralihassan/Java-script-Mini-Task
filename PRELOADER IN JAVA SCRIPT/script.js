let pics = [
  "images (3).jfif",
  "images (4).jfif",
  "images (5).jfif",
  "images (6).jfif",
  "images (7).jfif",
  "images (8).jfif",
];
let loader = document.querySelector(".loader");

let rando = Math.trunc(Math.random() * pics.length) + 1;
let img = document.getElementById("img");
img.src = pics[rando];
console.log(rando);
setTimeout(() => {
  alert("Your page is loage");

  loader.style.display = "none";
  //   location.reload();
}, 3000);
