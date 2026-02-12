 // count to ten

 // we need to specify....

 //where should we Start counting?
 //where is the FINISH line?
 //what is the STEP SIZE we should use?

//  for (let count = 10; count < 21; count += 1)
//  {
//     console.log(count);

//  }

//  for (let counter = 0; counter <= 100; counter += 10)
//  {
//     console.log(counter);
//  }

// let messages = [
//     "Hey, how's it going?",        
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately.",
//     "Same here!"
// ]

// DRY - Don't repeat yourself
// console.log(messages[0])
// console.log(messages[1])
// console.log(messages[2])
// console.log(messages[3])

// for (let i = 0; i <= 3; i += 1)
// {
//     console.log(messages[i]);
// }


// let cards = [7,3,5]
// for (let i = 0; i < cards.length; i++)
// {
//     console.log(cards[i])
// }


let player1Time = 102;
let player2Time = 100;

function getFastestRaceTime()
{
    if (player1Time < player2Time)
    {
        return player1Time
    }
    else if (player2Time < player1Time)
    {
        return player2Time
    }
    else
    {
        return player1Time
    }
}

// let fastestRace = getFastestRaceTime();

function getTotalRaceTime()
{
    return player1Time + player2Time
}

let totalTime = getTotalRaceTime();
console.log(totalTime);