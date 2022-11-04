import { products } from "./cart";

const $ = element => document.querySelector(element);

function createNodeOnDom(src, name, price) {
    const cart = document.createElement('div');
    const productDescription = document.createElement('div');
    const image = document.createElement('img');
    const cartName = document.createElement('h2');
    const cartPrice = document.createElement('p');
    const quantity = document.createElement('input')

    cart.setAttribute('class', 'cart-box');
    cartName.setAttribute('class', 'cart-product-title');
    cartPrice.setAttribute('class', 'cart-price');
    quantity.setAttribute('type', 'number');

    image.src = src;
    cartName = name;
    cartPrice = price;

    productDescription.appendChild(cartName);
    productDescription.appendChild(cartPrice);
    productDescription.appendChild(quantity);

    return cart 
    
}

cart.map(({src, cartName, price}) => {
    $('.product').appendChild(createNodeOnDom(src, cartName, price))
})