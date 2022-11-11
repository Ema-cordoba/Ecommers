loading1();
function loading1(){
    const load = document.querySelector(".loading");
    window.addEventListener("load", function(){
        
        setTimeout(() => {
            load.style.display = "none";
        }, 3000);
    });
}