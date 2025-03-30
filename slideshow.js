var slides = document.getElementsByClassName("slide");
var currentSlide = 0;

function showSlide() {
    Array.from(slides).forEach(slide => slide.style.display = "none");
    slides[currentSlide].style.display = "block";
}

function changeSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    showSlide();
}

showSlide();

setInterval(function() {
    changeSlide(1);
}, 3000);

document.addEventListener("click", function (event) {
    var container = event.target.closest(".slideshow-container");
    if (container) {
        var clickX = event.clientX - container.getBoundingClientRect().left;
        var halfWidth = container.clientWidth / 2;
        changeSlide(clickX < halfWidth ? -1 : 1);
    }
});
