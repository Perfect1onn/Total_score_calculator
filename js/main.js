const btnCalculate = document.querySelector("#btnCalculate")
const btnCloseModal = document.querySelector("#closeButton")

const inputHours = document.querySelector("#hourCount")
const inputValue = document.querySelector("#valueCount")
const inputNb = document.querySelector("#nbCount")
const inputWorks = document.querySelector("#selfWorkCount")

const modal = document.querySelector(".modal")
const resultModal = document.querySelector("#result")

const moreButton = document.querySelector("#more")
const modalInfo = document.querySelector(".modal__information")

const averageInfo = document.querySelector("#averageValue")
const worksInfo = document.querySelector("#worksValue")
const NbInfo = document.querySelector("#nbValue")



function calculateValues() {
    let str = inputValue.value
    if(str.length === 2 || str.length === 1) {
        return +inputValue.value
    }
    let convertStr = str.includes(",") ? str.split(","): str.includes(" ") ? str.split(" ") : str.split("")
    let sum = convertStr.reduce((total, num) => {
        return total + Number(num)
    }, 0)
    let result = sum / convertStr.length
    console.log(+result.toFixed(1), sum, convertStr)
    return +result.toFixed(1)
}



function calculateNb() {
    let hours = +inputHours.value / 2
    let a = (+inputNb.value * 10) / hours
    let result = 10 - a.toFixed(1)
    console.log(result)
    return result
}



function calculateTotal() {
    let values = calculateValues()
    let nb = calculateNb()
    let selfWorks = +inputWorks.value
    let result =  (values * 3 ) + nb + selfWorks
    console.log(result)
    return +result.toFixed(1)
}

function openModal() {
    console.log(+inputNb.value)
    worksInfo.innerText = inputNb.value
    resultModal.innerText = calculateTotal()
    modal.classList.remove("unshow")
}

function closeModal() {
    modal.classList.add("unshow")
    modalInfo.classList.add("unshow")
}


function moreInfo() {
    averageInfo.innerText = calculateValues()
    NbInfo.innerText = calculateNb()
    worksInfo.innerText = inputWorks.value
    modalInfo.classList.remove("unshow")
}

btnCalculate.addEventListener("click", openModal)
moreButton.addEventListener("click", moreInfo)
btnCloseModal.addEventListener("click", closeModal)