var removeButton = document.getElementsByClassName('btn-danger')

for(var i = 0; i < removeButton.length; i++){
    var button = removeButton[i]
    button.addEventListener('click',function(event){
        var buttonHit = event.target
        buttonHit.parentElement.parentElement.remove()
        howMuchIsMytoal()
        console.log(hit)

    })
}
function howMuchIsMytoal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRow = cartItemContainer.getElementsByClassName('cart-row')
    for(var i = 0; i < cartRow.length; i++){
        var cartRow = cartRows[i]
    }
}