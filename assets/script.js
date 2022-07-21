var apiKey = "92c23b223e0a7ee98ceded803b6da503";
var city;
cityFormEl = document.querySelector("#city-form");
cityInputEl = document.querySelector("#city");
var cityContainerEl = document.querySelector("#weather-container");
var weatherSearchTerm = document.querySelector("#city-search-term");

var getCityWeather = function(city) {
    //weather URL
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Orlando&appid=92c23b223e0a7ee98ceded803b6da503";

    fetch(apiUrl).then (function(response) {
        if(response.ok) {
            console.log(response);
            response.json().then(function(data) {
                displayWeather(data, city);
            });
        } else {
            alert ("Check name of city");
        }
    }) 
};

var formSubmitHandler = function(event) {
    event.preventDefault();
    console.log(event);

    var cityName = cityInputEl.value.trim();

    if (cityName) {
        getCityWeather(city);
        cityInputEl.value = "";
    } else {
         alert ("Please enter a city.");
    }
};

var displayWeather = function(city, searchTerm ) {
    
}

cityFormEl.addEventListener("submit", formSubmitHandler);