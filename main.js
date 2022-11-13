const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerIcon = document.querySelector('.menu');
const shoppingCartMenu = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerIcon.addEventListener('click', toggleBurguerMenu);
shoppingCartMenu.addEventListener('click', toggleCartAside);


function toggleDesktopMenu() {     
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');                                               
    desktopMenu.classList.toggle('inactive');
    
}
function toggleBurguerMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCartAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }


    aside.classList.toggle('inactive');
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


// Maquetación de productos 
function renderProducts(){
    for (product of productList) {
        const productCard= document.createElement('div');
        productCard.classList.add('product-card');
     
        const productImg = document.createElement('img');
        // product = {name, price, image}
        productImg.setAttribute('src', product.image);
     
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


   