const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Rio de Janeiro', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

forecast(-22.911, -43.2094, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})