document.addEventListener('DOMContentLoaded', ready);

function ready() {
    var removeButton = document.getElementsByClassName('btn-danger');

    for (var i = 0; i < removeButton.length; i++) {
        var button = removeButton[i];
        button.addEventListener('click', function(event) {
            var buttonHit = event.target;
            buttonHit.parentElement.parentElement.remove();
            howMuchIsMyTotal(); 
            console.log('Item removed');
        });
    }
    const quantityInputs = document.getElementsByClassName('cart-quantity-input');
    for (let input of quantityInputs) {
        input.addEventListener('change', quantityChanged);
    }
    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++){
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
}

// If you want to run this code on load, you can do this:
if (document.readyState !== 'loading') {
    ready();
}


function addToCartClicked(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var pictuer = shopItem.getElementsByClassName('shop-item-image')[0].src
    console.log(title, price , pictuer)
    addingToCart(title, price , pictuer)
}
function addingToCart(title, price , pictuer){
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var itemsInCart = document.getElementsByClassName('cart-items')[0]
    var cartRowItems = `
     <div class="cart-item cart-column">
        <img class="cart-item-image" src="${pictuer}" width="100" height="100">
        <span class="cart-item-title">${title}</span>
    </div>
    <span class="cart-price cart-column">${price}</span>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
        cartRow.innerHTML = cartRowItems
    itemsInCart.append(cartRow)
}

function howMuchIsMyTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;

    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        var price = parseFloat(priceElement.innerText.replace('$', ''));
        var quantity = parseInt(quantityElement.value);
        
        
        total += price * quantity;
    }

    total = Math.round(total * 100) / 100; 
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total.toFixed(2);
}

function quantityChanged(event) {
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1; 
    }
    else{
        input.value = Math.floor(Number(input.value))
    }
    howMuchIsMyTotal(); 
}

