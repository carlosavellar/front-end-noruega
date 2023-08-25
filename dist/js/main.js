//Let's Create the JavaScript Part.

const overlay = document.getElementById("overlay");
const closeMenu = document.getElementById("close-menu");

document.getElementById("open-menu").addEventListener("click", function () {
  overlay.classList.add("show-menu");
  document.body.style.overflow = "hidden";
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("close-menu").addEventListener("click", function () {
  overlay.classList.remove("show-menu");
  document.body.style.overflow = "visible";
});
