document.addEventListener('DOMContentLoaded', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getWeather);   
    };
})

function getWeather(position) {
    const Lat =  position.coords.latitude;
   const long = position.coords.longitude;

   const APIkey = 'dc09c9239910d461bdd17cc4c1d2b9d2';
//    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${}&lon=${long}&appid=${APIkey}`;
   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${Lat}&lon=${long}&appid=${APIkey}`

   fetch(url)
    .then(response =>response.json())
    .then(data=> {
        
        document.getElementById('weather').innerHTML= `
        <h2>${data.name} - ${data.sys.country}</h2>
        <p> ${data.weather[0].description}</p>
        `
    })
   
}
