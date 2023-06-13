import readlineSync from 'readline-sync';

const askName = () => {
  console.log('Здраствуй.');
  const userName = readlineSync.question('Введите имя: ');
  console.log(`Здраствуй, ${userName}.`);

  return userName;
};

const countingEnding = () => {
  // на вход выбор игрока
  // здесь, в зависимости от того, "хороший" ли выбор, +1 в счетчик
  // далее концовка выбирается на основе суммы счетчика
}

export default { askName , countingEnding };
