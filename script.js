gsap.set(".cursor", {xPercent: -50, yPercent: -50});

let xTo = gsap.quickTo(".cursor", "x", {duration: 0.3, ease: "power3"});
let yTo = gsap.quickTo(".cursor", "y", {duration: 0.3, ease: "power3"});

window.addEventListener("mousemove", e => {
  xTo(e.clientX);
  yTo(e.clientY);
});

gsap.set(".cursor-dot", {xPercent: -50, yPercent: -50});

let xTo2 = gsap.quickTo(".cursor-dot", "x", {duration: 0.3, ease: "power3"});
let yTo2 = gsap.quickTo(".cursor-dot", "y", {duration: 0.3, ease: "power3"});

window.addEventListener("mousemove", e => {
  xTo2(e.clientX);
  yTo2(e.clientY);
});

////////////////////////////////////////////////////////////////////
const pointersHover = document.querySelectorAll(".pointer");
const cursor = document.querySelector(".cursor .dot");

pointersHover.forEach(p => {
  p.addEventListener("mouseenter", (e) => {
    cursor.style.width = "3rem";
    cursor.style.height = "3rem";
  })
  p.addEventListener("mouseleave", (e) => {
    cursor.style.width = ".5rem";
    cursor.style.height = ".5rem";
  })
})

/////////////////////////////////////////////////////////////////////
window.addEventListener("load", () => {
    window.scrollTo(0, 0);
});

window.addEventListener("resize", () => {
    window.scrollTo(0, 0);
});

/////////////////////////////////////////////////////////////////////
let tl = gsap.timeline();
tl.fromTo("header .image-background", { opacity: 0 }, { opacity: 1, duration: .5 });
tl.fromTo("header h2", { y: 300 }, { y: 0, duration: 1, delay: 0.5 });
tl.fromTo(".home-hi .button", { y: 150 }, { y: 0, duration: 1 }, "-=1");
tl.fromTo("nav", { y: "-100%" }, { y: "0%", duration: 0.5 });
tl.fromTo(".side-bar", { x: "200%" }, { x: "0%", duration: 0.5 });

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "header",
        start: "+=250",
        end: "bottom-=100 top",
        scrub: 1,
        markers: true,
    },
});
tl2.fromTo("header .image-background", { opacity: 1 }, { opacity: .05 });

////////////////////////////////////////////////////////////
const projetsTop = document.querySelector("#projets-section").getBoundingClientRect().top - 200;
const aboutTop = document.querySelector("#about-section").getBoundingClientRect().top - 200;
const links = document.querySelectorAll(".navbar-link");
const sideBar = document.querySelector(".side-bar");

window.addEventListener("scroll", () => {
    if (window.scrollY > projetsTop && window.scrollY < aboutTop) {
        links[0].classList.add("actif");
        links[1].classList.remove("actif");
        sideBar.classList.remove("inactif");
    } else if (window.scrollY >= aboutTop) {
        links[0].classList.remove("actif");
        links[1].classList.add("actif");
        sideBar.classList.add("inactif");
    } else {
        links[0].classList.remove("actif");
        links[1].classList.remove("actif");
        sideBar.classList.remove("inactif");
    }
});

////////////////////////////////////////////////////////////////////
const projets = document.querySelectorAll(".projets");

projets.forEach(p => {
  p.addEventListener("click", () => {
    projets.forEach(projet => projet.classList.remove("actif"));
    p.classList.add("actif");
    console.log(p)
  })
});