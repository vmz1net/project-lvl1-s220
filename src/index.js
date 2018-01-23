import readlineSync from 'readline-sync';

export const hello = () => {
  console.log('Welcome to the Brain Games!');
};
export const answer = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
};
