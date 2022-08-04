var apiKey = "0bcadb38909d7094222c11ab8e636715";
var city;
var cityFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#city");
var weatherContainerEl = document.querySelector("#weather-container");
var weatherSearchTerm = document.querySelector("#weather-search-term");
var newName = document.getElementById("#city");


function getCityWeather(cityName) {
    var cityWeather = document.getElementById("city").value;
    if (!cityWeather) return;
    //weather URL
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=`+cityWeather+`&limit=1&appid=`+apiKey;
    
    //Request data from url
    fetch(apiUrl)
        .then(response=>
            response.json())
        .then(data=> {
            console.log(data);
            getWeather({
               lat: data[0].lat,
               lon: data[0].lon
            
            });
        })
        .catch(err=>
            console.error(err));
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
//var formSubmitHandler = function(event) {
    //Prevent default
   //
   // console.log(event);
   // if (!cityName) {
   //     return;
   //}
   //var cityName = cityInputEl.value.trim(); 
   // cityInputEl.value = "";
   // console.log(cityName);
   
//};

//Display weather
function displayWeather(data) {
    const dailyWeather = main.humidity.temp
    const weatherInfo = document.getElementById('weather-search-term');
    weatherInfo.textContent = dailyWeather
    weatherContainerEl.textContent = weatherInfo;
}

//Search for City Weather 
document.getElementById("search").onclick = function(event) {
    event.preventDefault();
   
     getCityWeather();
    
}
