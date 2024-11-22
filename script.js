function function1() {
    window.open("https://youtu.be/lod_LUp3ggc?si=1Ni-_2f7dp9JLQZ4","_blank");
}

let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelector(".slides");
    const totalSlides = slides.children.length;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}
