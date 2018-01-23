import readlineSync from 'readline-sync';

let user = '';

export const hello = () => {
  console.log('\nWelcome to the Brain Games!');
};

export const answer = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!\n`);
  user = userName;
};

export const task = () => {
  console.log('Answer "yes" if number even otherwise answer "no".\n');
};

export const game = () => {
  for (let i = 0; i < 3; i += 1) {
    const num = Math.round(Math.random() * ((100 - 1) + 1));
    console.log(`Question: ${num}`);
    const choice = readlineSync.question('Your answer: ');

    if ((num % 2 === 0 && choice === 'yes') || (num % 2 !== 0 && choice === 'no')) {
      console.log('Correct!\n');
    } else {
      const isNumEven = () => (num % 2 === 0 ? 'yes' : 'no');
      return console.log(`'${choice}' is wrong answer. Correct answer was '${isNumEven()}'. Let's try again, ${user}!)\n`);
    }
  }
  return console.log(`Congratulations, ${user}!\n`);
};
