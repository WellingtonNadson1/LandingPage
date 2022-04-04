

const $menuMobile = document.querySelector('.mobile-menu');
const $menuList = document.querySelector('.menu-list');

$menuMobile.addEventListener('click', () =>  $menuList.classList.toggle('active'));

