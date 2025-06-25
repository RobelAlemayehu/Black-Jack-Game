let player = {
    name: "Yohannes",
    chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")


playerEl.textContent = player.name + ": $" + player.chips


function getRadnomNumber(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber > 10){
        return 10
    } else if(randomNumber === 11){
        return 11
    }else {
        return randomNumber
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRadnomNumber()
    let secondCard = getRadnomNumber()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    cardEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if(sum <= 20){
        message = "Do you want to draw a new card?"
    }else if(sum === 21){
        message = "You've got Blackjack!"
        hasBlackJack = true 
    }else{
        message = "You've out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card = getRadnomNumber()
        sum += card
        cards.push(card)
        renderGame()
    }
}





