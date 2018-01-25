import startGame from '..';
import random from '../random';

const task = 'Find the greatest common divisor of given numbers.';

const nod = (a, b) => {
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

export default () => {
  const data = () => {
    const num1 = random(100);
    const num2 = random(100);
    const question = `${num1} ${num2}`;
    const answer = nod(num1, num2);
    return { question, answer };
  };
  return startGame(data, task);
};
