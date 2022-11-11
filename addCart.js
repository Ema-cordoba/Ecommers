const btnAdd1 = document.querySelector('.icono-Add');
const btnAdd2 = document.querySelector('.btn-add2');
const btnAdd3 = document.querySelector('.btn-add3');
const conteiner = document.querySelector('.cartInfo');
const allProduc = document.querySelector(".allProduct")


const products = [
    {
    id: 1,
    name: 'Hoodies',
    price: 14.00,
    image: "/img/featured1.png",
    category: 'hoodies',
    quantity: 10
  },
  {
    id: 2,
    name: 'Shirts',
    price: 24.00,
    image: "/img/featured2.png",
    category: 'shirts',
    quantity: 15
  },
  {
    id: 3,
    name: 'Sweatshirts',
    price: 24.00,
    image: "/img/featured3.png",
    category: 'sweatshirts',
    quantity: 20
  }
];

let carrito = [];

function printProduct(){
    let html = "";
    products.forEach(({id,name,price,image,category,quantity}) =>{
    html +=   ` <div class="cartProduct">
        <h2 class="idProduct">${quantity}</h2>
        <h3 class="nameProduct">${name}</h3>
        <h4 class="priceProduct">${price}</h4>
        <img src="${image}" class="imageProduct">
        <p class="categoryProduct">${category}</p>
        <button class="add_Prod"><img src="/img/add.png" class="btnAddProduct" id="${id}"></button>
    </div>
    `
    })
    
    allProduc.innerHTML=html;
  
    
}

printProduct();


function drawProduct(){
    let html = "";
    carrito.forEach(({id,name,price,image,category,quantity})=>{
        html +=   ` <div class="cartProduct-Shop">
        <p class="idProduct">${quantity}</p>
        <p class="nameProduct">${name}</p>
        <p class="priceProduct">${price}</p>
        <img src="${image}" class="imageProduct">
        <p class="categoryProduct">${category}</p> <p class="count">0</p>
        <button class="add_Prod-Eliminar" id="${id}">Eliminar</button>
    </div>
    `  
    })
    conteiner.innerHTML=html;
}
const count = document.querySelector(".count");


allProduc.addEventListener("click",(e)=>{
    if(e.target.classList.contains("btnAddProduct")){
        const btnId = Number(e.target.id)
        const findId = products.find((producto) => producto.id === btnId)
        const repeatProduct = carrito.find(producto => producto.id ===btnId)
        if(repeatProduct) {
        return count + 1;
        }
        carrito.push(findId);
    }
    drawProduct();
})


conteiner.addEventListener("click",(e)=>{
    if(e.target.classList.contains("add_Prod-Eliminar")){
        const btnId = Number(e.target.id)

    carrito = carrito.filter((producto)=> producto.id !== btnId)
    }


    drawProduct();
})

