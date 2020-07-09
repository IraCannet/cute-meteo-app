function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  searchCity(city);
}

function searchCity(city) {
  let apiKey = "7fdccd62f53b23719a5ed84efc64f715";
  let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather?q=";
  let unit = "metric";
  let apiUrl = `${apiEndPoint}${city}&appid=${apiKey}&units=${unit}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(showWeather);
}

function showWeather(response) {
  console.log(response);
  console.log(response.data.name);

  document.querySelector("#city").innerHTML = response.data.name;

  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  let tempElement = document.querySelector("#degree");
  tempElement.innerHTML = `${temperature}°C`;
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
  document.querySelector("#wind").innerHTML = response.data.wind.speed;

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
let month = months[now.getMonth()];

h4.innerHTML = `${hours}:${minutes} ${day}, ${month} ${date}`;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

/*
  let searchInput = document.querySelector("#search-text-input");
  let h1 = document.querySelector("h1");

  if (searchInput.value) {
    h1.innerHTML = `${searchInput.value}`;
  } else {
    alert("Please, type something 🙏🏻");
  }
  function showPosition(position) {
    let h1 = document.querySelector("h1");
    h1.innerHTML = `${position.name}`;
  }*/

let currentLocationButton = document.querySelector("#current-loc");
currentLocationButton.addEventListener("click", getCurrentPosition);
searchCity("Paris");
