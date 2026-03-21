const themeSwitch = document.getElementById('themeSwitch');

let darkTheme = localStorage.getItem('darkTheme');

const enableDarkmode = () => {
    document.body.classList.add('darkTheme');
    localStorage.setItem('darkTheme', 'active');
}

const disableDarkmode = () => {
    document.body.classList.remove('darkTheme');
    localStorage.setItem('darkTheme', null);
    console.clear();
}

if (darkTheme === 'active') enableDarkmode();

themeSwitch.addEventListener('click', () => {
    darkTheme = localStorage.getItem('darkTheme');
    darkTheme !== 'active' ? enableDarkmode() : disableDarkmode();
    
});


const scrollToTopButton = document.querySelector(".scrollToTopButton");
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 200) {
        scrollToTopButton.classList.add("visible");
    } else {
        scrollToTopButton.classList.remove("visible");
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0
    });
});

const slider = document.querySelector(".display");
const slides = document.querySelectorAll('.img');
const right = document.querySelector("#right");
let idx = 1;

right.addEventListener('click', () => {
    if (idx >= slides.length) {
        idx = 0;
    }
    let percent = idx * 100;
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${percent}%)`;
    });
    idx++;
});
function slide() {
    for(let i = 0; i < slides.length; i++){
if (idx >= slides.length) {
        idx = 0;
    }
    let percent = idx * 100;
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${percent}%)`;
    });
    idx++;
}
}
setTimeout(slide, 1000);

//remove the slider animation, remove the shadows , add the popup animaton and images.