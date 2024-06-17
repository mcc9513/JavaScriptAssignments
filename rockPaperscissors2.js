const hands = ['rock' , 'paper', 'scissors'];

function getHand() {
    const randomIndex = parseInt(Math.random()*10)%3
    return hands[randomIndex];
}

let player1 = {
    name: "Alex",
    getHand: getHand
};
let player2 = {
    name: "Drew",
    getHand: getHand
};
let player3 = {
    name: "Jane",
    getHand: getHand
};
let player4 = {
    name: "Jill",
    getHand: getHand
};

function playRound(player1, player2) {
    let hand1 = player1.getHand();
    let hand2 = player2.getHand();

    let winner = null;
    if (hand1 === hand2) {
        console.log(`Both players played ${hand1}.It's a tie.`); 
        return winner;
    } else if (
        (hand1 === 'rock' && hand2 === 'scissors') ||
        (hand1 === 'paper' && hand2 === 'rock') ||
        (hand1 === 'scissors' && hand2 === 'paper')
    ) {
        console.log(`${player1.name} wins with ${hand1} against ${hand2}!`);
        winner = player1;
    } else {
        console.log(`${player2.name} wins with ${hand2} against ${hand1}!`);
        winner = player2;
    }
    return winner;
}

function playGame (player1, player2, playUntil) {
    let player1Wins = 0;
    let player2Wins = 0;
    while (player1Wins < 3 && player2Wins < 3) {
        const winner = playRound(player1, player2);
        if (winner === player1) {
            player1Wins++;
        } else {
            player2Wins++;
        }
    }
    console.log(`${player1.name} won ${player1Wins} games.`);
    console.log(`${player2.name} won ${player2Wins} games.`);
    return player1Wins > player2Wins? player1 : player2;
}
function playTournament(player1, player2, player3, player4, playUntil) {
    let game1Winner = playGame(player1, player2, playUntil) 
    let game2Winner = playGame(player3, player4, playUntil)

    let tournamentWinner = playGame(game1Winner, game2Winner, playUntil) 
    return tournamentWinner;
}

let finalsWinner = playTournament(player1, player2, player3, player4, 3)

console.log(finalsWinner.name + " is the world champion");