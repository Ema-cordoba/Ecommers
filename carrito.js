const btnShow = document.querySelector('.cartShow');
const divShow = document.querySelector('.cartInfo');

btnShow.addEventListener("click",()=>{
    divShow.classList.toggle('cartInfo-show')
})
