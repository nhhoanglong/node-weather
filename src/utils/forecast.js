const request = require('request')
const forecast = (latitude,longitude,callback)=>{
    var url = 'http://api.weatherstack.com/current?access_key=c9b7708057b20082b48c7c7048bb6fd2&query='+latitude+','+longitude;
    request({url,json:true},(error,{body})=>{
        // const {body}=response
        // console.log(response)
        if(error){
            callback("Unable to connect",undefined)
        }else if(body.error){
            callback("Can not find, Please try another",undefined)
        }else{
            // console.log(response.body)
            const forecast = body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike + ' degress.'
            callback(undefined,forecast)
        }
    })
}

module.exports = forecast