/*=========================================
      PORTFOLIO JAVASCRIPT
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    console.log("Portfolio Loaded Successfully");

});
/*=========================================
        STICKY NAVBAR
=========================================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});
/*=========================================
        ACTIVE MENU
=========================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
/*=========================================
        SMOOTH SCROLL
=========================================*/

navLinks.forEach((link) => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});
/*=========================================
      SCROLL REVEAL
=========================================*/

const revealElements = document.querySelectorAll(

".about,.education,.skills,.projects,.certifications,.resume,.contact"

);

function revealSection() {

    revealElements.forEach((element) => {

        const top = element.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (top < windowHeight - 120) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealSection);

revealSection();
/*=========================================
      TYPING EFFECT
=========================================*/

const words = [

    "Data Analyst",

    "Power BI Developer",

    "Machine Learning Engineer",

    "Python Developer"

];

let wordIndex = 0;

let letterIndex = 0;

let currentWord = "";

let isDeleting = false;

const typing = document.querySelector(".typing");

function typingEffect() {

    if (!typing) return;

    currentWord = words[wordIndex];

    if (!isDeleting) {

        typing.textContent =
            currentWord.substring(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typingEffect, 1500);

            return;

        }

    } else {

        typing.textContent =
            currentWord.substring(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex === words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typingEffect, isDeleting ? 50 : 100);

}

typingEffect();
/*=========================================
      BACK TO TOP
=========================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "flex";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*=========================================
      PROFILE IMAGE EFFECT
=========================================*/

const profile = document.querySelector(".hero-image img");

if(profile){

profile.addEventListener("mouseenter",()=>{

profile.style.transform="scale(1.05) rotate(2deg)";

});

profile.addEventListener("mouseleave",()=>{

profile.style.transform="scale(1)";

});

}

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuToggle.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
});