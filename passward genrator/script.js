document.getElementById("btn").addEventListener("click", function () {
  let chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&()*";
  let passlen = 16;
  let pass = "";
  for (var i = 0; i < passlen; i++) {
    let randNum = Math.floor(Math.random() * chars.length);
    pass += chars.substring(randNum, randNum + 1);
  }
  document.getElementById("passward").value = pass;
});
