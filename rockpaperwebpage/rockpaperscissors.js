const hands = ['rock', 'paper', 'scissors'];

function getComputerHand() {
    const randomIndex = Math.floor(Math.random() * hands.length);
    return hands[randomIndex];
}

function playGame() {
    const playerHand = prompt('Enter your choice (rock, paper, or scissors):');
    const computerHand = getComputerHand();

    let result = '';

    if (playerHand === computerHand) {
        result = 'It\'s a tie!';
    } else if (
        (playerHand === 'rock' && computerHand === 'scissors') ||
        (playerHand === 'paper' && computerHand === 'rock') ||
        (playerHand === 'scissors' && computerHand === 'paper')
    ) {
        result = 'You win!';
    } else {
        result = 'You lose!';
    }

    const resultsDiv = document.getElementById('results');
    resultsDiv.textContent = `Player chose: ${playerHand}.  Computer chose: ${computerHand}.  ${result}`;
}
