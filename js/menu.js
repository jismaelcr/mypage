

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // new Glider(document.querySelector('.carousel__lista'),{
    //   slidesToShow: 4,
    //   slidesToScroll: 2,
    //   draggable: true,
    //   rewind: true,
    //   dots: '.carousel_indicadores',
    //   arrows: {
    //       prev: '.carousel__anterior',
    //       next: '.carousel__siguiente'
    //   },
    //   responsive: [
    //    {
    //       // screens greater than >= 775px
    //       breakpoint: 450,
    //       settings: {
    //         // Set to `auto` and provide item width to adjust to viewport
    //         slidesToShow: 8,
    //         slidesToScroll: 4 /*,
    //         itemWidth: 150,
    //         duration: 0.25*/
    //       }
    //     },{
    //       // screens greater than >= 1024px
    //       breakpoint: 800,
    //       settings: {
    //         slidesToShow: 10,
    //         slidesToScroll: 5/*,
    //         itemWidth: 150,
    //         duration: 0.25*/
    //       }
    //     }
    //   ]
    // });
  });

const hamburguer = document.querySelector('.hamburguer')
const menu = document.querySelector('.menu-navegacion')
const closeVLight = document.querySelector('.closeV')
const closePLight = document.querySelector('.closeP')

hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

closeVLight.addEventListener('click', ()=>{
    videoLight.src="";
    console.log("cerrarVLigh")
})
closePLight.addEventListener('click', ()=>{
    imagenLight.src = "";
    console.log("cerrarPLigh")
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != hamburguer){
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})

/*
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};


// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;


// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
*/

ScrollReveal().reveal('.header');
ScrollReveal().reveal('.contenedor-servicio');
ScrollReveal().reveal('.contenedor-galeria');
ScrollReveal().reveal('.gallery');
ScrollReveal().reveal('.contenedor');
ScrollReveal().reveal('.experts');
ScrollReveal().reveal('.footer');
