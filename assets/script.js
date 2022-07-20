var apiKey = "92c23b223e0a7ee98ceded803b6da503";
var city;


var getCityWeather = function(city) {
    //weather URL
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Orlando&appid=92c23b223e0a7ee98ceded803b6da503";

    fetch(apiUrl).then (function(response) {
        if(response.ok) {
            console.log(response)
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
}