var homeSlide = document.getElementById('homeSlide');
var header=document.getElementById('header');
var intro=document.getElementById('intro');
function homeTransitions(){   
    homeSlide.classList.add('slide');
    header.classList.add('slideDown');
    intro.classList.add('slideUp');
}
window.onload = homeTransitions();