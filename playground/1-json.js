const fs = require('fs')

const path = '1-json.json'

const dataJSON = fs.readFileSync(path).toString()
const user = JSON.parse(dataJSON)

user.name = 'Gabriel'
user.age = 21

const userJSON = JSON.stringify(user)
fs.writeFileSync(path, userJSON)