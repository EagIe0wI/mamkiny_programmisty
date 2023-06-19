let correctAnswer = 0;
 
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

