const navDialog = document.getElementById("nav-dialog");
const loginBtn = document.getElementById("login-btn");
const talkToUs = document.getElementById("talktous-btn");
const knowMore = document.getElementById("know-more");
const bookConsultationBtn = document.getElementById("book-consultation-btn");

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

if (talkToUs) {
  talkToUs.addEventListener("click", () => {
    console.log("clicked");
    window.location.href = "book-consultation.html";
  });
}

if (knowMore) {
  knowMore.addEventListener("click", () => {
    window.location.href = "#about-us";
  });
}

if (bookConsultationBtn) {
  bookConsultationBtn.addEventListener("click", () => {
    window.location.href = "#consultation-form";
  });
}

function consultationSubmitted() {
  alert("Consultation submitted successfully!");
}

function hrefBookConsultation() {
  window.location.href = "book-consultation.html";
}

// });
