const totalprice1 = document.querySelector('.price1')
const totalprice2 = document.querySelector('.price2')
const totalprice3 = document.querySelector('.price3')
const totalprice4 = document.querySelector('.price4')
const totalPriceE1 = document.querySelector('.totalprice')

let sumprice1 = () => {
   let textElement = document.querySelector('.price1')
    let textElementContent = textElement.textContent
    return textElement.textContent
}
let price1 = sumprice1()

let sumprice2 = () => {
    let textElement = document.querySelector('.price2')
    let textElementContent = textElement.textContent
   return textElement.textContent
}
let price2 = sumprice2()

let sumprice3 = () => {
    let textElement = document.querySelector('.price3')
    let textElementContent = textElement.textContent
    return textElement.textContent
}
let price3 = sumprice3()

let sumprice4 = () => {
    let textElement = document.querySelector('.price4')
    let textElementContent = textElement.textContent
    return textElement.textContent
}
let price4 = sumprice4()


let sumprice = () => {
  let textElement = document.querySelector('.totalprice')
  let textElementContent = textElement.textContent
  console.log (textElement.textContent)
  return Number(textElement.textContent) + Number(price1) + Number(price2) + Number(price3) + Number(price4);
}

let priceTotal = sumprice()
totalPriceE1.innerText = priceTotal

let sumdiskount1 = () => {
  let textElement = document.querySelector('.sumdiskount')
  let textElementContent = textElement.textContent
  return textElement.textContent
}
let  sumdiskount = sumdiskount1()

function diskount() {
  let price1_diskount = Number(price1) * ( 1 - Number(sumdiskount)/100)
  let price2_diskount = Number(price2) * ( 1 - Number(sumdiskount)/100)
  let price3_diskount = Number(price3) * ( 1 - Number(sumdiskount)/100)
  let price4_diskount = Number(price4) * ( 1 - Number(sumdiskount)/100)
  let priceTotal_diskount = Number(price1_diskount) + Number(price2_diskount) + Number(price3_diskount) + Number(price4_diskount)
   
 totalPriceE1.innerText = priceTotal_diskount
  totalprice1.innerText = price1_diskount
  totalprice2.innerText = price2_diskount
  totalprice3.innerText = price3_diskount
  totalprice4.innerText = price4_diskount 
}



