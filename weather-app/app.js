const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=d9f0e392a692320c7647bf70d6f97104&query=Rio de Janeiro'

request({ url: url, json: true }, (error, response) => {
    const descrip = response.body.current.weather_descriptions[0]
    const temp = response.body.current.temperature
    const precip = response.body.current.precip
    console.log(descrip + '. It is currently ' + temp + ' degrees out. There is a ' + precip + '% chance of rain.')
})

//
// Goal: Print a small forecast to the user
//
// 1. Print: "It is currently 58.55 degrees out. There is a 0% chance of rain."
// 2. Test your work!