// Contact Button
const contactBtn = document.getElementById("contactBtn");
const contactModal = document.getElementById("contactModal");
const closeContact = document.getElementById("closeContact");

contactBtn.onclick = function () {
    contactModal.classList.add("active");
};

closeContact.onclick = function () {
    contactModal.classList.remove("active");
};

// Close modal when clicking outside the box
contactModal.onclick = function (event) {

    if (event.target === contactModal) {
        contactModal.classList.remove("active");
    }

};


// Projects Button
const projectsBtn = document.getElementById("projectsBtn");

projectsBtn.onclick = function () {
    alert("My projects are coming soon! 🚀");
};


// Dark / Light Mode
const themeToggle = document.getElementById("themeToggle");

themeToggle.onclick = function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }

};
// Navigation Contact Button

const navContact = document.getElementById("navContact");

navContact.onclick = function (event) {

    event.preventDefault();

    contactModal.classList.add("active");

};
// Scroll Reveal

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = function () {

    revealElements.forEach(function (element) {

        const elementTop = element.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();s
// Typing Effect

const typingText = document.querySelector(".typing-text");

const texts = [
    "Computer Science Student",
    "Web Developer",
    "JavaScript Developer",
    "Future Software Engineer"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentText = texts[textIndex];

    if (!deleting) {

        typingText.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentText.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            textIndex++;

            if (textIndex === texts.length) {
                textIndex = 0;
            }

        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();