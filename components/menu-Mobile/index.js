

const $menuMobile = document.querySelector('.mobile-menu');
const $menuList = document.querySelector('.menu-list');

$menuMobile.addEventListener('click', () => {
    $menuMobile.classList.toggle('active');
    $menuList.classList.toggle('active');
});


const $navLink = document.querySelectorAll('.nav-link');
console.log($navLink);

$navLink.forEach(link => link.addEventListener('click', () => {
    $menuMobile.classList.remove('active');
    $menuList.classList.remove('active');
} )  )
