let cards = []  // array - ordered list of items
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
//let sumEl = document.querySelector("#sum-el");
let cardEl = document.getElementById("card-el");
let players = {
    name: "Krushant",
    chips: 145,
}

let playerEl = document.getElementById("player=el");
console.log(playerEl);

playerEl.textContent = player.name + ": $" + player.chips;

// let player = {
//     name: "Krushant",
//     chips: 145
// }

// let playerEl = document.getElementById("player-el")
// playerEl.textContent = player.name + " $" + player.chips;

function getRendomCard()
{   
    // rendom number between 1 to 13
    // return Math.floor ( Math.random() * 13 ) + 1;
    let randomNumber = Math.floor ( Math.random() * 13 ) + 1; 
    
    // if else for the if rendom number select a 11,12,13 so value set a 10 and select a 1 so value set is 11.
    if (randomNumber > 10) 
     {
        return 10;
     }
     else if (randomNumber === 1)
     {
        return 11;
     }
     else
     {
        return randomNumber;
     }
}

function startGame()
{
    // declar this variable because player click the Start Game button after the variable call 
    isAlive = true;
    let firstCard = getRendomCard();
    let secondCard = getRendomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame()
{
    // render ot firstcard and secondcard
    cardEl.textContent = "Card: " 
    // Create a for loop that renders out all the cards instead of just two
    for (let i=0; i <cards.length; i++)
    {
        cardEl.textContent += cards[i] + " ";
    }
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
    if( isAlive === true && hasBlackJack === false)
    {
        console.log("Drawing a new card from the deck!");
        let card = getRendomCard();
        sum += card;
        //push the card to the cards array
        cards.push(card);
        console.log(cards);
        renderGame();
    }
}