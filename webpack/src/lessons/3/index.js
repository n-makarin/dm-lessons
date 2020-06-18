let cart = null;
let cartNumber = 0;
let orderList = null;
let orderListOverlay = null;

function init() {
  const productCurdButton = document.querySelector('.product-card__add-to-cart');
  cart = document.querySelector('.cart');
  orderList = document.querySelector('.order-list');
  orderListOverlay = document.querySelector('.order-list__overlay');

  function incrementCardNumber() {
    cartNumber += 1;
  }

  function setCartNumber() {
    cart.innerText = cartNumber;
  }

  function addProductToCart() {
    cartNumber = Number(cart.innerText);
    incrementCardNumber();
    setCartNumber();
  }

  function showOrderListModal() {
    orderList.classList.add('order-list_visible');
  }

  function hideOrderListModal() {
    orderList.classList.remove('order-list_visible');
  }

  productCurdButton.addEventListener('click', addProductToCart);
  cart.addEventListener('click', showOrderListModal);
  orderListOverlay.addEventListener('click', hideOrderListModal);
}

export default init;
