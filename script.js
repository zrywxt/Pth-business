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
const left = document.querySelector("#left");
var idx = 0;

let gdx = 1;
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










//remove the slider animation, remove the shadows , add the popup animaton and images.


const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the 'active' class when it scrolls into view
            entry.target.classList.add('active');
            
            // Optional: Stop watching once it has popped up once
            // scrollObserver.unobserve(entry.target);
        }
    });
}, { 
    threshold: 0.15 // Trigger when 15% of the div is visible
});

// Select all divs you want to animate and start watching them
document.querySelectorAll('.card').forEach(div => {
    scrollObserver.observe(div);
});
