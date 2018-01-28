import startGame from '..';
import random from '../random';

const task = 'Balance the given number.';


const progression = (startDigit, diff, steps, hiddenNumber) => {
  const arrayOfNumbers = [];
  let count = 0;
  while (count < steps) {
    arrayOfNumbers.push(startDigit + (diff * count));
    count += 1;
  }
  const hiddenAnswer = arrayOfNumbers[hiddenNumber];
  arrayOfNumbers[hiddenNumber] = '..';
  const question = arrayOfNumbers.join(' ');
  return { question, hiddenAnswer };
};


export default () => {
  const data = () => {
    const startDigit = random(100);
    const diff = random(10);
    const hiddenNumber = random(10);
    const steps = 10;
    const { question, hiddenAnswer } = progression(startDigit, diff, steps, hiddenNumber);
    const answer = hiddenAnswer;
    return { question, answer };
  };
  return startGame(data, task);
};
