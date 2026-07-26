
// =========================================
// SHUBH LABH DISTRIBUTIONS
// Premium Website Script
// =========================================

// Sticky Header

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

// =========================================
// Back To Top Button
// =========================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.pageYOffset > 400) {
        topBtn.classList.add("show-btn");
    } else {
        topBtn.classList.remove("show-btn");
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// =========================================
// Scroll Animation
// =========================================

const sections = document.querySelectorAll("section");

function revealSections(){

    const trigger = window.innerHeight * 0.85;

    sections.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        if(top < trigger){

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();

// =========================================
// Active Menu
// =========================================

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href").includes(current)){

            link.classList.add("active");

        }

    });

});

// =========================================
// Smooth Scrolling
// =========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});
// ===============================
// MOBILE MENU TOGGLE
// ===============================

const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("nav-links");

if (menuToggle && mobileNav) {

    menuToggle.addEventListener("click", () => {

        mobileNav.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (mobileNav.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
    });

    document.querySelectorAll("#nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            mobileNav.classList.remove("active");

            const icon = menuToggle.querySelector("i");
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");

        });

    });

}// EmailJS Configuration

(function(){

    emailjs.init("vhJD7jOsmCgKUpmMi");

})();

document.getElementById("contact-form")
?.addEventListener("submit", function(event){

    event.preventDefault();

    emailjs.sendForm(
        "service_tgvz9ub",
        "template_jtl6zlm",
        this
    )

    .then(function(){

        alert("Thank you! Your message has been sent successfully.");

        document.getElementById("contact-form").reset();

    },function(error){

        alert("Failed to send message. Please try again.");

        console.log(error);

    });

});

/* ===========================
   CAREER FORM
=========================== */

const careerForm = document.getElementById("career-form");

if (careerForm) {

    careerForm.addEventListener("submit", function(e) {

        e.preventDefault();

        emailjs.sendForm(
            "service_tgvz9ub",
            "template_eiq1f0f",
            this
        )
        .then(function() {

            alert("Thank you! Your job application has been submitted successfully.");

            careerForm.reset();

        })
        .catch(function(error) {

            console.log(error);
            alert("Failed to submit application. Please try again.");

        });

    });

}
function openGallery() {
    document.getElementById("galleryPopup").style.display = "flex";
}

function closeGallery() {
    document.getElementById("galleryPopup").style.display = "none";
}

window.onclick = function(event) {
    const popup = document.getElementById("galleryPopup");
    if (event.target === popup) {
        popup.style.display = "none";
    }
};

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close-image");

if (modal && modalImg && closeBtn) {

    document.querySelectorAll(".product-card img").forEach(img => {
        img.addEventListener("click", function () {
            modal.style.display = "flex";
            modalImg.src = this.src;
            modalImg.alt = this.alt;
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

}

document.addEventListener("DOMContentLoaded", () => {

    const splash = document.getElementById("splash");
    const welcome = document.getElementById("welcomeText");

    // Show splash only once per browser tab
    if (sessionStorage.getItem("splashShown")) {
        splash.style.display = "none";
        return;
    }

    sessionStorage.setItem("splashShown", "true");

    const greetings = [
        "Welcome",
        "नमस्ते",
        "ನಮಸ್ಕಾರ",
        "வணக்கம்",
        "నమస్కారం",
        "സ്വാഗതം",
        "স্বাগতম",
        "નમસ્તે"
    ];

    let i = 0;
    welcome.textContent = greetings[0];

    const changeText = setInterval(() => {

        i++;

        if (i < greetings.length) {

            welcome.style.opacity = "0";
            welcome.style.transform = "translateY(10px)";

            setTimeout(() => {
                welcome.textContent = greetings[i];
                welcome.style.opacity = "1";
                welcome.style.transform = "translateY(0)";
            }, 200);

        } else {

            clearInterval(changeText);

            setTimeout(() => {

                splash.style.opacity = "0";

                setTimeout(() => {
                    splash.style.display = "none";
                }, 800);

            }, 500);

        }

    }, 700);

});

    
        