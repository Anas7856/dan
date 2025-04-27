// Open and Close the Offcanvas
const openBtn = document.getElementById("openOffcanvas");
const closeBtn = document.getElementById("closeOffcanvas");
const offcanvas = document.getElementById("offcanvas");

openBtn.addEventListener("click", () => {
  offcanvas.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  offcanvas.classList.remove("active");
});

window.addEventListener("load", function () {
  // Trigger logo transition after page load
  document.body.classList.add("loaded");

  // Delay the removal of the loading overlay (e.g., 3000ms = 3 seconds)
  setTimeout(function () {
    document.getElementById("loading-overlay").style.opacity = 0;
  }, 1900); // Change 3000 to any duration you prefer (in milliseconds)
});
