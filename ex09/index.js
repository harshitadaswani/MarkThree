// ex 09: print your name 5 times using for loop

// initiating for loop
for(i=0; i<5; i++)
{
	console.log("Harshita Daswani");
}
console.log("\n");

// bonus
for(i=1; i<6; i++)
{
	console.log(i + " Harshita Daswani");
}
console.log("\n");

// star pattern
var readlineSync = require("readline-sync");
var input = readlineSync.question("Enter a number: ");
var string = "";
console.log("\n");

for(i=0; i <= input; i++)
{
	for(j = 0; j < i; j++)
	{
		string += "*";
	}
	string += "\n";
}
console.log(string);
console.log("\n");

// inverse star pattern
var string01 = "";

for (m = 0; m < input; m++) {
  // printing star
  for (k = 0; k < input - m; k++) {
    string01 += "*";
  }
  string01 += "\n";
}
console.log(string01);

// run a loop and print the sum of two numbers first number being 22 always second number being the current value of loop run it 10 times

sum = 22;

for(a = 0; a <= 10; a++)
{
	for(b = 0; b <= 1; b++)
	sum = sum + b;
	console.log(sum);
}
console.log("\n");

for(a = 0; a <= 10; a++)
{
	for(b = 0; b <= a; b++)
	sum01 = 22 + b;
	console.log(sum01);
}
