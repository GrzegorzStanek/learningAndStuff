var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n)
}

function currentSlide(n) {
    showSlides(slideIndex = n);

}


function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slideshowPic");


    if (n < 1) {
        slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].className.replace("none")
    }

    slides[slideIndex - 1].className += "active";

}