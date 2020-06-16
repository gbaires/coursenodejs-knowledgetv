const validator = require('validator')
const getNotes = require('./notes')

const notes = getNotes()
console.log(notes)

console.log(validator.isEmail('gabriel.aires.@gmail.com'))
console.log(validator.isURL('127.0.0.1'))
console.log(validator.isURL('www.google.com'))