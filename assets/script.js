var apiKey = "92c23b223e0a7ee98ceded803b6da503";
var city;
var cityFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#city");
var weatherContainerEl = document.querySelector("#weather-container");
var weatherSearchTerm = document.querySelector("#weather-search-term");
var newName = document.getElementById("#city");


function getCityWeather(cityName) {
    //weather URL
    //var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=orlando&appid=92c23b223e0a7ee98ceded803b6da503";
    var apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`;

    //Request data from url
    fetch(apiUrl)
        .then(response=>response.json())
        .then(response=> console.log(response))   
        .catch(err=>console.error(err));
}
function getWeather(location) {
    var {lat, lon} = location;
    console.log(location);
    var city = location.name; 
    var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,hourly&appid=${apiKey}`;

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
}

//var formSubmitHandler = function(event) {
    //Prevent default
 //   event.preventDefault();
  //  console.log(event);
   // if (!cityName) {
       // return;
  //  }
  //  var cityName = cityInputEl.value.trim(); 
  //  cityInputEl.value = "";
  //  console.log(cityName);
   
//};

//Display weather
var displayWeather = function (city, searchTerm) {
    weatherContainerEl.textContent = "";
    weatherSearchTerm.textContent = searchTerm;
}

//cityFormEl.addEventListener("submit", formSubmitHandler);
//Search for City Weather
document.getElementById("search").onclick = function() {
    var cityWeather = document.getElementById("city").value;
    console.log(cityWeather);
    getWeather();

};