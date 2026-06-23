// =========================
// HERO SLIDER
// =========================

const hero = document.querySelector(".hero");

const heroImages = [
    "images/hero1.jpg",
    "images/hero2.jpg",
    "images/hero3.jpg"
];

let currentSlide = 0;

function changeHero() {

    hero.style.backgroundImage =
        `url('${heroImages[currentSlide]}')`;

    currentSlide++;

    if (currentSlide >= heroImages.length) {
        currentSlide = 0;
    }

}

changeHero();

setInterval(changeHero, 4000);


// =========================
// PRODUCT FILTER
// =========================

function filterProduct(category) {

    const cards =
        document.querySelectorAll(".product-card");

    cards.forEach(card => {

        if (category === "all") {

            card.style.display = "block";

        }

        else if (
            card.classList.contains(category)
        ) {

            card.style.display = "block";

        }

        else {

            card.style.display = "none";

        }

    });

}


// =========================
// NAVBAR SHADOW ON SCROLL
// =========================

window.addEventListener("scroll", () => {

    const navbar =
        document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 5px 15px rgba(0,0,0,.15)";

    }

    else {

        navbar.style.boxShadow =
            "none";

    }

});


// =========================
// SIMPLE FADE-IN EFFECT
// =========================

const observer = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},

{
    threshold:0.2
}

);

const sections = document.querySelectorAll(
".about, .stats, .collection, .arrival, .why-us, .history, .gallery, .contact"
);

sections.forEach(section => {

    observer.observe(section);

});

// =====================================
// MOBILE MENU
// =====================================

const menuToggle =
document.querySelector(".menu-toggle");

const navLinks =
document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});