import Button from './components/button'
import './components/menu-Mobile'
import './style.css'



const $home = document.querySelector('section.left > div:nth-child(1)');
$home.insertAdjacentHTML('beforeend', Button('bnt-cta-primary', 'Saiba mais'));

// I created button componet for the box cards 
const $cardSolution = document.querySelectorAll('.card');
let $btnCardSolution = Array
.from($cardSolution)
.map((x) => x.insertAdjacentHTML('beforeend', Button('bnt-cta-second', 'Saiba mais')));


const $btnAboutUs = document.querySelector('#about-us');
$btnAboutUs.insertAdjacentHTML('beforeend', Button('btn-cta-third', 'Saiba mais'));