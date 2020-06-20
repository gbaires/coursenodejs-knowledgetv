const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=d9f0e392a692320c7647bf70d6f97104&query=-22.900,-43.233'

const request = http.request(url, response => {
    let data = ''

    response.on('data', chunk => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)

        if (body.error) {
            console.log('Unable to find localtion')
        } else {
            console.log(body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. There is a ' + body.current.precip + '% chance of rain.')
        }
    })

})

request.on('error', error => {
    console.log('Unable to connect to weather service!')
})

request.end()