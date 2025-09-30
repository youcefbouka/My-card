// Typewriter effect for name
const name = "Youcef Boukermouche";
let i = 0;
function typeWriter() {
  if (i < name.length) {
    document.getElementById("name").innerHTML += name.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// Dark/Light Mode Toggle
const toggleBtn = document.getElementById("darkModeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
