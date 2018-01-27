import startGame from '..';
import random from '../random';

const task = 'Balance the given number.';

const progression = (num) => {
  let x1 = num; 
  let seriesNumbers = ' ';
  let seriesNumbersContinue = ' ';
  const range = random(10);
  const add = random(10);

  for (let i = 0; i < range - 1; i += 1) {
    x1 += add;
    seriesNumbers += `${x1} `;
  }
  let x2 = x1 + add;
  const numberHide = x1 + add;
  for (let j = range; j < 10; j += 1) {
    x2 += add;
    seriesNumbersContinue += `${x2} `;
  }
  const str = `${seriesNumbers} .. ${seriesNumbersContinue}`;
  return { str, numberHide };
};


export default () => {
  const data = () => {
    const num = random(100);
    const { str, numberHide } = progression(num);
    const question = str;
    const answer = numberHide;
    return { question, answer };
  };
  return startGame(data, task);
};
