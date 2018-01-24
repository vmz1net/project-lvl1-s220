import readlineSync from 'readline-sync';
import { hello, task, random } from '..';

export default () => {
  hello();
  task('even');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!\n`);
  for (let i = 0; i < 3; i += 1) {
    const num = random(100);
    console.log(`Question: ${num}`);
    const solution = readlineSync.question('Your answer: ');

    if ((num % 2 === 0 && solution === 'yes') || (num % 2 !== 0 && solution === 'no')) {
      console.log('Correct!\n');
    } else {
      const isNumEven = () => (num % 2 === 0 ? 'yes' : 'no');
      console.log(`'${solution}' is wrong answer ;(. Correct answer was '${isNumEven()}.`);
      return console.log(`Let's try again, ${userName}!\n`);
    }
  }
  return console.log(`Congratulations, ${userName}!\n`);
};
