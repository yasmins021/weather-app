

// Creating a new virable which contains current date info.

let time = new Date();

// Creating virables which extract precisive info from date object.let

let days = time.getDay();
let minutes = time.getMinutes();
let date = time.getDate();
let month = time.getMonth();
let year = time.getFullYear();

// creating an array with days names and month.

let dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wensday",
  "Thursday",
  "Friday",
  "Saturday"
];

let monthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

// Creating new virables which takes from
//the virable "days" && "month" data and inject it to
//the array "dayNames" && "month" thus get a current day name.

let currentDay = dayNames[days];
let currentMonth = monthName[month];

//Creating a function with null adding to the first 9 minutes,
// new virables which contains current hours and minutes && date, month, year.

function properMinutes() {
  if (minutes < 10) {
    return "0" + minutes;
  }
  return minutes;
}
let hours = time.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}

let currentTime = `${hours}:${properMinutes()}`;
let currentDate = `${date} ${currentMonth} ${year}`;

// tagging HTML properties

let weatherDay = document.querySelector("#current-day");
weatherDay.innerHTML = currentDay;
let weatherTime = document.querySelector("#local-time");
weatherTime.innerHTML = currentTime;
let weatherDate = document.querySelector("#local-date");
weatherDate.innerHTML = currentDate;

//TASK #2

// Creating a function which prevent a default behavior of a submit button
// tagging searh line to store input value
// displaying input value to HTML element.

function weatherForecast(response) {
  let weatherIcon = {
    Clouds: `<i class="fa-solid fa-cloud"></i>`,
    Rain: `<i class="fa-solid fa-cloud-rain"></i>`,
    Clear: `<i class="fa-solid fa-sun"></i>`
  };
  let snowWeatherIcon = document.querySelector("#weather-icon");
  let weatherDescription = response.data.weather[0].main;
  snowWeatherIcon.innerHTML = weatherIcon[weatherDescription];
  let snowWeather = document.querySelector("#weather-description");
  snowWeather.innerHTML = weatherDescription;

  let wind = response.data.wind.speed;
  let snowWind = document.querySelector("#wind");
  let windRound = Math.round(wind);
  snowWind.innerHTML = windRound;
  let humidity = response.data.main.humidity;
  let snowHumidity = document.querySelector("#humidity");
  snowHumidity.innerHTML = humidity;
  let tempCurrent = response.data.main.temp;
  let tempRound = Math.round(tempCurrent);
  let snowTemp = document.querySelector("#temperature");
  snowTemp.innerHTML = `${tempRound}º`;
}

function city(event) {
  event.preventDefault();
  let input = document.querySelector("#exampleInputEmail1");
  let city = document.querySelector("#city");
  city.innerHTML = input["value"];
  let unit = "metric";
  let apiKey = "5981069ab3293d45828d868bcfe3682b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input["value"]}&appid=${apiKey}&units=${unit}`;

  axios.get(apiUrl).then(weatherForecast);
}

// Tagging HTML form and adding behavior through created function.

let searchForm = document.querySelector("#search-line");
searchForm.addEventListener("submit", city);

//Task #3

//Tagging C and F id's in HTML, adding behavior by created a function.



function displayCelsiusTemperature(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let tempCelsius = document.querySelector("#celsius");

tempCelsius.addEventListener("click", convertToCelsius);


// Initial posission
function initialData() {
  function initialPosition(response) {
    let weatherIcon = {
      Clouds: `<i class="fa-solid fa-cloud"></i>`,
      Rain: `<i class="fa-solid fa-cloud-rain"></i>`,
      Clear: `<i class="fa-solid fa-sun"></i>`
    };
    let snowWeatherIcon = document.querySelector("#weather-icon");
    let weatherDescription = response.data.weather[0].main;
    snowWeatherIcon.innerHTML = weatherIcon[weatherDescription];
    let snowWeather = document.querySelector("#weather-description");
    snowWeather.innerHTML = weatherDescription;

    let wind = response.data.wind.speed;
    let snowWind = document.querySelector("#wind");
    let windRound = Math.round(wind);
    snowWind.innerHTML = windRound;
    let humidity = response.data.main.humidity;
    let snowHumidity = document.querySelector("#humidity");
    snowHumidity.innerHTML = humidity;
    let tempCurrent = response.data.main.temp;
    let tempRound = Math.round(tempCurrent);
    let snowTemp = document.querySelector("#temperature");
    snowTemp.innerHTML = `${tempRound}º`;
    let city = response.data.name;
    let snowCity = document.querySelector("#city");
    snowCity.innerHTML = city;
  }

  let apiKey = "5981069ab3293d45828d868bcfe3682b";
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=kyiv&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(initialPosition);
}
initialData();
