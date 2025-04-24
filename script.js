const toggleBtn = document.getElementById("menu-toggle");
const links = document.getElementById("links");

toggleBtn.addEventListener("click", () => {
  links.classList.toggle("show");
  toggleBtn.classList.toggle("rotated");
});


// typewriter effect

const words = ["Developer", "Designer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 150;
const pauseBetweenWords = 1500;
const element = document.getElementById("typewriter");

function type() {
  const currentWord = words[wordIndex];
  const displayedText = isDeleting
    ? currentWord.substring(0, charIndex--)
    : currentWord.substring(0, charIndex++);

  element.textContent = displayedText;

  if (!isDeleting && charIndex === currentWord.length + 1) {
    isDeleting = true;
    setTimeout(type, pauseBetweenWords);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 300);
  } else {
    setTimeout(type, isDeleting ? 60 : typingSpeed);
  }
}

type();