var img = document.getElementById('img');
var images = ['Images/slideshow01.png',"Images/slideshow02.png","Images/slideshow03.png"];

var x =0;

function slideshow(){

  if(x<images.length){
    x = x+1;
  }else{
    x = 1;
  }

  img.innerHTML = "<img src="+images[x-1]+">";
}

//Automating slide

setInterval(slideshow, 6000);

var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";

}
