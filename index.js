const input = document.querySelector("input")
const result = document.querySelector("p")

const bin2dec = () => {
    const binValue = input.value
    let decValue = null
    if(binValue.match(/^[01]+$/)){
        decValue = parseInt(binValue, 2)
    }
    else{
        decValue = "Please enter a valid binary value"
    }

    if(binValue === "") decValue = null
    result.textContent = decValue
}

input.addEventListener("input", bin2dec)