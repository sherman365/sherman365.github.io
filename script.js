const carousel = document.querySelector('.carousel');
const container = document.querySelector('.carousel-container');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-control.prev');
const nextBtn = document.querySelector('.carousel-control.next');

let index = 0;
var interval;

function updateCarousel() {
    container.style.transform = `translateX(${-index * carousel.offsetWidth}px)`;
}

function setActiveItem() {
    items.forEach(item => item.classList.remove('active'));
    items[index].classList.add('active');
}

function autoScroll() {
    if (interval != 0) return;
    interval = setInterval(() => {
        index++;
        if (index >= items.length) {
            index = 0;
        }
        updateCarousel();
        setActiveItem();
    }, 4000);
}

prevBtn.addEventListener('click', () => {
    index--;
    if (index < 0) {
        index = items.length - 1;
    }
    clearInterval(interval);
    interval = 0;
    setTimeout(autoScroll, 1000);
    updateCarousel();
    setActiveItem();
});

nextBtn.addEventListener('click', () => {
    index++;
    if (index >= items.length) {
        index = 0;
    }
    clearInterval(interval);
    interval = 0;
    setTimeout(autoScroll, 1000);
    updateCarousel();
    setActiveItem();
});

setActiveItem();
autoScroll();

                                                                /* carousel 2*/

const carousel2 = document.querySelector('.carousel2');
const container2 = document.querySelector('.carousel2-container');
const items2 = document.querySelectorAll('.carousel2-item');
const prevBtn2 = document.querySelector('.carousel2-control.prev');
const nextBtn2 = document.querySelector('.carousel2-control.next');

let index2 = 0;
var interval2;

function updateCarousel2() {
    container2.style.transform = `translateX(${-index2 * carousel2.offsetWidth}px)`;
}

function setActiveItem2() {
    items2.forEach(item2 => item2.classList.remove('active'));
    items2[index2].classList.add('active');
}

function autoScroll() {
    if (interval2 != 0) return;
    interval2 = setInterval(() => {
        index2++;
        if (index2 >= items2.length) {
            index2 = 0;
        }
        updateCarousel2();
        setActiveItem2();
    }, 4000);
}

prevBtn2.addEventListener('click', () => {
    index2--;
    if (index2 < 0) {
        index2 = items2.length - 1;
    }
    clearInterval(interval2);
    interval2 = 0;
    setTimeout(autoScroll2, 1000);
    updateCarousel2();
    setActiveItem2();
});

nextBtn2.addEventListener('click', () => {
    index++;
    if (index2 >= items2.length) {
        index2 = 0;
    }
    clearInterval(interval2);
    interval2 = 0;
    setTimeout(autoScroll2, 1000);
    updateCarousel2();
    setActiveItem2();
});

setActiveItem2();
autoScroll2();
