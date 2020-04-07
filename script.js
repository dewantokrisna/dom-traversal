// Event Handling
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');
// //

// close.addEventListener('click', function () {
//     card.style.display = 'none';
// });

//DOM TRAVERSAL atau Penelusuran DOM
// const close = document.querySelectorAll('.close');
// const card = document.querySelectorAll('.card');
// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function (e) {
//         //close[i].parentElement.style.display = none;
//         e.target.parentElement.style.display = 'none';
//     });
// }
// close.forEach(function (el) {
//     el.addEventListener('click', function (e) {
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault();
//         e.stopPropagation();
//     });
// });

// const nama = document.querySelector('.nama');
// console.log(nama.parentElement.parentElement);

// const cards = document.querySelectorAll('.card');
// cards.forEach(function (card) {
//     card.addEventListener('click', function () {
//         alert('ok');
//     });
// });

const container = document.querySelector('.container');

container.addEventListener('click', function (e) {
    if (e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
});