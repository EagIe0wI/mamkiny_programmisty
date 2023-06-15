let localResults = {};
 
  const quiz = document.getElementById('quiz');
   const questions = document.getElementById('questions');
   const result = document.getElementById('result');
   const buttonNext = document.getElementById('button-next');
 
   const data = [
    {
      question: 'Что за место, где вы точно никогда не прочтете свое имя?',
      answers: [
        {
          value: 'В списках Forbes',
          correct: false,
        },
        {
          value: 'В заркале',
          correct: false,
        },
        {
          value: 'Ваше надгробие',
          correct: true,
        }
      ]
    },
    {
      question: 'Куда уходят зомби на ночь?',
      answers: [
        {
          value: 'На ночную охоту',
          correct: false,
        },
        {
          value: 'В клуб мертвецов',
          correct: true,
        },
        {
          value: 'Работать работу',
          correct: false,
        }
      ]
    },
    {
      question: 'Что днем ​​легкое, а ближе к ночи становится тяжелым?',
      answers: [
        {
          value: 'Груз прошлого на моих плечах, который я не в состоянии вынести.',
          correct: false,
        },
        {
          value: 'Веки. Крайне хочется уснуть… Сбежать из этого мира хотя бы на несколько часов.',
          correct: true,
        },
        {
          value: 'Работа. Вечером хочется лишь упасть в кровать.',
          correct: false,
        }
      ]
    }  
   ];
   
   const renderQuestions = (index) => {

    questions.dataset.stepNow = index;

    const renderAnswers = () => data[index].answers
        .map((answer) => `
          <li>
            <label>
              <input class="answer-input" type="radio" name=${index} value=${answer.id}>
              ${answer.value}
            </label>
          </li>
        `)
      .join('');

    questions.innerHTML = `
    <div class="quiz-questions-item">
    <div class="quiz-questions-item__question">${data[index].question}</div>
    <ul class="quiz-questions-item__answers">${renderAnswers()}</ul>
   </div>
   `
   };
 
   const renderResults = () => {};

   quiz.addEventListener('change', (event) => {
// логика ответов
    if (event.target.classList.contains('answer-input')) {
    localResults[event.target.name] = event.target.value;
    buttonNext.disabled = false;
    }
   });
 
   quiz.addEventListener('click', (event) => {
// кнопка вот мой ответ
    if (event.target.classList.contains('button-next')) {

        renderQuestions(Number(questions.dataset.stepNow + 1));

        buttonNext.disabled = true;
    }
   });
  renderQuestions(0);
