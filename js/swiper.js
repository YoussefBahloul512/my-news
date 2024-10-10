const mql = window.matchMedia("(max-width: 992px)");

const changeSlideView = (slide) =>{
  var swiper = new Swiper(".swiper", {
    slidesPerView: slide,
    spaceBetween: 30,
    autoplay: true, // from the master 
    loop: true, // from the master as will
    pagination: {
      el: ".swiper-pagination",
      clickable: true, // this for the pionts to allow user to slide 
    },
  });
}

const handleOrintationChange = (e) =>{
  if(mql.matches){
    // var swiper = new Swiper(".swiper", {
    //   slidesPerView: 1,
    //   spaceBetween: 30,
    //   autoplay: true, // from the master 
    //   loop: true, // from the master as will
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true, // this for the pionts to allow user to slide 
    //   },
    // });

    changeSlideView(1)
  }
  else{
    // var swiper = new Swiper(".swiper", {
    //   slidesPerView: 3,
    //   spaceBetween: 30,
    //   autoplay: true, // from the master 
    //   loop: true, // from the master as will
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true, // this for the pionts to allow user to slide 
    //   },
    // });

    changeSlideView(3)
  }
}

handleOrintationChange()
mql.onchange =(e) => {
  handleOrintationChange(e);
}

// SWIPER

// var swiper = new Swiper(".swiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     autoplay: true, // from the master 
//     loop: true, // from the master as will
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true, // this for the pionts to allow user to slide 
//     },
//   });



