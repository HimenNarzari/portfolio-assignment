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


document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value;

  const fullMessage = `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`;
  const encodedMessage = encodeURIComponent(fullMessage);

  const phoneNumber = "917086667640";
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(url, "_blank");
});
