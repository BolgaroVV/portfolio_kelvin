let nav = document.querySelector('.nav')
let btn = document.querySelector('#nav-btn')
let img = document.querySelector('#nav-btn-img')

nav.onclick = () => {
    if (nav.classList.toggle('open')) {
        img.src = './imgs/icons/nav-close.svg'
    }
    else {
        img.src = './imgs/icons/nav-open.svg'
    }
}

AOS.init();