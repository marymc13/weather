var apiKey = "92c23b223e0a7ee98ceded803b6da503";
var city;
var cityFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#city");
var weatherContainerEl = document.querySelector("#weather-container");
var weatherSearchTerm = document.querySelector("#weather-search-term")
var newName = document.getElementById("#city");


var getCityWeather = function (cityName) {
    //weather URL
    //var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=orlando&appid=92c23b223e0a7ee98ceded803b6da503";
    var apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`;

    //Request data from url
    fetch(apiUrl)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            if (!data[0]) {
                alert("City not found.");
                ("Check name of city");
            } else {
                appendSearch(cityName);
                getWeather(data[0]);
            }
           
        })
        .catch(function (err) {
            console.error(err);
        });
};

function getWeather(location) {
    var {lat, lon} = location;
    console.log(location);
    var city = location.name; 
    var apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${apiKey}`;

    fetch(apiUrl)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
       renderWeather(city, data);  
    })
    .catch(function (err) {
        console.error(err);
    });   
}

function renderWeather(city,data) {
    currentDay(city, data.current, data.timezone);
    forecast(data.daily, data.timezone);
}

var formSubmitHandler = function (event) {
    //Prevent default
    event.preventDefault();
    console.log(event);
    if (!cityName.value) {
        return;
    }

    var cityName = cityInputEl.value.trim();
    getCityWeather(cityName);
    cityInputEl.value = "";
};

//Display weather
var displayWeather = function (city, searchTerm) {
    weatherContainerEl.textContent = "";
    weatherSearchTerm.textContent = searchTerm;
}

cityFormEl.addEventListener("submit", formSubmitHandler);