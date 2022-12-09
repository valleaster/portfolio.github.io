// Typing delay
var delayTime = 1000;

if (window.innerWidth < 768) {
    delayTime = 0;
} else {
    delayTime = 1000;
}

var typed = new Typed("#typed", {
    strings: ["Vallirie Easter.", "a Web Developer.", "a potato :)", "Vallirie Easter."],
    startDelay: delayTime,
    typeSpeed: 80,
    backSpeed: 65,
    loop: false
});

// Navbar scrolling behavior
(function(){

    var doc = document.documentElement;
    var w   = window;
    var curScroll;
    var prevScroll = w.scrollY || doc.scrollTop;
    var curDirection = 0;
    var prevDirection = 0;
    var navbar = document.querySelector(".navbar");
    var toggled;
    var threshold = 200;

    var checkScroll = function() {
        curScroll = w.scrollY || doc.scrollTop;
        if(curScroll > prevScroll) {
            curDirection = 2;
        }
        else {
            curDirection = 1;
        }

        if(curDirection !== prevDirection) {
            toggled = toggleNavbar();
        }

        prevScroll = curScroll;
        if(toggled) {
            prevDirection = curDirection;
        }
    };

    var toggleNavbar = function() { 
        toggled = true;
        if(curDirection === 2 && curScroll > threshold) {
            navbar.classList.add("hide");
        }
        else if (curDirection === 1) {
            navbar.classList.remove("hide");
        }
        else {
            toggled = false;
        }
        return toggled;
    };

    window.addEventListener('scroll', checkScroll);

})();

window.addEventListener('scroll', () => {
    document.querySelector(".navbar").classList.toggle("window-scroll", window.scrollY > 100);
});

// Mobile navbar (mostly)
const hamburgerButton = document.getElementsByClassName("hamburger")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const body = document.body;
const navbarLinksItems = document.querySelectorAll('.navbar-links a');

hamburgerButton.addEventListener('click', () => {
    event.preventDefault();
    body.classList.toggle('active');
    navbarLinks.classList.toggle('active');
});

navbarLinksItems.forEach((item) => {
    item.addEventListener('click', () => {
        event.preventDefault();
        const targetId = item.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start', 
            inline: 'nearest',
            offset: 100,
        });
      navbarLinks.classList.toggle('active');
      body.classList.toggle('active');
    });
});

// Animation load on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    })
})

const scrollElements = document.querySelectorAll(".scroll-effect");
scrollElements.forEach((el) => observer.observe(el));
