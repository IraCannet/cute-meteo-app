function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  searchCity(city);
}

function showWForecast(response) {
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = null;
  let forecast = null;

  for (let index = 0; index < 5; index++) {
    forecast = response.data.list[index];
    forecastElement.innerHTML += `        <span class="float-left">
          <h5>${formatHours(forecast.dt * 1000)}</h5>
          <img class="forecast-element" src="https://openweathermap.org/img/wn/${
            forecast.weather[0].icon
          }@2x.png" alt="">
          <div class="weather-forecast-temperature"><p>
            ${Math.round(forecast.main.temp_min)}°-${Math.round(
      forecast.main.temp_max
    )}°
          </p></div>
        </span>`;
  }
}

function formatHours(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "7fdccd62f53b23719a5ed84efc64f715";
  let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather?q=";
  let unit = "metric";
  let apiUrl = `${apiEndPoint}${city}&appid=${apiKey}&units=${unit}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(showWeather);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast/?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showWForecast);
}

function showWeather(response) {
  console.log(response);
  console.log(response.data.name);

  document.querySelector("#city").innerHTML = response.data.name;

  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  let tempElement = document.querySelector("#degree");
  tempElement.innerHTML = `${temperature}`;
  form.reset();
  document
    .querySelector("#icon")
    .setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );

  let sunrise = document.querySelector("#sunrise");
  let theSunrise = new Number(response.data.sys.sunrise);
  theSunrise = theSunrise * 1000;

  let sunriseToDate = new Date(theSunrise);
  let sunriseHour = sunriseToDate.getHours();
  let sunriseMinute = sunriseToDate.getMinutes();

  if (sunriseMinute < 10) {
    sunriseMinute = `0${sunriseMinute}`;
  }

  sunrise.innerHTML = `${sunriseHour}:${sunriseMinute}`;

  let sunset = document.querySelector("#sunset");
  let theSunset = new Number(response.data.sys.sunset);
  theSunset = theSunset * 1000;

  let sunsetToDate = new Date(theSunset);
  let sunsetHour = sunsetToDate.getHours();
  let sunsetMinute = sunsetToDate.getMinutes();

  if (sunsetMinute < 10) {
    sunsetMinute = `0${sunsetMinute}`;
  }

  sunset.innerHTML = `${sunsetHour}:${sunsetMinute}`;

  celsiusTemperature = response.data.main.temp;
}
function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchPosition);
}

function searchPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "c4ec87540b7d8d71553d9dad178f26b1";
  let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather";
  let unit = "metric";
  let apiUrl = `${apiEndPoint}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showWeather);
}
function clickFahrenheit() {
  event.preventDefault();
  degreeFahrenheit.classList.add("active");
  degreeCelsius.classList.remove("active");
  let degree = document.querySelector("#degree");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  degree.innerHTML = Math.round(fahrenheitTemperature);
}

function clickCelsius() {
  event.preventDefault();
  degreeCelsius.classList.add("active");
  degreeFahrenheit.classList.remove("active");
  let degree = document.querySelector("#degree");
  degree.innerHTML = Math.round(celsiusTemperature);
}

let now = new Date();
let h4 = document.querySelector("h4");
let date = now.getDate();
let hours = now.getHours();
let minutes = ("0" + now.getMinutes()).slice(-2);
let year = now.getFullYear();
let milliSeconds = now.getMilliseconds();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let months = [
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
  "December",
];
debugger;
let month = months[now.getMonth()];

h4.innerHTML = `${hours}:${minutes} ${day}, ${month} ${date}th`;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#current-loc");
currentLocationButton.addEventListener(
  "click",
  getCurrentPosition,
  showWForecast
);
let celsiusTemperature = null;

let degreeFahrenheit = document.querySelector("#fahrenheit");
degreeFahrenheit.addEventListener("click", clickFahrenheit);

let degreeCelsius = document.querySelector("#celsius");
degreeCelsius.addEventListener("click", clickCelsius);

searchCity("Paris");
