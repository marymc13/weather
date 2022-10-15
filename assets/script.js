var apiKey = "0bcadb38909d7094222c11ab8e636715";
var city;
var cityFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#city");
var weatherContainerEl = document.querySelector("#weather-container");
var weatherSearchTerm = document.querySelector("#weather-search-term");
var newName = document.getElementById("#city");
var currentDayContainerEl =  document.querySelector("#container");

function getCityWeather(cityWeather) {
    var cityWeather = document.getElementById("city").value;
    if (!cityWeather) return;
    //weather URL
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=`+cityWeather+ `&units=imperial&limit=1&appid=`+apiKey;
    
    //Request data from url
    fetch(apiUrl)
        .then(response=>
            response.json())
        .then(data=> {
            this.displayWeather(data),
            console.log(data),
            getWeather({
               lat: data.coord.lat,
             lon: data.coord.lon
            })
        })
        .catch(err=>
            console.error(err))
        }
function getWeather(location) {
    console.log(location);
    var {lat, lon} = location;
   
    var city = location.name; 
    //var apiUrl = `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${apiKey}`;
   var apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${apiKey}&units=imperial`;
    fetch(apiUrl)
    .then(function (res) {
        return res.json();
    })
    .then(function(weather) {
       // $('#current-icon').html('');
       $('#current-city').html('');
        $('#current-temp').html('');
        $('#current-wind').html('');
        $('#current-humidity').html('');
        $('#uv-index').html('');
  
        // get current date of searched city according to timezone
        let currentDay = moment(weather.current.dt * 1000 + (weather.timezone_offset * 1000)).format('dddd, l');
  
        // display current weather information of city
       // $('#current-icon').append('<img src="./assets/images/icons/' + weather.current.weather[0].icon + '.svg" alt="' + weather.current.weather[0].description + '"/>');
       $('#current-city').append('');
       $('#current-temp').append('<p class="current-temp">' + Math.round(weather.current.temp) + '° F</p><p>');
        $('#current-wind').append('<strong>Wind:</strong><br />' + weather.current.wind_speed + ' MPH');
        $('#current-humidity').append('<strong>Humidity:</strong><br />' + weather.current.humidity + '%');
        $('#current-uv-index').append('<strong>UV Index:</strong><br /><span class="bg-uvi">' + weather.current.uvi + '</span>');   
    // .then(data=>{
    //     console.log(data);
    //     displayCurrentDayForecast(city, data);
    //     fiveDayForecast(city, data);
        //renderWeather(city, data);
    }) 
    .catch(function (err) {
        console.error(err);
    })
}   


//function renderWeather(city,data) {
    //currentDay(city, data.current, data.timezone);
    //forecast(data.daily, data.timezone);
    //displayWeather(data);
//}
function displayCurrentDayForecast(city, weatherData ) {
 var todaysDate =  moment().format('MM/DD/YYYY');
 var currentDayEl = document.createElement("h2");


currentDayContainerEl.append(currentDayEl);
currentDayContainerEl.append(currentDayEl);


}
//Display weather
function displayWeather(data) {
    
   const { name } = data;
   const { temp, humidity } = data.main;
   const { speed } = data.wind;


//    console.log(name, temp, humidity, speed);
//    document.querySelector(".city").innerText = "Weather for " + name;
//    document.querySelector(".temp").innerText = "Temp: " + temp + "°F";
//    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
//    document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
}

//5 Day forecast
function fiveDayForecast(forecast) {
    var fiveDayForecast = document.getElementById("forecast").value;
    if(!fiveDayForecast) return;

    //var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
//var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityWeather}&units=imperial&appid=${apiKey}`
    fetch(apiUrl)
    .then(function(res) {
        return res.json();
    })
    .then(data=>{
        console.log(data);
        getfiveDayForecast(data);
    })

   for(var i = 0; i < city.length; i++) {
       var listItem = document.createElement('li');
     listItem.textContent = city[i].html;

   

}
    forecast[i].temp.humidity
   var fiveDay = document.createElement(div);
    
}
fiveDayForecast();
//Search for City Weather 
document.getElementById("search").onclick = function(event) {
    event.preventDefault();
     getCityWeather(); 
       
  }

