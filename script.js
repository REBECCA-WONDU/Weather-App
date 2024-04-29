const apiKey = "8d013695bf0ddd914a7428de6bc28a31";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
// const weatherIcon = document.querySelector(".weather-icon");
const cardBackground = document.querySelector(".card");
const bodyGif = document.body;

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      bodyGif.style.backgroundImage = "url('images/cloud.gif')";
      bodyGif.style.backgroundSize = "cover"; // Adjust this according to your preference
      bodyGif.style.backgroundPosition = "center";
    } else if (data.weather[0].main == "Clear") {
      bodyGif.style.backgroundImage = "url('images/clear.gif')";
      bodyGif.style.backgroundSize = "cover"; // Adjust this according to your preference
      bodyGif.style.backgroundPosition = "center";
    } else if (data.weather[0].main == "Rain") {
      bodyGif.style.backgroundImage = "url('images/rain.gif')";
      bodyGif.style.backgroundSize = "cover"; // Adjust this according to your preference
      bodyGif.style.backgroundPosition = "center";
    } else if (data.weather[0].main == "Drizzle") {
      bodyGif.style.backgroundImage = "url('images/drizzle.gif')";
      bodyGif.style.backgroundSize = "cover"; // Adjust this according to your preference
      bodyGif.style.backgroundPosition = "center";
    } else if (data.weather[0].main == "Mist") {
      bodyGif.style.backgroundImage = "url('images/mist.gif')";
      bodyGif.style.backgroundSize = "cover"; // Adjust this according to your preference
      bodyGif.style.backgroundPosition = "center";
    }

    console.log(data.weather[0]);
    if (data.weather[0].main == "Clouds")
      document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
  }
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
