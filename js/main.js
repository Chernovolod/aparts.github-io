// var header = document.querySelector('header');
// var imageWrapper = document.querySelector('.img-wrapper');
//
// setInterval(function(){
//     header.className = 'first';
//
// },4000);
// setInterval(function() {
//     if (    header.className === 'first') {
//         header.className = 'second';
//     }
// },8000);
//
// imageWrapper.onclick = function() {
//     imageWrapper.classList.remove('img-wrapper');
//     imageWrapper.classList = 'active';
// };

var europeGallery = document.querySelectorAll('.europe-img');
var EnBtn = document.querySelector('.switch-language-btn');
var navElement = document.querySelectorAll('nav ul li a');

console.log(EnBtn, navElement);

function ChangeNavToEnglish() {
    var EnglishNav = ['Home', 'Apartments near Minsk-Arena ', 'Apartments in a historical center'];

    for (var i = 0; i < navElement.length; i++) {
        navElement[i].innerText = EnglishNav[i];
    };
};

function ChangeNavToRussian() {
    var RussianNav = ['Главная', 'Апартаменты в районе Минск-Арены ', 'Апартаменты в историческом центре'];

    for (var i = 0; i < navElement.length; i++) {
        navElement[i].innerText = RussianNav[i];
    }
}

function ChangeHeadersToEnglish() {
    var h1 = document.querySelector('h1');
    var h2 = document.querySelectorAll('h2');
    var EnglishH2 = ['Apartments near Minsk-Arena', 'Apartments in a historical center'];

    h1.innerText = 'Apartments in Minsk';
    for (var i = 0; i < h2.length; i++) {
        h2[i].innerText = EnglishH2[i];
    }
}

function ChangeHeadersToRussian() {
    var h1 = document.querySelector('h1');
    var h2 = document.querySelectorAll('h2');
    var RussianH2 = ['Апартаменты в районе Минск-Арены', 'Апартаменты в историческом центре'];

    h1.innerText = 'Апартаменты в Минске';
    for (var i = 0; i < h2.length; i++) {
        h2[i].innerText = RussianH2[i];
    }
}

function changeLanguage() {
    if(EnBtn.innerHTML === 'EN') {
        EnBtn.innerText = 'RU';
        ChangeNavToEnglish();
        ChangeHeadersToEnglish();

    } else {
        EnBtn.innerText = 'EN';
        ChangeNavToRussian();
        ChangeHeadersToRussian();
    }

};

EnBtn.addEventListener('click', changeLanguage);

(function showModal() {

    for (var i = 0; i < europeGallery.length; i++) {
        europeGallery[i].addEventListener('click', function () {
            console.log('clck');
        }, false);


    }
})();


