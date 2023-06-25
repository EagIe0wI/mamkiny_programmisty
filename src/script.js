
const buttonForStart = () => {
const startButton = document.querySelector('.start-button');
const gameBoard = document.querySelector('.game-board');

    startButton.addEventListener('click', () => {
     startButton.style.display = 'none';
     gameBoard.style.display = 'block';
    });
};

const start = () => {
    buttonForStart();
}

start();