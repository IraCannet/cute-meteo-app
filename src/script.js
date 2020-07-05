function search(event) {
  event.preventDefault();

  let apiKey = "7fdccd62f53b23719a5ed84efc64f715";
  let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather?q=";
  let city = document.querySelector("#search-text-input").value;
  let unit = "metric";
  let apiUrl = `${apiEndPoint}${city}&appid=${apiKey}&units=${unit}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(showWeather);
}

/*function clickFahrenheit() {
  let degree = document.querySelector("#degree");
  degree.innerHTML = `64`;
}

function clickCelsius() {
  let degree = document.querySelector("#degree");
  degree.innerHTML = `18`;
}*/

function showWeather(response) {
  console.log(response);
  console.log(response.data.name);

  document.querySelector("#city").innerHTML = response.data.name;

  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  let tempElement = document.querySelector("#degree");
  tempElement.innerHTML = `${temperature}°C`;
  form.reset();

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
  }
  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(showPosition);
  }

  let button = document.querySelector("button");
  button.addEventListener("click", getCurrentPosition);*/
}

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "c4ec87540b7d8d71553d9dad178f26b1";
  let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather";
  let unit = "metric";
  let apiUrl = `${apiEndPoint}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showWeather);
}

let now = new Date();
let h3 = document.querySelector("h3");
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

h3.innerHTML = `${hours}:${minutes} ${day}, ${month} ${date}`;

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
/*
let degreeFahrenheit = document.querySelector("#fahrenheit");
degreeFahrenheit.addEventListener("click", clickFahrenheit);

let degreeCelsius = document.querySelector("#celsius");
degreeCelsius.addEventListener("click", clickCelsius);
*/
navigator.geolocation.getCurrentPosition(showPosition);
