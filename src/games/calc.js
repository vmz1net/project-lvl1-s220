import readlineSync from 'readline-sync';
import { hello, task, random } from '..';

export default () => {
  hello();
  task('calc');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!\n`);

  for (let i = 0; i < 3; i += 1) {
    const num1 = random(100);
    const num2 = random(100);
    const operations = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
    };
    const operation = ['+', '-', '*'][random(2)];
    console.log(`Question: ${num1} ${operation} ${num2}`);
    const num = Number(operations[operation](num1, num2));

    const answer = readlineSync.question('Your answer: ');
    const response = Number(answer);
    if (response === num) {
      console.log('Correct!\n');
    } else {
      console.log(`'${response}' is wrong answer ;(. Correct answer was '${num}.`);
      return console.log(`Let's try again, ${userName}!\n`);
    }
  }
  return console.log(`Congratulations, ${userName}!\n`);
};
