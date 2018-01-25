import startGame from '..';
import random from '../random';

const task = 'Answer "yes" if number even otherwise answer "no".';

export default () => {
  const data = () => {
    const question = random(100);
    const isEven = n => (n % 2 === 0 ? 'yes' : 'no');
    const answer = isEven(question);
    return { question, answer };
  };
  return startGame(data, task);
};
