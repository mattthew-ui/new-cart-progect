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
}

// If you want to run this code on load, you can do this:
if (document.readyState !== 'loading') {
    ready();
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

