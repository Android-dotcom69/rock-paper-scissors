document.addEventListener('DOMContentLoaded', () => {
    const playerScoreEl = document.getElementById('player-score');
    const computerScoreEl = document.getElementById('computer-score');
    const resultMessageEl = document.getElementById('result-message');
    const maxPointsInput = document.getElementById('max-points-input');
    const rockButton = document.getElementById('rock');
    const paperButton = document.getElementById('paper');
    const scissorsButton = document.getElementById('scissors');
    const resetButton = document.getElementById('reset-button');

    let playerScore = 0;
    let computerScore = 0;
    let maxPoints = 5;

    const choices = ['rock', 'paper', 'scissors'];

    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function playRound(playerSelection) {
        if (playerScore >= maxPoints || computerScore >= maxPoints) {
            return;
        }

        const computerSelection = getComputerChoice();
        let result = '';

        if (playerSelection === computerSelection) {
            result = "It's a tie!";
        } else if (
            (playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'paper' && computerSelection === 'rock') ||
            (playerSelection === 'scissors' && computerSelection === 'paper')
        ) {
            playerScore++;
            result = `You win! ${playerSelection} beats ${computerSelection}.`;
        } else {
            computerScore++;
            result = `You lose! ${computerSelection} beats ${playerSelection}.`;
        }

        playerScoreEl.textContent = playerScore;
        computerScoreEl.textContent = computerScore;
        resultMessageEl.textContent = result;

        checkWinner();
    }

    function checkWinner() {
        if (playerScore >= maxPoints) {
            resultMessageEl.textContent = 'Congratulations! You won the game!';
        } else if (computerScore >= maxPoints) {
            resultMessageEl.textContent = 'Game over! The computer won.';
        }
    }

    function resetGame() {
        playerScore = 0;
        computerScore = 0;
        maxPoints = parseInt(maxPointsInput.value) || 5;
        playerScoreEl.textContent = playerScore;
        computerScoreEl.textContent = computerScore;
        resultMessageEl.textContent = '';
    }

    rockButton.addEventListener('click', () => playRound('rock'));
    paperButton.addEventListener('click', () => playRound('paper'));
    scissorsButton.addEventListener('click', () => playRound('scissors'));
    resetButton.addEventListener('click', resetGame);
    maxPointsInput.addEventListener('change', () => {
        maxPoints = parseInt(maxPointsInput.value) || 5;
    });

    resetGame(); // Initialize the game
});
