(() => {
  const apiKey = "6549e54d22d39a9e11ddd62ff8ed53c6";

  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const searchBox = document.querySelector(".search input");
  const searchBtn = document.querySelector(".search button");
  const weatherIcon = document.querySelector(".weather-icon");
  const weatherIconText = document.querySelector(".weatherIconText");

  async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status === 404) {
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
    } else {
      const data = await response.json();

      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + "°C";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

      if (data.weather[0].main === "Haze") {
        weatherIcon.src = "../images/haze.png";
        weatherIconText.style.display = "block";
        weatherIconText.innerText = "Haze";
      } else if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "../images/clouds.png";
        weatherIconText.style.display = "block";
        weatherIconText.innerText = "Clouds";
      } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "../images/clear.png";
        weatherIconText.style.display = "block";
        weatherIconText.innerText = "Clear";
      } else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "../images/mist.png";
        weatherIconText.style.display = "block";
        weatherIconText.innerText = "Mist";
      } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "../images/rain.png";
        weatherIconText.style.display = "block";
        weatherIconText.innerText = "Rain";
      } else if (data.weather[0].main === "Snow") {
        weatherIcon.src = "../images/snow.png";
        weatherIconText.style.display = "block";
        weatherIconText.innerText = "Snow";
      }

      document.querySelector(".weather").style.display = "block";
      document.querySelector(".error").style.display = "none";
    }
  }

  searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
  });
})();
