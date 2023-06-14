import readlineSync from 'readline-sync';

const askName = () => {
  console.log('Здраствуй.');
  const userName = readlineSync.question('Введите имя: ');
  console.log(`Здраствуй, ${userName}.`);

  return userName;
};

export default askName;
