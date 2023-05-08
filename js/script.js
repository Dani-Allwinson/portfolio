const menuIcon = document.getElementsByClassName('togglemenu')[0];
const navBarLinks = document.getElementsByClassName('ul-container')[0];
const bar1 = document.getElementById('b1');
const bar2 = document.getElementById('b2');
const bar3 = document.getElementById('b3');
console.log(menuIcon);

menuIcon.addEventListener('click',()=>{
    navBarLinks.classList.toggle('active');
    menuIcon.classList.toggle('togglemenu--open')
})





