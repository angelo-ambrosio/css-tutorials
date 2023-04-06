const inputs = document.querySelectorAll('.input')

function changeIcon(){
    if(iconGrey.parentNode.classList.includes('focus')){
        iconGrey.classList.add('hidden')
        iconPurple.classList.remove('hidden')
    } else {
        iconGrey.classList.remove('hidden')
        iconPurple.classList.add('hidden')
    }
}

function focusOn(){
    let parent = this.parentNode;
    parent.classList.add('focus')
}

function focusOff(){
    let parent = this.parentNode;
    if(this.value == ""){
        parent.classList.remove('focus')
    }
}

inputs.forEach(input => {
    input.addEventListener('focus', focusOn)
    input.addEventListener('blur', focusOff)
})
