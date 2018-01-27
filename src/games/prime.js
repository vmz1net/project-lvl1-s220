import startGame from '..';
import random from '../random';

const task = 'Is this number prime?';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

export default () => {
  const data = () => {
    const question = random(1000);
    const answer = isPrime(question) ? 'yes' : 'no';
    return { question, answer };
  };
  return startGame(data, task);
};
