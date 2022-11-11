const navBar = document.querySelector(".btn-navbar");
const lista = document.querySelector(".navbar__menu--index");
const Close = document.querySelector(".btn-navbar-close");

if(navBar){
    navBar.addEventListener('click',()=>{
        lista.classList.toggle('navbar__menu--index-show');
        
    })
}

if(Close){
    Close.addEventListener("click",()=>{
        lista.classList.remove('navbar__menu--index-show');
    })
}

