const fs = require('fs');

const path = 'notes.txt'

fs.writeFileSync(path, 'My name is Gabriel.')

//
// Challenge: Append a message to notes.txt
//
// 1. Use appendFileSync to append to the file
// 2. Run the script
// 3. Check your work by opening the file and viewing the appended text

fs.appendFileSync(path, ' How are you?')