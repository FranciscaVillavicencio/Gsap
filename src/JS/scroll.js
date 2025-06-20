//PRUEBA CAJITA CON SCROLLTRIGGER
// gsap.registerPlugin(ScrollTrigger);


// gsap.to(".cajita", {
//     x: 400,
//     duration: 4,
//     // scrollTrigger: ".cajita2" forma de animar un objeto :cajita, cuando otro elemento aparece en la pantalla
    
//     //SCROLLTRIGGER COMO OBJETP
//     scrollTrigger: {
//         trigger: ".cajita", // ACTIVADOR
//         start: "top 50%", // cuando el top del elemento llego a la mitad de viewport se activara
//         end:"bottom 40%",
//         toggleClass: "red",
//         toggleActions: "play none none none", // Entremos a la animacion, salimos de la animacion, volvermos a entrar y volvemos a salir
//                 //play pause resume reverse restart none               
//         markers:true,
//         scrub: 1, //  hace que la animacion se sincronice con el scroll
//     }
// })


gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-title", {
  opacity:0,
  scale: 0.5,
  delay:1,
  duration:1
})


gsap.from(".about-title", {
 opacity:0,
  y:30,
  delay:0.5,
  scrollTrigger: ".about-title"
})

gsap.from(".about-subtitle span", {
  y:100,
  duration:1,
  stagger: 0.5,
  scrollTrigger: ".about-grid",
})

gsap.from(".about-item p", {

    y:100,
    opacity:0,
    scrollTrigger: ".about-grid",
    duration:1,
    stagger:0.5,
    delay:0.5

})

gsap.to(".gato-foto", {
    bottom: "100%",
    right: "100%",
    scrollTrigger:{
       trigger: ".gato-foto",
       start: "bottom bottom",
       end:"top top",
       scrub: true,
       markers:true

    }
})
