
let currentPeople = 0 //входные данные текущего количества подключенных пользователей 
let maxPeople = 200    // входные данные максимального количества пользователей
let priceTarget = 500 // цель цены к которой стремится тендер
let priceNow = 2000 //  текущее колличество пользователей

let progressBarStatus = 0
let unuitStatusBar = 0
let tenderProgressContainer = 0

currentNumber.textContent = currentPeople
currentPeopleInElips.textContent = currentPeople
maxNumber.textContent = maxPeople
unuitStatusBar = 250 / maxPeople
for (i = 1; i < currentPeople; i++) {
    progressBarStatus += unuitStatusBar
}
statusBar.style.width = (progressBarStatus) + "px"
//  2000           500                    -1500              / 200          200  -   20
//unitPrice = priceNow / maxPeople
priceNow = priceTarget - ((priceTarget - priceNow) / maxPeople) * (maxPeople - currentPeople)
currentPrice.textContent = priceNow
currentPriceInElips.textContent =priceNow
targetPrice.textContent = priceTarget
