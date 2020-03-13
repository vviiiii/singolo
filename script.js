// navigation
const HEADER = document.getElementById("header");
const NAVIGATION = document.getElementById('navigation');
const PHONES_ITEM = document.querySelectorAll('.phones__item');
const PORTFOLIO_CONTAINER = document.querySelector('.portfolio__container');
const PORTFOLIO_IMG = document.querySelectorAll('.portfolio__img');
const PORTFOLIO__MENU = document.getElementById("portfolio__menu");

function shuffleArr(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}


/* sticky header*/
window.onscroll = function() {
    if (window.pageYOffset > 0) {
        HEADER.classList.add('header_sticky');
    } else {
        HEADER.classList.remove('header_sticky');
    }
};

/* navigation */
NAVIGATION.addEventListener('click', (event) => {
    event.preventDefault();
    // add/remove active class
    NAVIGATION.querySelectorAll('a').forEach(elem => {
        elem.classList.remove('navigation__link_active');
    });
    event.target.tagName === 'A' && event.target.classList.add('navigation__link_active');

    //smooth scroll
    const anchorID = event.target.tagName === 'A' && event.target.getAttribute('href').substr(1);

    event.target.tagName === 'A' && document.getElementById(anchorID).scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
});

/*phones*/
Array.from(PHONES_ITEM, el => el.addEventListener('click', event => {
    event.target.parentNode.querySelector('.phone__screen').classList.toggle('phone__screen_off');
}));

/*portfolio*/
PORTFOLIO_CONTAINER.addEventListener('click', event => {
    event.preventDefault();
    PORTFOLIO_IMG.forEach(elem => {
        elem.classList.remove('portfolio__img_active');
    });
    event.target.tagName === 'IMG' && event.target.closest('.portfolio__img').classList.toggle('portfolio__img_active');
});

PORTFOLIO__MENU.addEventListener('click', event => {
    event.preventDefault();
    // add/remove active class
    if (event.target.tagName === 'A') {
        PORTFOLIO__MENU.querySelectorAll('a').forEach(elem => {
            elem.classList.remove('menu__link_active');
        });
        event.target.tagName === 'A' && event.target.classList.add('menu__link_active');

        let arrImg = Array.from(PORTFOLIO_IMG);
        PORTFOLIO_CONTAINER.innerHTML = '';

        shuffleArr(arrImg).forEach(elem => {
            // console.log(elem.outerHTML);
            PORTFOLIO_CONTAINER.innerHTML += elem.outerHTML;
        });
    }
});