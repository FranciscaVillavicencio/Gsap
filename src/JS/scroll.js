
gsap.registerPlugin(ScrollTrigger);


gsap.to(".cajita", {
    x: 250,
    duration: 4,
    scrollTrigger: ".cajita2"
})