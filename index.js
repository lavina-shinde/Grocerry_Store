// for search icon
let searchform = document.querySelector('.search-form'); //returns the first Element within the document that matches the specified selector, or group of selectors
document.querySelector('#search-btn').onclick=()=>{
    searchform.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active')
    navbar.classList.remove('active');
}

// for shopping cart icon
let shoppingCart = document.querySelector('.shopping-cart'); //returns the first Element within the document that matches the specified selector, or group of selectors
document.querySelector('#cart-btn').onclick=()=>{
    shoppingCart.classList.toggle('active');
    searchform.classList.remove('active');
    loginForm.classList.remove('active')
    navbar.classList.remove('active');
}

//for login form
let loginForm = document.querySelector('.login-form'); //returns the first Element within the document that matches the specified selector, or group of selectors
document.querySelector('#login-btn').onclick=()=>{
   loginForm.classList.toggle('active');
   searchform.classList.remove('active');
   shoppingCart.classList.remove('active');
   navbar.classList.remove('active');
}

//media querry javascript
let navbar = document.querySelector('.navbar'); //returns the first Element within the document that matches the specified selector, or group of selectors
document.querySelector('#menu-btn').onclick=()=>{
   navbar.classList.toggle('active');
   searchform.classList.remove('active');
   shoppingCart.classList.remove('active');
   loginForm.classList.remove('active')
 
}
window.onscroll=()=>{
    searchform.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active')
    navbar.classList.remove('active');
 }

//  swiper slider javascript copied code for products
var swiper = new Swiper(".product-slider", {
   loop:true,
    spaceBetween: 20,
    autoplay: {
       delay:7500, //to raise or decrease the time of auto play for slides could be done from here
       disableOnInteraction:false,
    },
    centeredSlides:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });

  //  swiper slider javascript copied for reviews
  var swiper = new Swiper(".review-slider", {
    loop:true,
     spaceBetween: 20,
     autoplay: {
        delay:7500, //to raise or decrease the time of auto play for slides could be done from here
        disableOnInteraction:false,
     },
     centeredSlides:true,
     breakpoints: {
       0: {
         slidesPerView: 1,
       },
       768: {
         slidesPerView: 2,
       },
       1020: {
         slidesPerView: 3,
       },
     },
   });
