const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=d9f0e392a692320c7647bf70d6f97104&query=Rio de Janeiro'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})