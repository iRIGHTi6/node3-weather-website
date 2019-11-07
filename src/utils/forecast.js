const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/3985ce5fa493a3e1a9b83fd96b1fa8fb/' + latitude + ',' + longitude

    request({ url, json: true}, (error, {body}) => {
    if (error) {
        callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
        callback('Unable to find location', undefined)
        
    } else {
        const {temperature, precipProbability} = body.currently
        const summary = body.daily.data[0].summary
        const tempHigh = body.daily.data[0].temperatureHigh
        
        callback(undefined, ' --' + summary + ' -- Today\'s expected high is: ' + tempHigh + ' degrees -- It is currently ' + temperature + ' degrees out. -- There is a ' + precipProbability + '% chance of rain.')
    }
})
}

module.exports = forecast