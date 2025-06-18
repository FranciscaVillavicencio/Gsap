//es una forma de tomar el elemento logo desde el DOM
let logo = document.querySelector('.logo');

//metodo from: como va a arrancar un elemento cuando se carga la pagina
gsap.from(logo, {
  color: "blue",
  backgroundColor: "orange",
  x: "-100px", // el logo arranca desde la izquierda
  // rotate: 360, // el logo arranca rotando
  // scale: 3, // el logo arranca con un tamaño mas grande
  duration: 1, // la duracion de la animacion es de 1 segundo
  // delay: 2, // la animacion se retrasa 2 segundos en partir desde que se carga la pagina
  ease: "back.out(1.7)" // la animacion es mas suave al final
})


//otra dorma de tomar un elemento del DOM es llamando a la clase directamente
//en este caso se toma el elemento menu-item, una clase que se repite en varios elementos
gsap.from(".menu-item", {
  y: "-100px", // entran desde arriba
  ease: "power3.out", // la animacion es mas suave al final
  stagger: 0.2, // agregar un tiempo de espera entre cada elemento para que entren en tiempos diferidos
})



//separacion de palabras con SpliteType

// //en este caso separamos por palabras y caracteres
// const text = new SplitType(".hero-title", { types: "words, chars" });

// gsap.from(titulo.chars, {
//   // y: "-300px", // los elementos entran desde arriba
//   //y: gsap.utils.random(-150, 150), // los elementos entran desde arriba en un rango aleatorio, pero aun asi actua en bloque
//   y:() => gsap.utils.random(-150, 150), // al agregar una funcion a Y, genera que se calcule el valor aleatorio a cada elemento
// // Si bien ahora los elementos entran de forma aleatoria, la animacion se recalcula, quitandole fluides al elemento, ABAJO LA SOLUCION A ESTO
// delay:2
// })


// titulo.chars.forEach((char, index) => {
//   gsap.from(char, {
//     y: gsap.utils.random(-150, 150),
//     x: gsap.utils.random(-300, 300),
//     rotate: gsap.utils.random(-360, 360),
//     scale: gsap.utils.random(0.5, 1.5),
//     duration: 1,
//     delay: index * 0.01,// como hacer que los caracteres entren en un tiempo diferido
//     color: `rgb(${gsap.utils.random(0, 255)}, ${gsap.utils.random(0, 255)}, ${gsap.utils.random(0, 255)})`, // para que cada letra tenga un color diferente random
//     opacity: 0,
//     ease: "back.out(1.7)" // la animacion es mas suave al final y tiene un rebote
//   })
// })


// forma para que las animaciones entren en distinto tiempo, con timeLine

const text = new SplitType(".hero-title", { types: "words, chars" });



text.chars.forEach((char, index) => {


  //forma para recuperar el color original de un elemento
  let charOriginalColor = window.getComputedStyle(char).color; // esto es para recuperar el color original del elemento


  let charsTl = gsap.timeline();

  // como es una linea de tiempo, se ejecutara esto:
  charsTl.from(char, {
    y: gsap.utils.random(-150, 150),
    x: gsap.utils.random(-300, 300),
    rotate: gsap.utils.random(-360, 360),
    scale: gsap.utils.random(0.5, 1.5),
    duration: .75,
    delay: index * 0.01,// como hacer que los caracteres entren en un tiempo diferido
    opacity: 0,
    ease: "back.out" // la animacion es mas suave al final y tiene un rebote
  })

  // y luego en la linea de tiempo se ejecutara esta parte del color
  charsTl.from(char, {
    color: `rgb(${gsap.utils.random(0, 255)}, ${gsap.utils.random(0, 255)}, ${gsap.utils.random(0, 255)})`,
    duration: 1,// para que cada letra tenga un color diferente random
  }, "-=.25") // el -2.5 significa que se ejecutara 2.5 segundos antes de que termine la animacion anterior





  //animar el  mouse Hover
  char.addEventListener("mouseenter", charsHover);


  function charsHover() {

    //otra forma de aplicar timeline es "declararlo" y aplciar el .to directamente al elemento
    gsap.timeline()
      //este .to lleva a los elementos a un lugar aleatorio
      .to(char, {
        y: gsap.utils.random(-50, 50),
        x: gsap.utils.random(-50, 50),
        rotate: gsap.utils.random(-90, 90),
        scale: gsap.utils.random(0.5, 1.5),
        color: `rgb(${gsap.utils.random(0, 255)}, ${gsap.utils.random(0, 255)}, ${gsap.utils.random(0, 255)})`, // para que cada letra tenga un color diferente random
        duration: .5,
        ease: "back.out", // la animacion es mas suave al final y tiene un rebote
        // hasta este punto yo puedo jugar con los elementos desde la posicion que quedaron.
        onStart: () => {
          char.removeEventListener("mouseenter", charsHover);// esto es para saber cuando termina la animacion
        }

      })
      .to(char, {
        y: 0,
        x: 0,
        rotate: 0,
        scale: 1,
        color: charOriginalColor,
        delay: 1,
        duration: .5,
        ease: "back.out",
        onComplete: () => {
          setTimeout(() => {
            char.addEventListener("mouseenter", charsHover);// esto es para saber cuando termina la animacion
          }, 100); // esto es para que se vuelva a activar el evento mouseenter despues de 1 segundo
        }
      })
  }
})