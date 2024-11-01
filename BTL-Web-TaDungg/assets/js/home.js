
let slideIndex = 1;
let slideInterval;

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }
    
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active-dot";
}

function changeSlide(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex += n);
    startAutoSlide();
}

function currentSlide(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex = n);
    startAutoSlide();
}

function startAutoSlide() {
    slideInterval = setInterval(() => {
        slideIndex++;
        showSlides(slideIndex);
    }, 5000); // Chuyển slide sau mỗi 5 giây
}

// Khởi tạo slideshow
showSlides(slideIndex);
startAutoSlide();