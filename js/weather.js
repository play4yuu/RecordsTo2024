const API_KEY = "46267eb26029c14e21de9202ac7894bb";
const lang = "kr";

navigator.geolocation.getCurrentPosition(function (pos) {
  console.log(pos);
  var lat = pos.coords.latitude;
  var lon = pos.coords.longitude;

  // console.log("현재 위치는 : " + lat + ", " + lon);

  var url =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    lat +
    "&lon=" +
    lon +
    "&lang=" +
    lang +
    "&appid=" +
    API_KEY +
    "&units=metric";

  // console.log(url);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      var weather_icon = document.getElementById("weather__icon");
      var location = document.getElementById("weather_loca");
      var temp = document.getElementById("weather_temp");
      var tenki = document.getElementById("weather_tenki");

      weather_icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="날씨 아이콘" class="weather__icon">`;
      location.innerHTML = data.name;
      temp.innerHTML = Math.round(data.main.temp) + "°C";
      tenki.innerHTML = data.weather[0].description;
    })
    .catch((error) => {
      // Handle any errors that occur during the request
      console.error(error);
    });
});
