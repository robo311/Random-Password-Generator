const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"


const passwordResult = document.querySelector("#password_result")
const rangeValue = document.querySelector("#range-value")
const rangeLength = document.querySelector("#pass_length")
const passwordLine = document.getElementById("power-line")
const passwordText = document.getElementById("power-text")

rangeLength.addEventListener("change", function(event){
    
    let passwordLength = event.target.valueAsNumber

    let letterArray = []
    for(let i = 0; i < passwordLength; i++){
        let oneLetter1 = chars[Math.floor(Math.random() * chars.length)]
        letterArray.push(oneLetter1)
    }
    passwordResult.value = letterArray.join("")
 

    if(passwordLength < 6){
        passwordLine.style.backgroundColor = "red"
        passwordLine.style.width = "150px"
        passwordText.textContent = "Low"
        passwordText.style.color = "red"
        passwordText.style.fontWeight = "500"
    } else if(passwordLength > 6 && passwordLength < 12){
        passwordLine.style.backgroundColor = "rgb(252, 207, 3)"
        passwordLine.style.width = "250px"
        passwordText.textContent = "Medium"
        passwordText.style.color = "rgb(252, 207, 3)"
        passwordText.style.fontWeight = "500"
    } else if(passwordLength > 12 && passwordLength < 18){
        passwordLine.style.backgroundColor = "rgb(56, 180, 54)"
        passwordLine.style.width = "350px"
        passwordText.textContent = "Strong"
        passwordText.style.color = "rgb(56, 180, 54)"
        passwordText.style.fontWeight = "500"
    } else if(passwordLength > 18){
        passwordLine.style.backgroundColor = "darkgreen"
        passwordLine.style.width = "493px"
        passwordText.textContent = "Very strong"
        passwordText.style.color = "darkgreen"
        passwordText.style.fontWeight = "500"
    }
})


//rangeLength = rangeValue 
rangeLength.addEventListener("click", function(event){
    rangeValue.value = event.target.value
})

//rangeValue = rangeLength
rangeValue.addEventListener("change", function(event){
    rangeLength.value = event.target.value
})


const copyButton = document.querySelector("#copy-button")

function copyText(){
    passwordResult.select()
    document.execCommand('copy')
}
