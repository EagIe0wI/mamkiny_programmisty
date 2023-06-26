
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
    const firstFork = document.querySelector('.form-YesOrNo');

    const sentences = [
        '*Вы начинаете бродить по лесу*',
        '*Неожиданно появляется огонёк*',
        'Огонёк:\nЗдравствуй, путник! Неужели потерялся?',
        'Вы:\nЧто ты такое?',
        'Огонёк:\nКак невежливо не отвечать на приветствие! Ну ладно… Плутающие души зачастую сильно напуганы, им можно простить.',
        'Вы:\nПлутающие души?...',
        'Огонёк:\nАх! Так о чём же я? Не нужно знать кто я и откуда. Просто доверься мне, я помогу тебе выбраться',
        'Огонёк:\nТолько если ты захочешь.',
        'Вы:\n*мысли* Мне кажется или это дьявольское отродье только что ухмыльнулось?',
        'Огонёк:\nТак что? Тебе нужна помощь?'
    ]
    let sentence = 0;
    gameBoard.addEventListener('click', () => {
       
       document.querySelector('.text').textContent = sentences[sentence];
       sentence += 1;
       if (sentence === sentences.length - 1) {
        document.querySelector('.text').textContent = sentences[sentences.length - 1];
        firstFork.style.display = 'block';
    }
       });

    }



    const quizCheck = () => {
        var correctAnswer = 3;
 
        document.getElementById("check").onclick = function() {
        var answer = document.getElementById("form").querySelectorAll('[name="answer-1"]:checked');
        if (!answer.length) {
         answer = 0;
        } else {
         answer = +answer[0].getAttribute('data-number');
        }
 
        if (correctAnswer === answer) {
         document.write('Правильно! Перейдём к следующей загадке!');
        } else {
         document.write('Увы и ах! Мимо! Но попытка не пытка. Попробуем ещё раз! Не промахнись, путник!');
     }
    };
    }

const start = () => {
    buttonForStart();
    changeText();
    quizCheck();
}

start();