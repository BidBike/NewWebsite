let slideIndex = 1;
    showSlides(slideIndex);

    function changeSlide(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slides")[0];
        let dots = document.getElementsByClassName("dot");
        let totalSlides = slides.getElementsByTagName("img").length;
        if (n > totalSlides) {slideIndex = 1}
        if (n < 1) {slideIndex = totalSlides}
        let offset = -(slideIndex - 1) * 100;
        slides.style.transform = `translateX(${offset}%)`;
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        dots[slideIndex - 1].className += " active";
    }