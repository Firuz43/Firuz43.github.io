const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)


function changeBg() {
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY;
    if(scrollY < 350) {
        navbar.classList.remove('bgColor');
    }else {
        navbar.classList.add('bgColor');
    }
}

window.addEventListener('scroll', changeBg);