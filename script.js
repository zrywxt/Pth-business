// dark theme logic
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


// scroll to top logic
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


// slider logic
const slider = document.querySelector(".display");
const slides = document.querySelectorAll('.img');
let  idx = 0;

right.addEventListener('click', () => {
    if (idx < slides.length - 1) {
        idx++;
        slides.forEach((slide) => { 
            slide.style.transform = `translateX(-${idx * 100}%)`;
        });
    }
});

left.addEventListener('click', () => {
    if (idx > 0) {
        idx--;
        slides.forEach((slide) => { 
            slide.style.transform = `translateX(-${idx * 100}%)`;
        });
    }
});


// .card popup animaton logic
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { 
    threshold: 0.15
});

document.querySelectorAll('.card').forEach(div => {
    scrollObserver.observe(div);
});
