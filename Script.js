gsap.from("#Logotext , #dsert", {
  x:-100,
  duration:3,
  delay:0.5,
  opacity:0,
  stagger:0.2
})

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change slide every 2 seconds
}

$(document).ready(function() {
  $('.dropdown').click(function() {
      $(this).children('.dropdown-content').toggle();
  });
});