// dark mode
// document.getElementById('dark-mode-toggle').addEventListener('click', function() {
//     document.body.classList.toggle('dark-mode');
// });

//menu and navbar
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let signin = document.querySelector('.signin-form');
document.querySelector('.signin-btn').addEventListener('click', () => {
    signin.classList.toggle('active');
});


window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
