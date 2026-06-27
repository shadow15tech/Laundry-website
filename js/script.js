
/* ================================= */
/* UNIVERSAL LAUNDRY WEBSITE JS */
/* ================================= */



/* ================================= */
/* MOBILE MENU */
/* ================================= */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn && navLinks){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}



/* ================================= */
/* HERO SLIDER */
/* ================================= */

const slides =
document.querySelectorAll(".hero-slide");

if(slides.length > 0){

    let currentSlide = 0;

    function heroSlider(){

        slides.forEach(slide=>{

            slide.classList.remove("active");

        });

        currentSlide++;

        if(currentSlide >= slides.length){

            currentSlide = 0;

        }

        slides[currentSlide]
        .classList.add("active");
    }

    setInterval(heroSlider,5000);

}



/* ================================= */
/* COUNTER */
/* ================================= */

const counters =
document.querySelectorAll(".counter");

if(counters.length > 0){

counters.forEach(counter=>{

    const updateCounter = ()=>{

        const target =
        +counter.getAttribute("data-target");

        const count =
        +counter.innerText;

        const increment =
        target / 150;

        if(count < target){

            counter.innerText =
            Math.ceil(count + increment);

            setTimeout(updateCounter,15);

        }else{

            counter.innerText = target;

        }

    };

    updateCounter();

});

}



/* ================================= */
/* FAQ ACCORDION */
/* ================================= */

const faqItems =
document.querySelectorAll(".faq-item");

if(faqItems.length > 0){

faqItems.forEach(item=>{

    const question =
    item.querySelector(".faq-question");

    question.addEventListener("click",()=>{

        item.classList.toggle("active");

    });

});

}



/* ================================= */
/* BACK TO TOP */
/* ================================= */

const topBtn =
document.getElementById("topBtn");

if(topBtn){

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        topBtn.style.display = "flex";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

}



/* ================================= */
/* BOOKING FORM */
/* ================================= */

const laundryForm =
document.getElementById("laundryForm");

if(laundryForm){

laundryForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    const name =
    document.getElementById("name").value;

    const phone =
    document.getElementById("phone").value;

    const email =
    document.getElementById("email").value;

    const service =
    document.getElementById("service").value;

    const date =
    document.getElementById("date").value;

    const time =
    document.getElementById("time").value;

    const address =
    document.getElementById("address").value;

    const notes =
    document.getElementById("notes").value;

    const message =

`🧺 New Laundry Booking

Name: ${name}

Phone: ${phone}

Email: ${email}

Service: ${service}

Pickup Date: ${date}

Pickup Time: ${time}

Address: ${address}

Notes: ${notes}`;

    const whatsappNumber =
    "919876543210";

    const url =

    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url,"_blank");

});

}



/* ================================= */
/* CONTACT FORM */
/* ================================= */

const contactForm =
document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    const name =
    document.getElementById("contactName").value;

    const email =
    document.getElementById("contactEmail").value;

    const phone =
    document.getElementById("contactPhone").value;

    const message =
    document.getElementById("contactMessage").value;

    const whatsappMessage =

`📩 New Contact Inquiry

Name: ${name}

Email: ${email}

Phone: ${phone}

Message:
${message}`;

    const whatsappNumber =
    "919876543210";

    const url =

    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(url,"_blank");

});

}



/* ================================= */
/* TRACKING FORM */
/* ================================= */

const trackingForm =
document.getElementById("trackingForm");

if(trackingForm){

trackingForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    const popup =
    document.querySelector(".success-popup");

    if(popup){

        popup.style.display = "block";

        setTimeout(()=>{

            popup.style.display = "none";

        },2000);

    }

});

}



/* ================================= */
/* AUTO YEAR */
/* ================================= */

const year =
document.getElementById("year");

if(year){

    year.textContent =
    new Date().getFullYear();

}

