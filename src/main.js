 let logo = document.querySelector('.logo');



gsap.from(logo, {
  color: "red",
  backgroundColor: "blue",
  x: "-100px",
  rotate:360,
  scale: 5,
  duration: 1,
})