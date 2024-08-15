// Phone block

const phoneInput  = document.querySelector("#phone_input")
const phoneButton = document.querySelector("#phone_button")
const phoneSpan = document.querySelector("#phone_result")

const regExp = /^\+996 [2579]\d{2} \d{2} \d{2} \d{2}$/

phoneButton.onclick = () => {
    if(regExp.test(phoneInput.value)){
        phoneSpan.innerHTML = "OK"
        phoneSpan.style.color = "green"

    }else{

    }
}




const tab_content_block = document.querySelector()








// lesson5


const somInput = document.querySelector("#som")
const usdInput = document.querySelector("#usd")

// somInput.ominput = () => {
//     const request = new XMLHttpRequest()
//     request.open("GET", "../data/convertor.json")
//     request.setRequestHeader("Content-type", "application/json")
//     request.send()

//     request.onload = () => {
//         const data = JSON.parse(request.response)
//         usdInput.value = somInput.value / data.usd
//     }
// }

const convertor = (element, targetElement) => {
    element.oninput = () => {
        const request = new XMLHttpRequest()
        request.open("GET", "../data/convertor.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()

        request.onload = () => {
            const data = JSON.parse(request.response.response)
            if (element.id === "som"){
                targetElement.value = (element.value / data.usd).toFixed(2)
            }
            if (element.id === "usd"){
                targetElement.value = (element.value / data.usd).toFixed(2)
            }
        }   
    }
}
 
convertor(somInput, usdInput)
convertor(usdInput, somInput)

// DRY - don't repeat yourself - Не повторяй самого себя
// KISS - keep it simple, stupid!- Делай проще, идиот!
// KISS - keep it super simple! - Делай супер проще!
// BEM
// SOLID
