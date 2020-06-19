const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=d9f0e392a692320c7647bf70d6f97104&query=-22.911'

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service!')
    } else if (response.body.error) {
        console.log('Unable to find location')
    } else {
        const descrip = response.body.current.weather_descriptions[0]
        const temp = response.body.current.temperature
        const precip = response.body.current.precip
        console.log(descrip + '. It is currently ' + temp + ' degrees out. There is a ' + precip + '% chance of rain.')
    }
})

const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Rio%20de%20Janeiro.json?access_token=pk.eyJ1IjoiZ2FiaWFpcmVzIiwiYSI6ImNrYmxlajQ2dzAxencyc256YmE1eWxidXUifQ.hJjl0n9LfFSeqWKm9TYgjQ&limit=1'

request({ url: geocodeUrl, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to location service!')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location. Try another search.')
    } else {
        const longitude = response.body.features[0].center[0]
        const latitude = response.body.features[0].center[1]
        console.log(latitude, longitude)
    }
})