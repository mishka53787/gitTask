console.log("Git is Awesome!");
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter some text: ', (input) => {
  console.log('You entered: ' + input);
  rl.close();
});
