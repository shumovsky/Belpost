// Time
function startTime() {
    let tm = new Date();
    let hour = tm.getHours();
    let minute = tm.getMinutes();
    let second = tm.getSeconds();
    minute = checkTime(minute);
    second = checkTime(second);
    document.getElementById('time').innerHTML = hour + ":" + minute + ":" + second;
    setTimeout('startTime()', 500);
}

startTime();

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

let d = new Date();
let day = d.getDate();
if (day < 10) {
    day = '0' + day;
}

let month = new Array("января", "февраля", "марта", "апреля", "мая", "июня",
    "июля", "августа", "сентября", "октября", "ноября", "декабря");


let www = document.getElementById('date');

document.getElementById('date').innerHTML = (day + " " + month[d.getMonth()] +
    " " + d.getFullYear());

const homeCard = document.querySelectorAll('.main .card__item');

const optionsCards = document.querySelectorAll('.options .card__item');


const description = document.querySelector('.description');

const descriptionStr = document.querySelectorAll('.cards_description');

const optionsCard = document.querySelector('.options');

const home = document.querySelector('.home');

const downBtn = document.querySelector('.down_btn');

const mainHomeCards = document.querySelector('.main');

const descriotionHomeCards = document.querySelector('.str1');

homeCard.forEach((elem, index) => {
    elem.addEventListener('click', () => {
        if (elem.parentElement.classList.contains('show')) {
            elem.parentElement.classList.remove('show');
            elem.parentElement.classList.add('hidden');
            optionsCard.classList.remove('hidden');
            optionsCard.classList.add('show');
            home.style.backgroundImage = "url('./img/options_bg.png')";
        }
    });
});


downBtn.addEventListener('click', () => {
    if (optionsCard.classList.contains('show')) {
        optionsCard.classList.remove('show');
        optionsCard.classList.add('hidden');
        mainHomeCards.classList.remove('hidden');
        mainHomeCards.classList.add('show');
        home.style.backgroundImage = "url('./img/main_bg.png')";
    } else {
        descriotionHomeCards.classList.remove('show');
        descriotionHomeCards.classList.add('hidden');
        optionsCard.classList.remove('hidden');
        optionsCard.classList.add('show');
    }
});


optionsCards.forEach((elem, e) => {
    elem.addEventListener('click', () => {

        optionsCard.classList.add('hidden');
        optionsCard.classList.remove('show');
        descriotionHomeCards.classList.remove('hidden');
        descriotionHomeCards.classList.add('show');


    });
});