import { products } from "./products";

let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');
let productsID = [products[0].id, products[1].id, products[2].id, products[3].id, products[4].id, products[5].id, products[6].id];



let id = [productsID[3]];



console.log(id);

localStorage.setItem("ID Producto", productsID);

cartIcon.onclick = () => {
    cart.classList.add("active");
};

closeCart.onclick = () => {
    cart.classList.remove("active");
};

if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready();
}

// Remove Product

function ready() {
    var removeCartButtons = document.getElementsByClassName('cart-remove')
    console.log(removeCartButtons)
    for(var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem)
    }
    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for(var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanges);
    }
    // Add to cart
    var addCart = document.getElementsByClassName('add-cart');
    for(var i = 0; i < addCart.length; i++) {
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }
}

function removeCartItem(event) {
    var buttonClicked = event.target; 
    buttonClicked.parentElement.remove();
    updateTotal();
}

function quantityChanges(event) {
    var input = event.target; 
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();
}


// Add Cart
function addCartClicked() {
    document.querySelector('.add-cart').onclick = addCartProduct;

};

// var productoTest = products.map(function(producto) {
//     return producto.description;
// })

// console.log(productoTest);

// document.addEventListener("click", (e)=> {
//     if(e.target.matches(".cart-quantity")){
//         let id = e.target.getAttribute("data-id")
//         addCardProduct(product[id])
//     }
// })


const $ = element => document.querySelector(element);

function addCartProduct(src, name, price) {
    
    let cartBox = document.createElement('div');
    cartBox.setAttribute('class', 'cart-box');

    let image = document.createElement('img');
    image.setAttribute('class', 'cart-img');

    let detailBox = document.createElement('div');
    detailBox.setAttribute('class', 'detail-box');


    let productName = document.createElement('div');
    productName.setAttribute('class', 'cart-product-title');

    let productPrice = document.createElement('div');
    productPrice.setAttribute('class', 'cart-price');

    let cartQuantity = document.createElement('input');
    cartQuantity.setAttribute('class', 'cart-quantity');
    cartQuantity.setAttribute('type', 'number');
    cartQuantity.setAttribute('value', '1');

    image.src = src;
    productName.innerHTML = name;
    productPrice.innerHTML = `${price}$`;

    let cartRemove = document.createElement('i');
    cartRemove.setAttribute('class', 'fa-solid fa-trash cart-remove');


    detailBox.appendChild(productName);
    detailBox.appendChild(productPrice);
    detailBox.appendChild(cartQuantity);



    cartBox.appendChild(image);
    cartBox.appendChild(detailBox);
    cartBox.appendChild(cartRemove)

    return cartBox
}

products.map(({ src, name, price }) => {
    $(".cart-content").appendChild(addCartProduct(src, name, price))
});


function updateTotal() {
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;

    for(var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value; 
        total = total + price * quantity;

        // Cents Value

        total = Math.round(total * 100) / 100;

        document.getElementsByClassName('total-price')[0].innerText = "$" + total;
    }
}