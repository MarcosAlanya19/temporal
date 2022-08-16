import './style/styles.css'
import './style/about.css'
import './style/contact.css'
import './style/courses.css'
import './router/index.routes'
import 'animate.css';

import { router } from './router/index.routes'

// toggle
const $test1 = document.querySelector<HTMLElement>('.test1')!;
const $test2 = document.querySelector<HTMLElement>('.test2')!;
const $smile = document.querySelector<HTMLElement>('.smile')!;
const $root = document.querySelector<HTMLElement>('#root')!;

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
    $test1.classList.toggle('d-none');
    $test2.classList.toggle('d-none');
    $smile.classList.toggle('d-none');
    $root.classList.toggle('d-none');
    }, 5000);
});



// ROUTER OF PAGES
router(window.location.hash)
window.addEventListener('hashchange', () =>{
  router(window.location.hash);
})

// Scroll nav
const $nav = document.querySelector('.nav')!
window.addEventListener('scroll', () => {
  $nav.classList.toggle
  ('window-scroll', window.scrollY > 0);
});

//show/hide faq asnwer
const faqs = document.querySelectorAll<HTMLElement>('.faq')!;

    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            faq.classList.toggle('open');

            //change icon
            const icon = faq.querySelector('.faq__icon i')!;
            if (icon.className === 'uil uil-plus') {
                icon.className = 'uil uil-minus';
            }else {
                icon.className = 'uil uil-plus';
            }
        })
    })

//show/hide navbar on click
const menu =document.querySelector<HTMLElement>('.nav__menu')!;
const menuBtn=document.querySelector<HTMLElement>('#open-menu')!;
const closeBtn=document.querySelector<HTMLElement>('#close-menu')!;

menuBtn.addEventListener('click', () => {
    menu.style.display ="flex";
    closeBtn.style.display ="inline-block";
    menuBtn.style.display ="none";
})


//close navbar on click
// closeBtn.addEventListener('click', () => {
//     menu.style.display ="none";
//     closeBtn.style.display ="none";
//     menuBtn.style.display ="inline-block";
// })
const closeNav =() => {
    menu.style.display ="none";
    closeBtn.style.display ="none";
    menuBtn.style.display ="inline-block";
}

closeBtn.addEventListener('click', closeNav);
