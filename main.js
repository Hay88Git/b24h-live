let Nav = document.getElementById("nav");
let OpenNav = function(){
  Nav.style.left = "0%";
}
let CloseNav = function(){
  Nav.style.left = "-100%";
}

var swiper = new Swiper(".small_slide", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: true,
  interval: 1000,
  grabCursor: true,
  pauseOnMouseEnter: true,
  breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
});

function url(){
  location.href = "https://www.hay88.one/?inviteCode=0167082";
}