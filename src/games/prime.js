import startGame from '..';
import random from '../random';

const task = 'Is this number prime?';

const prime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
};

export default () => {
  const data = () => {
    const question = random(1000);
    const answer = prime(question);
    return { question, answer };
  };
  return startGame(data, task);
};
