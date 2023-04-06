const inputs = document.querySelectorAll('.input')

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