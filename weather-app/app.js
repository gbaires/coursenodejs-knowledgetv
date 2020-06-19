const request = require('request')
const geocode = require('./utils/geocode')

// const url = 'http://api.weatherstack.com/current?access_key=d9f0e392a692320c7647bf70d6f97104&query=-22.911'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         const descrip = response.body.current.weather_descriptions[0]
//         const temp = response.body.current.temperature
//         const precip = response.body.current.precip
//         console.log(descrip + '. It is currently ' + temp + ' degrees out. There is a ' + precip + '% chance of rain.')
//     }
// })

geocode('Rio de Janeiro', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})