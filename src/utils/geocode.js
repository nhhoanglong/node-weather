const request = require("request")

const geocode = (address,callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoibmhob2FuZ2xvbmciLCJhIjoiY2s4bnRiMXcwMHkwNTNtbjJuM294M2FzciJ9.0GnylDO_Hh6UVpiU2zMdcg';
    // console.log(url)
    request({url,json:true},(error,{body})=>{
        if(error){
            callback("Unable to connect",undefined)
        }else if(body.features.length===0){
            callback("Unable to find location",undefined)
        }else{
            callback(undefined,{
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports=geocode