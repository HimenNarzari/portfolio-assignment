const toggleBtn = document.getElementById("menu-toggle");
const links = document.getElementById("links");

toggleBtn.addEventListener("click", () => {
  links.classList.toggle("show");
  toggleBtn.classList.toggle("rotated");
});
