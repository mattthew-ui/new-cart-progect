if (document.readyState !== 'loading') {
    // ready();
    document.addEventListener('DOMContentLoaded', ready());
}


function ready() {
    var removeButton = document.getElementsByClassName('btn-danger');

    for (var i = 0; i < removeButton.length; i++) {
        var button = removeButton[i];
        button.addEventListener('click', delteButton
        );
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


    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', comfimedPurchase)
}
function comfimedPurchase(){
    alert('you have sucfuly boght idems')
    var itemsInCart = document.getElementsByClassName('cart-items')[0]
    while(itemsInCart.hasChildNodes()){
        itemsInCart.removeChild(itemsInCart.firstChild)
    }
    howMuchIsMyTotal()
    console.log("im working")
}

// If you want to run this code on load, you can do this:
// if (document.readyState !== 'loading') {
//     ready();
// }
// issue point here.
function delteButton(event){
    var buttonHit = event.target;
    buttonHit.parentElement.parentElement.remove();
    howMuchIsMyTotal(); 
}


function addToCartClicked(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var pictuer = shopItem.getElementsByClassName('shop-item-image')[0].src
    console.log(title, price , pictuer)
    addingToCart(title, price , pictuer)
    howMuchIsMyTotal()
}
function addingToCart(title, price , pictuer){
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var itemsInCart = document.getElementsByClassName('cart-items')[0]
    var cartNameOfItems = itemsInCart.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartNameOfItems.length; i++){
        if (cartNameOfItems[i].innerText == title){
            alert('item is already in your cart')
            return
        }
    }
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
    //
   cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', delteButton)
    // cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', ready())
   cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
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

