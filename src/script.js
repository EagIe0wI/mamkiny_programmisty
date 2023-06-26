
const buttonForStart = () => {
const startButton = document.querySelector('.start-button');
const gameBoard = document.querySelector('.game-board');

    startButton.addEventListener('click', () => {
     startButton.style.display = 'none';
     gameBoard.style.display = 'block';
    });
};

const changeText = () => {
    const gameBoard = document.querySelector('.game-board');

    const sentences = [
        '*Вы начинаете бродить по лесу*',
        '*Неожиданно появляется огонёк*',
        'Огонёк:\nЗдравствуй, путник! Неужели потерялся?',
        'Что ты такое?',
        'Огонёк:\nКак невежливо не отвечать на приветствие! Ну ладно… Плутающие души зачастую сильно напуганы, им можно простить.',
        '',
        ''
    ]
    let sentence = 0;
    gameBoard.addEventListener('click', () => {
       
       document.querySelector('.text').textContent = sentences[sentence];
       sentence += 1;
       });
    }

const start = () => {
    buttonForStart();
    changeText();
}

start();