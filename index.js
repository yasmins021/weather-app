function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}
function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[day];
}

function displayForcast(response) {
  let forecast = response.data.daily;
  let forecastElement = document.querySelector("#forecast");
  let forecastHTML = `<div class="row">`;
  forecast.forEach(function (forecastDay, index) {
    if (index < 6) {
      forecastHTML =
        forecastHTML +
        `
              <div class="col-2">
                <div class="weather-forecast-date">${formatDay(
                  forecastDay.dt
                )}</div>
              
                  <img src="http://openweathermap.org/img/wn/${
                    forecastDay.weather[0].icon
                  }@2x.png" alt="" width="42"/>
                  <div class="weather-forecast-temperature">
                    <span class="weather-forecast-temperature-max">${Math.round(
                      forecastDay.temp.max
                    )}°</span>
                    <span class="weather-forecast-temperature-min">${Math.round(
                      forecastDay.temp.min
                    )}°</span>
                   </div>
                </div> `;
    }
  });
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}



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



let weatherDay = document.querySelector("#current-day");
weatherDay.innerHTML = currentDay;
let weatherTime = document.querySelector("#local-time");
weatherTime.innerHTML = currentTime;
let weatherDate = document.querySelector("#local-date");
weatherDate.innerHTML = currentDate;


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


let searchForm = document.querySelector("#search-line");
searchForm.addEventListener("submit", city);




function displayCelsiusTemperature(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
 
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let tempCelsius = document.querySelector("#celsius");

tempCelsius.addEventListener(convertToCelsius);


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
