import readlineSync from 'readline-sync';

export default (data, task) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(`${task}\n`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!\n`);

  for (let i = 0; i < 3; i += 1) {
    const { question, answer } = data();
    const numStr = String(question);
    const answerStr = String(answer);
    console.log(`Question: ${numStr}`);
    const quest = readlineSync.question('Your answer: ');
    const answerUser = String(quest);
    if (answerUser === answerStr) {
      console.log('Correct!\n');
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answerStr}.`);
      console.log(`Let's try again, ${userName}!\n`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!\n`);
};
