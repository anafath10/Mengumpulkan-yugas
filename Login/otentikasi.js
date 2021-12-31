function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username == "fatimah" && password == "0110221183") {
    window.open("./secpage.html")
  } else {
    alert(`Account Not Found`);
  }
}