const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.links');
const links = document.querySelectorAll('.links li');
const toTop = document.querySelector('.to-top');

burger.addEventListener("click", () => {
    navLinks.classList.toggle('active');
    //the Links Fade
    links.forEach(link => {
        link.classList.toggle('fade');
    });
    //the X transition
    burger.classList.toggle('toggle');
});
//to top button
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add('go');
    } else {
        toTop.classList.remove('go');
    }
})
// The Slider
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    freeMode: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});