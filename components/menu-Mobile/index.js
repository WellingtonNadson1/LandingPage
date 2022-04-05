

const $menuMobile = document.querySelector('.mobile-menu');
const $menuList = document.querySelector('.menu-list');
const $menu =document.querySelector('.menu');

$menuMobile.addEventListener('click', () => {
    $menuMobile.classList.toggle('active');
    $menuList.classList.toggle('active');
    $menu.classList.toggle('active');
});


const $navLink = document.querySelectorAll('.nav-link');
console.log($navLink);

$navLink.forEach(link => link.addEventListener('click', () => {
    $menuMobile.classList.remove('active');
    $menuList.classList.remove('active');
    $menu.classList.remove('active');
} )  )
