function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let h1 = document.querySelector("h1");
  if (searchInput.value) {
    h1.innerHTML = `${searchInput.value}`;
  } else {
    alert("Please, type something 🙏🏻");
  }
  form.reset();
}

function clickFahrenheit() {
  let degree = document.querySelector("#degree");
  degree.innerHTML = `64`;
}

function clickCelsius() {
  let degree = document.querySelector("#degree");
  degree.innerHTML = `18`;
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

h3.innerHTML = `${day} ${date} ${month} ${hours}:${minutes}`;

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

let degreeFahrenheit = document.querySelector("#fahrenheit");
degreeFahrenheit.addEventListener("click", clickFahrenheit);

let degreeCelsius = document.querySelector("#celsius");
degreeCelsius.addEventListener("click", clickCelsius);
