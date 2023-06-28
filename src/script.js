

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
    const stage = 'start';
    
    let sentence = 0;
    gameBoard.addEventListener('click', () => {
       
       document.querySelector('.text').textContent = strings[stage][sentence];
       sentence += 1;
       if (sentence === 5) {
        document.querySelector('.text').textContent = strings[strings.length - 1];
        firstFork.style.display = 'block';
    }
       });
    }



    const quizCheck = () => {
        let correctAnswer = 3;
 
        document.getElementById("check").onclick = function() {
        let answer = document.getElementById("form").querySelectorAll('[name="answer-1"]:checked');
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