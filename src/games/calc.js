import startGame from '..';
import random from '../random';

const task = 'What is the result of the expression?';

export default () => {
  const data = () => {
    const num1 = random(100);
    const num2 = random(100);
    const operations = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
    };
    const operators = ['+', '-', '*'][random(2)];
    const question = `${num1} ${operators} ${num2}`;
    const answer = String(operations[operators](num1, num2));
    return { question, answer };
  };
  return startGame(data, task);
};
