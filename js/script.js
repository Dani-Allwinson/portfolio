const menuBtn = document.querySelector('togglemenu');
const menuLink = document.getElementById('menuTab');
const container = document.querySelector('.ul-container');
function fun(){
    menuLink.style="transition: all 0.5s ease-in-out;"
    menuLink.classList.toggle('show');
}



