var removeButton = document.getElementsByClassName('btn-danger')

for(var i = 0; i < removeButton.length; i++){
    var button = removeButton[i]
    button.addEventListener('click',function(event){
        var buttonHit = event.target
        buttonHit.parentElement.parentElement.remove()
        console.log(hit)

    })
}