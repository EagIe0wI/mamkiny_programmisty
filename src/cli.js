import readlineSync from 'readline-sync';

const askName = () => {
  console.log('Hello.');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}.`);

  return userName;
};

export default askName;
