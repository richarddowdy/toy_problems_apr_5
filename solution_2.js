const apiKey = "" // put your api key here as a string
const baseUrl =  "http://api.openweathermap.org/geo/1.0/direct"

function fetchData(city, state, resultLimit = 3) {
    return fetch(`${baseUrl}?q=${city},${state},usa&limit=${resultLimit}&appid=${apiKey}`)
      .then(function (response) {
        return response.json()
      })
      .then(function(data) {
        console.log(data)
        let cityLatLong = {lat: data[0].lat, long: data[0].lon}
        console.log(cityLatLong)
        return cityLatLong
      })
}

fetchData("new_york", "ny", 1) // { lat: 40.7127281, long: -74.0060152 }