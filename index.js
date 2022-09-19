//Declaration of variable's
let cards = []
let sum = 0
let hasBlackJack = false
let isInPlay = false
let message = " "
let player = {
    playerName: 'Paul',
    chips: 300
}


playerDetails.innerHTML = player.playerName + ': £' + player.chips
//Start game function
function dealHand() {
    isInPlay = true
    let firstCard = randomCard()
    let secondCard = randomCard()
    cards = [firstCard, secondCard]

   if (cards[0] === 11 && cards[1] === 11) {
    cards = [11, 1]
    sum = 12
    } else {
    sum = firstCard + secondCard
    }
    renderGame()
}
//Game state function
function renderGame() {
    cardMessage.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardMessage.innerHTML += cards[i] + ", " || "! "
    }

    totalMessage.innerHTML = `Total: ${sum}`

    if (sum <= 20) {
    message = 'Do you want another card?' 
    } else if (sum === 21) {
    message = 'Amazing you got BlackJack.'
    hasBlackJack = true
    isInPlay = false
    } else if (cards.length > 1 && sum === 21) {
    message = '21! Well done.'
    isInPlay = false 
    } else {
    message = 'Bust. Better luck next time.' 
    isInPlay = false
    }
    startMessage.innerHTML = message
    
    
}

//Hit on hand function
function drawCard() {
    if (isInPlay === true && hasBlackJack === false) {
        let card = randomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }       
}

function resetGame() {

}



//Random card generator
function randomCard() {
    let randomNumber =  Math.floor(Math.random() * 13) + 1
    if  (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}


