let searchBtn = document.querySelector('#search-btn');
let searchFrom = document.querySelector('.header .search-form');

searchBtn.onclick = () => {
    searchBtn.classList.toggle('fa-times');
    searchFrom.classList.toggle('active');
}

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    searchBtn.classList.remove('fa-times');
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchFrom.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


// day and night

let themeBtn = document.querySelector('#theme-btn');

themeBtn.onclick = () => {
    themeBtn.classList.toggle('fa-sun');

    if(themeBtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}


// owl-carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:1
        }
    }
})













// let slides = document.querySelectorAll('.home .slide');
// let index = 0;

// function next(){
//     slides[index].classList.remove('active');
//     index = (index + 1) % slides.length;
//     slides[index].classList.add('active');
// }

// function prev(){
//     slides[index].classList.remove('active');
//     index = (index - 1 + slides.length) % slides.length;
//     slides[index].classList.add('active');
// }