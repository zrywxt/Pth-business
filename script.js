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
    function nextSlide() {
        for (let i = 0; i < slides.length; i++) {
            slides.forEach((slide) => {
                slide.classList.add("left");
            });
        }
        
}
for (let i = 0; i < slides.length; i++) {
            setInterval(nextSlide, 1000);
}

