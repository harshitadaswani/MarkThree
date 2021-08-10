// declaring packages
var rs = require("readline-sync");
var c = require("chalk");

const log = console.log;

var userName = rs.question(c.hex('#DEADED').bold("Input Your name: \n"));
log(c.cyan.bold("\nWelcome " + userName + "!!!"));

var year = rs.question(c.redBright.bold("\nEnter Your Birth Year: \n"));
y = parseInt(year,10);

if(!isNaN(y))
{
	leapYear(y);
}
else
{
	log(c.magenta.bold("Enter a valid number"));
}

function leapYear(y)
{
	if( (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0) )
	{
		log(c.blueBright.bold("\nYour birth year " + y + " is a leap year"));
	}
	else
	{
		log(c.blueBright.bold("\nYour birth year " + y + " is NOT a leap year"));
	}
}
