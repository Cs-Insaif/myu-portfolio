document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

scrollBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById("current-time").textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock(); // Call once on page load

// Display today's date
const today = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("today-date").textContent = today.toLocaleDateString('en-US', options);

// Live clock
function updateClock() {
  const now = new Date();
  document.getElementById("current-time").textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock(); // Run once on load
