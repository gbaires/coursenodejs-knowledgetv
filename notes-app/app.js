const chalk = require('chalk')
const getNotes = require('./notes')

const notes = getNotes()
console.log(notes)

//
// Challenge: Use the chalk library in your project
//
// 1. Install version 2.4.1 of chalk
// 2. Load chalk into app.js
// 3. Use it to print the string "Success!" to the console in green
// 4. Test your work
// 
// Bonus: Use docs to mess around with other styles. Make text bold and inversed.

const success = chalk.bold.green
const warning = chalk.bold.yellow
const error = chalk.bold.red
const inversed = chalk.bold.inverse

console.log(success('Success!'))
console.log(success.inverse('Success!'))
console.log(warning('Warning:'))
console.log(error('Error:'))
console.log(inversed('Bold and inversed'))

console.log(chalk.bgCyan.black('BgCyan and black'))
console.log(chalk.bold.italic.rgb(255, 215, 0)('Bold, italic and rgb gold'))
console.log(chalk.bold.hex('#FF6347')('Bold and hex tomato'))