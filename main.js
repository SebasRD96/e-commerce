const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerIcon = document.querySelector('.menu');
const shoppingCartMenu = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerIcon.addEventListener('click', toggleBurguerMenu);
shoppingCartMenu.addEventListener('click', toggleCartshoppingCartContainer);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu() {     
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isshoppingCartContainerClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');                                               
    desktopMenu.classList.toggle('inactive');
    
}
function toggleBurguerMenu() {
    const isshoppingCartContainerClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isshoppingCartContainerClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive');
}

function toggleCartshoppingCartContainer() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
    name: 'Laptop',
    price: 650,
    image: 'https://images.pexels.com/photos/246340/pexels-photo-246340.jpeg?cs=srgb&dl=pexels-photomix-company-246340.jpg&fm=jpg',
});
productList.push({
    name: 'Monitor',
    price: 220,
    image: 'https://pngimg.com/uploads/monitor/laptop_PNG5874.png',
});

/*
<div class="product-card">
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="">
                  <div class="product-info">
                    <div>
                      <p>$120,00</p>
                      <p>Bike</p>
                    </div> 
                  
                    <figure>
                      <img src="files\icons\bt_add_to_cart.svg" alt="">
                    </figure>

                  </div>
*/


// Maquetación de productos por medio de una función
function renderProducts(){
    for (product of productList) {
        const productCard= document.createElement('div');
        productCard.classList.add('product-card');
     
        const productImg = document.createElement('img');
        // product = {name, price, image}
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside)
     
        const productInfo= document.createElement('div');
        productInfo.classList.add('product-info');
     
        const productInfoDiv= document.createElement('div');
     
        const productPrice= document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
     
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
     
        productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './files/icons/bt_add_to_cart.svg');
     
     
        productInfoFigure.appendChild(productImgCart);
     
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
     
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
     
        cardsContainer.appendChild(productCard);
     }
}

renderProducts (productList);


   