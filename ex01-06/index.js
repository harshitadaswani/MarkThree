// ex04: Do it all together

// ex01: print your name
console.log('Harshita Daswani');

// ex02: take input from user and print
var readlineSync = require('readline-sync');
var userName = readlineSync.question("Input your username: ");
console.log(userName);

// ex03: concatenate the strings
console.log("Hiii " + userName + "!!!");

// ex05: input age from user
// ex06: increment score if right answer
score = 0;
if (readlineSync.keyInYN("Is your age greater than 25")) {
	console.log("you are right");
	score = score + 1;
}
else {
	console.log("you are wrong");
	score = score - 1;
}
