let firstCard = 10;
let secondCard = 11;
let cards = [firstCard, secondCard]  // array - ordered list of items
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
//let sumEl = document.querySelector("#sum-el");
let cardEl = document.getElementById("card-el");

function startGame()
{
    renderGame();
}

function renderGame()
{
    // render ot firstcard and secondcard
    cardEl.textContent = "Card: " + cards[0] + " " + cards[1];
    // render out All the cards we have
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20)
    {
        message = "Do you want to draw a new card?";
    }
    else if(sum === 21)
    {
        message = "Wohoo! You've got Blackjack!";
    }
    else  
    {
        message = "You're out of the game!";
        isAlive = false;
    }

    //Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message;
}

// Create a function newCard() that logs out "Drawing a new card from the deck!"
function newCard()
{
    console.log("Drawing a new card from the deck!");
    let card = 7;
    sum += card;

    //push the card to the cards array
    cards.push(card);
    console.log(cards);
    renderGame();
}