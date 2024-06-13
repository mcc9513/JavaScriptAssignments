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

function playRound(player1, player2) {
    const hand1 = player1.getHand();
    const hand2 = player2.getHand();

    let winner = null;
    if (hand1 === hand2) {
        console.log(`Both players played ${hand1}.It's a tie.`);    
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

playRound(player1, player2);


