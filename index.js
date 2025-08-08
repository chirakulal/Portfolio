
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
function downloadCV() {
    const link = document.createElement('a');
    link.href = 'assests/resume.pdf'; // Change this path if your file is elsewhere
    link.download = 'Chirashree_LK_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
const form = document.querySelector("form");
const msg = document.getElementById("msg");
const scriptURL = "https://script.google.com/macros/s/AKfycbzMBTI2XYALaBMl4h5Vr5b5s-AD5W1skaVCh1Jzlhjl-AGAKHRUcSv0cI0mjDZ1MnPHsQ/exec"; // Replace with your actual URL

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, {
    method: "POST",
    body: new FormData(form),
  })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
