// the answer from the master: the answer from GPT is down

// //use window.scrollY
// var scrollpos = window.scrollY;
// var navbar = document.getElementById("navbar");

// function add_class_on_scroll() {
//     navbar.classList.add("small-navbar");
// }

// function remove_class_on_scroll() {
//     navbar.classList.remove("small-navbar");
// }

// window.addEventListener('scroll', function(){ 
//     //Here you forgot to update the value
//     scrollpos = window.scrollY;

//     if(scrollpos > 10){
//         add_class_on_scroll();
//     }
//     else {
//         remove_class_on_scroll();
//     }
// });


document.getElementById("year").innerHTML = new Date().getFullYear()

window.addEventListener('scroll', function() {  // this code test from the master but I get it from GPT :) because am pro :(, and another code in style.scss
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 500) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

