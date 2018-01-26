import startGame from '..';
import random from '../random';

const task = 'Balance the given number.';

const balance = (n) => {
  const nStr = `${n}`;
  let sumNumbers = 0;
  let resultString = '';
  const numSum = nStr.length;
  for (let i = 0; i < nStr.length; i += 1) {
    sumNumbers += Number(nStr[i]);
  }
  const remainder = sumNumbers % numSum;
  const int = Math.floor(sumNumbers / numSum);

  for (let j = 0; j < numSum - remainder; j += 1) {
    resultString += `${int}`;
  }
  for (let z = 0; z < remainder; z += 1) {
    resultString += String(int + 1);
  }
  return `${resultString}`;
};


export default () => {
  const data = () => {
    const num = random(1000);
    const question = `${num}`;
    const answer = balance(num);
    return { question, answer };
  };
  return startGame(data, task);
};
