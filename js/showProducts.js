import { products } from "./products";

const $ = element => document.querySelector(element);

function createNodeOnDom(src, description, name, price) {
    const product = document.createElement('div');
    const image = document.createElement('img');
    const descriptionProduct = document.createElement('div');
    const productParagraph = document.createElement('p');
    const productName = document.createElement('h3');
    const priceSpan = document.createElement('span');
    const pricesDiv = document.createElement('div');
    const priceParagraph = document.createElement('p');
    const newPrice = document.createElement('p');
    const addCart = document.createElement('i');

    image.setAttribute('class', 'product-img');
    product.setAttribute('class', 'product-card');
    productName.setAttribute('class', 'product-title')
    descriptionProduct.setAttribute('class', 'description-product');
    priceParagraph.setAttribute('class', 'old-price');
    newPrice.setAttribute('class', 'new-price');
    addCart.setAttribute('class', 'fa-solid fa-cart-plus add-cart');

    image.src = src;
    productParagraph.innerHTML = description;
    productName.innerHTML = name;
    priceParagraph.innerHTML = `${price}$`; 
    newPrice.innerHTML = `${price - 3}$`;

    pricesDiv.appendChild(priceParagraph);
    pricesDiv.appendChild(newPrice);
    
    priceSpan.appendChild(pricesDiv);
    priceSpan.appendChild(productParagraph);

    descriptionProduct.appendChild(productName);
    descriptionProduct.appendChild(priceSpan);
    descriptionProduct.appendChild(addCart);
    
    product.appendChild(image);
    product.appendChild(descriptionProduct);

    return product
}

products.map(({ src, description, name, price }) => {
    $('.shop-content').appendChild(createNodeOnDom(src, description, name, price))
})