
export const hello = () => {
  console.log('\nWelcome to the Brain Games!');
};

export const task = (str) => {
  switch (str) {
    case 'even':
      console.log('Answer "yes" if number even otherwise answer "no".\n');
      break;
    case 'calc':
      console.log('What is the result of the expression?\n');
      break;
    default:
      break;
  }
};
export const random = (n) => {
  let res = 0;
  for (let i = 0; i < 3; i += 1) {
    res = Math.round(Math.random() * (n));
  }
  return res;
};

