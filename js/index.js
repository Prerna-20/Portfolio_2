var homeSlide = document.getElementById('homeSlide');
var header=document.getElementById('header');
var quote = document.getElementById('quote');
var projectLink = document.getElementById('projectLink');
var hello = document.getElementById('hello');
function homeTransitions(){   
    homeSlide.classList.add('slide');
    header.classList.add('slideDown');
    quote.classList.add('slideUp');
    projectLink.classList.add('slideUp');
    hello.classList.add('slideUp');
}
window.onload = homeTransitions();