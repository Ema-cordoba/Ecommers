const mode = document.querySelector('#mode');
const body = document.querySelector('body');

mode.addEventListener('click',e => {
    body.classList.toggle('darkmode');
    
})