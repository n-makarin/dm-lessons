let cart = null;
let cartNumber = 0;

function init() {
  const productCurdButton = document.querySelector('.product-card__add-to-cart');
  cart = document.querySelector('.cart');

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

  productCurdButton.addEventListener('click', addProductToCart);
}

export default init;
