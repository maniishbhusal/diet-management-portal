const navDialog = document.getElementById("nav-dialog");
const loginBtn = document.getElementById("login-btn");
const talkToUs = document.getElementById("talktous-btn");
const knowMore = document.getElementById("know-more");


function handleMenu() {
  navDialog.classList.toggle("hidden");
}
// document.addEventListener("DOMContentLoaded", () => {

  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      if (email === "" || password === "") {
        alert("Please fill in all fields");
      } else {
        alert("Login successful");
      }
    });
  }

  talkToUs.addEventListener("click", () => {
    window.location.href = "book-consultation.html";
  });

  knowMore.addEventListener("click", () => {
    window.location.href="#about-us";
  })
// });
