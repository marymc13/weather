var apiKey = "0bcadb38909d7094222c11ab8e636715";
var city;
var cityFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#city");
var weatherContainerEl = document.querySelector("#weather-container");
var weatherSearchTerm = document.querySelector("#weather-search-term");
var newName = document.getElementById("#city");


function getCityWeather(cityWeather) {
    var cityWeather = document.getElementById("city").value;
    if (!cityWeather) return;
    //weather URL
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=`+cityWeather+ `&units=imperial&limit=1&appid=`+apiKey;
    
    //Request data from url
    fetch(apiUrl)
        .then(response=>
            response.json())
        .then(data=> 
            this.displayWeather(data));
            //getWeather({
              // lat: data[0].lat,
             //  lon: data[0].lon
            //})
        //.catch(err=>
           // console.error(err)),
}
function getWeather(location) {
    console.log(location);
    var {lat, lon} = location;
    
    var city = location.name; 
    var apiUrl = `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${apiKey}`;

    fetch(apiUrl)
    .then(function (res) {
        return res.json();
    })
    .then(data=>{
        console.log(data);
        renderWeather(city, data);
    }) 
    .catch(function (err) {
        console.error(err);
    })
}   


function renderWeather(city,data) {
    currentDay(city, data.current, data.timezone);
    forecast(data.daily, data.timezone);
    displayWeather(data);
}

//Display weather
function displayWeather(data) {
    
   const { name } = data;
   const { temp, humidity } = data.main;
   const { speed } = data.wind;

   console.log(name, temp, humidity, speed);
   document.querySelector(".city").innerText = "Weather for " + name;
   document.querySelector(".temp").innerText = "Temp: " + temp + "°F";
   document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
   document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
}

//5 Day forecast
function fiveDayForecast(forecast) {
    var forecast = getElementById("forecast").value;
    if(!forecast) return;
    var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=`+lat+`&lon=`+lon+`&appid= `+ apiKey;

    fetch(apiUrl)
}

//Search for City Weather 
document.getElementById("search").onclick = function(event) {
    event.preventDefault();
     getCityWeather(); 
     getfiveDayForecast();  
  }

