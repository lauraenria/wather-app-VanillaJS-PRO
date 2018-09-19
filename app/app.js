// Variables

let button = document.querySelector('#submitButton');

let cityName = "Washington"; // example

const apiKey = '';

const endPoint = 'api.openweathermap.org';

let url = `https://${endPoint}/data/2.5/weather?q=${cityName}&APPID=${apiKey}`;


// The DOMContentLoaded event is fired when the initial HTML document has been completely loaded and parsed, 
// without waiting for stylesheets, images, and subframes to finish loading. 
// A very different event load should be used only to detect a fully-loaded page. 
document.addEventListener("DOMContentLoaded", function () {
    // Your code to run since DOM is loaded and ready

    // if I click on the search button this function will save the user'input
    button.addEventListener('click', event => {
        event.preventDefault();
        let input = document.querySelector('#search');
        cityName = input.value;
        url = `https://${endPoint}/data/2.5/weather?q=${cityName}&APPID=${apiKey}`;

        getData(url).catch(err => console.error(err));
    });

    // The Navigator.geolocation read-only property returns a Geolocation object 
    // that gives Web content access to the location of the device. 
    // This allows a Web site or app to offer customized results 
    // based on the user's location.

    // The .getCurrentPosition() method is used to get the current position of the device.

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {

            let lat = position.coords.latitude;
            let long = position.coords.longitude;
         
            // Once I have the latitude and longitute of my current postion I create another url with the lat and long parameter

            url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${apiKey}`;


            getData(url).catch(err => console.error(err));
        });

    } else {
        alert('geolocation IS NOT available');
    }
});


// The Fetch API is a simple interface for fetching resources. 
// Fetch makes it easier to make web requests and handle responses than with the older XMLHttpRequest.
// The main difference is that the Fetch API uses Promises.
// A promise object represents the eventual result (success or failure) of an asynchronous operation.

// The JSON() function is used to transform objects and arrays, 
// in this case the fecth response to strings and it will return a promise

// The status read-only property of the Response interface contains the status code of the response

// The throw statement throws a user-defined exception and the execution of the current function will stop

function getData(url) {
    return fetch(url).then(response => {

        if (response.ok) {
            return response.json().then(data =>
                displayData(data));
        } else if (response.status == 442) {
            return response.json().then(err => {
                throw err;
            });
        } else {
            let error = new Error(response.statusText);
            error.response = response;
            throw error;
        }


    });
}

// This function displayData() will change part of the DOM in the index.html
// The DOM (The Document Object Model) is an application programming interface (API) 
// and it defines the logical structure of documents and the way a document is accessed and manipulated following the W3C standards.

function displayData(data) {

    // We get the city's name and country
    let locName = document.querySelector('.wather-header-location');
    locName.innerHTML = `<h1>${data.name} <span>${data.sys.country}</span></h1>`;

    // We get the current time
    let today = document.querySelector('.wather-header-time');
    today.innerHTML = `<p>${time()}</p>`;

    // we get weather's icon
    let weatherIcons = document.querySelector('.weather-image');
    weatherIcons.setAttribute('src', `http://openweathermap.org/img/w/${data.weather[0].icon}.png`);

    // We get the temperature in celcius and the description of the weather
    let temp = document.querySelector('.weather-temp-container');
    temp.innerHTML = `<p>${KevinToCelsius(data.main['temp'])}° <br><span>${data.weather['0'].main}</span></p>`;

    // We get the extra info: Wind speed and Humidity
    let wi = document.querySelector('.weather-info');
    wi.innerHTML = `<p>Wind:\u00A0\u00A0${data.wind['speed']}</p><p>Humidity:\u00A0\u00A0${data.main['humidity']}%</p>`;

}

// A simple function which convert from Kevin to celsius

function KevinToCelsius(kevin) {
    return Math.round(kevin - 273.15);
}


// new Date() that creates a new date object with the current date and time.

function time() {
    let currentTime = new Date();
    let str = currentTime.toString();
    let cutStr = str.substring(0, 15);
    return cutStr;
}