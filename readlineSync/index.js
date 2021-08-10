// readlineSync exploration
var readlineSync = require('readline-sync');

// input a answer to a question
var userName = readlineSync.question("Input your username: ");
console.log(userName);
console.log("Hiii " + userName + "!!!");

// Handle the secret text (e.g. password).
var favFood = readlineSync.question('What is your favorite food? ', {
  hideEchoBack: true // The typed text on screen is hidden by `*` (default).
});
console.log('Oh, ' + userName + ' loves ' + favFood + '!');

// Get the user's response by a single key without the Enter key (y/n question)
if (readlineSync.keyInYN('Do you want this module?')) {
  // 'Y' key was pressed.
  console.log('Installing now...');
  // Do something...
} else {
  // Another key was pressed.
  console.log('Searching another...');
  // Do something...
}

// Let the user choose an item from a list
animals = ['Lion', 'Elephant', 'Crocodile', 'Giraffe', 'Hippo'],
index = readlineSync.keyInSelect(animals, 'Which animal?');
console.log('Ok, ' + animals[index] + ' goes to your room.');
