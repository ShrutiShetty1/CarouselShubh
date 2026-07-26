// =========================================
// SHUBH LABH DISTRIBUTIONS
// Main Website Script
// =========================================


// ===============================
// SPLASH SCREEN
// Show only first visit
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const splash = document.getElementById("splash");
    const welcome = document.getElementById("welcomeText");

    if(splash){

        if(sessionStorage.getItem("splashShown")){

            splash.style.display = "none";

        }
        else{

            const greetings = [
                "Welcome",
                "नमस्ते",
                "ನಮಸ್ಕಾರ",
                "வணக்கம்",
                "నమస్కారం",
                "സ്വാഗതം"
            ];


            let index = 0;


            const interval = setInterval(()=>{

                if(welcome){

                    welcome.style.opacity="0";

                    setTimeout(()=>{

                        welcome.textContent = greetings[index];

                        welcome.style.opacity="1";

                    },200);

                }


                index++;


                if(index >= greetings.length){

                    clearInterval(interval);

                }


            },700);



            setTimeout(()=>{

                splash.style.opacity="0";


                setTimeout(()=>{

                    splash.style.display="none";

                },800);


                sessionStorage.setItem(
                    "splashShown",
                    "true"
                );


            },4500);

        }

    }

});



// ===============================
// HEADER SCROLL EFFECT
// ===============================

const header = document.querySelector("header");


window.addEventListener("scroll",()=>{

    if(header){

        if(window.scrollY > 80){

            header.classList.add("scrolled");

        }
        else{

            header.classList.remove("scrolled");

        }

    }

});



// ===============================
// MOBILE MENU
// ===============================

const menuToggle =
document.getElementById("menu-toggle");


const navLinks =
document.getElementById("nav-links");


if(menuToggle && navLinks){


menuToggle.addEventListener("click",()=>{


    navLinks.classList.toggle("active");


    const icon =
    menuToggle.querySelector("i");


    if(navLinks.classList.contains("active")){

        icon.classList.replace(
            "fa-bars",
            "fa-times"
        );

    }
    else{

        icon.classList.replace(
            "fa-times",
            "fa-bars"
        );

    }


});


}


// Close menu after click

document.querySelectorAll(".nav-links a")
.forEach(link=>{


link.addEventListener("click",()=>{


    if(navLinks){

        navLinks.classList.remove("active");

    }


});


});



// ===============================
// HERO CAROUSEL
// ===============================


document.addEventListener("DOMContentLoaded",()=>{


const slides =
document.querySelectorAll(".slide");


const dots =
document.querySelectorAll(".dot");


const next =
document.querySelector(".next");


const prev =
document.querySelector(".prev");



if(slides.length){


let current=0;



function showSlide(index){


slides.forEach(slide=>{

slide.classList.remove("active");

});


dots.forEach(dot=>{

dot.classList.remove("active");

});


current=index;


if(current >= slides.length){

current=0;

}


if(current < 0){

current=slides.length-1;

}



slides[current]
.classList.add("active");



if(dots[current]){

dots[current]
.classList.add("active");

}


}




function nextSlide(){

showSlide(current+1);

}



function prevSlide(){

showSlide(current-1);

}



if(next){

next.addEventListener(
"click",
nextSlide
);

}



if(prev){

prev.addEventListener(
"click",
prevSlide
);

}



dots.forEach((dot,index)=>{


dot.addEventListener("click",()=>{

showSlide(index);

});


});



setInterval(
nextSlide,
5000
);



}


});




// ===============================
// SMOOTH SCROLL
// ===============================


document.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{


anchor.addEventListener("click",function(e){


const target =
document.querySelector(
this.getAttribute("href")
);



if(target){

e.preventDefault();


target.scrollIntoView({

behavior:"smooth"

});


}


});


});



// ===============================
// SCROLL REVEAL
// ===============================


const sections =
document.querySelectorAll("section");


function reveal(){


sections.forEach(section=>{


const position =
section.getBoundingClientRect().top;


if(position <
window.innerHeight - 100){


section.classList.add("show");


}


});


}



window.addEventListener(
"scroll",
reveal
);


reveal();



// ===============================
// CONTACT FORM EMAILJS
// ===============================


(function(){

if(typeof emailjs !== "undefined"){

emailjs.init(
"vhJD7jOsmCgKUpmMi"
);

}

})();



const contactForm =
document.getElementById("contactForm");



if(contactForm){


contactForm.addEventListener(
"submit",
function(e){


e.preventDefault();



emailjs.sendForm(

"service_tgvz9ub",

"template_jtl6zlm",

this

)


.then(()=>{


alert(
"Thank you! Your message has been sent."
);


this.reset();


})


.catch(error=>{


console.log(error);


alert(
"Message failed. Please try again."
);


});


});


}



// ===============================
// CAREER FORM EMAILJS
// ===============================


const careerForm =
document.getElementById("careerForm");



if(careerForm){


careerForm.addEventListener(
"submit",
function(e){


e.preventDefault();



emailjs.sendForm(

"service_tgvz9ub",

"template_eiq1f0f",

this

)


.then(()=>{


alert(
"Your application has been submitted successfully."
);


this.reset();


})


.catch(error=>{


console.log(error);


alert(
"Application failed. Please try again."
);


});


});


}