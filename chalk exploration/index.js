// chalk exploration
const chalk = require('chalk');

// to write the text in colour
console.log(chalk.blue('Hello world!'));

// Combine styled and normal strings
console.log(chalk.green('Hello') + ' World' + chalk.red('!'));

const log = console.log;

// Compose multiple styles
log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

// ES2015 template literal
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

// Use RGB colors in terminal emulators that support it.
log(chalk.keyword('orange')('Yay for orange colored text!'));
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));

// defining own themes
const error = chalk.bold.red;
const warning = chalk.keyword('orange');

console.log(error('Error!'));
console.log(warning('Warning!'));

// using console.log string substitution
const name = 'Sindre';
console.log(chalk.green('Hello %s'), name);

// tagged template literal
const miles = 18;
const calculateFeet = miles => miles * 5280;

console.log(chalk`
	There are {bold 5280 feet} in a mile.
	In {bold ${miles} miles}, there are {green.bold ${calculateFeet(miles)} feet}.
`);

// function styles (rgb(), hsl(), keyword(), etc.) may not contain spaces between parameters.
console.log(chalk.bold.rgb(10, 100, 200)('Hello!'));
console.log(chalk.bold.rgb(10, 100, 200)`Hello!`);
console.log(chalk`{bold.rgb(10,100,200) Hello!}`);
