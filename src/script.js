let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};

let city = prompt("Enter a city:");
city = city.toLowerCase();
if (weather[city] !== undefined) {
  let tempeture = weather[city].temp;
  let celsiusTempeture = Math.round(tempeture);
  let fahrenheitTemperature = Math.round((tempeture * 9) / 5 + 32);
  let humidity = weather[city].humidity;
  alert(
    `It is currently ${celsiusTempeture}°C (${fahrenheitTemperature}°F) in ${city} with a humidity of ${humidity}%`
  );
} else {
  alert(`Sorry we don't know the weather for this city, 
try going to the https://www.google.com/search?q=google+weather+${city}`);
}

/*
for (let i = 0; weather[i] === city; i++) {
  alert(
    `In ${weather[i]} the tempeture is ${weather[i].temp}, the humidity is ${weather[i].humidity}.`
  );
}
alert(`Sorry we don't know the weather for this city, 
try going to the https://www.google.com/search?q=google+weather+${city}`);*/
