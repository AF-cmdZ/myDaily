const inputEl = document.getElementById("city-input");
const searchEl = document.getElementById("search-button");
const nameEl = document.getElementById("city-name");
const currentPicEl = document.getElementById("current-pic");
const currentTempEl = document.getElementById("temperature");
const currentHumidityEl = document.getElementById("humidity");
const currentWindEl = document.getElementById("wind-speed");
const currentUVEl = document.getElementById("UV-index");
const historyEl = document.getElementById("history");

const searchHistory = JSON.parse(localStorage.getItem("search")) || [];

const APIKey = "c2b57ce6c568bc5d04209e2700a7de85";
//  When search button is clicked, read the city name typed by the user

// Search Function
// execute getWeather function then add it to the search history
// function searchCity() {
//   const cityName = inputEl.val();
//   getWeather(cityName);
//   searchHistory.unshift(cityName);
//   searchHistory = searchHistory.slice(0, 5);
//   localStorage.setItem("search", JSON.stringify(searchHistory));
//   generateHistory();
// }

// Fetch the API
function getWeather(cityName) {
  // key c2b57ce6c568bc5d04209e2700a7de85
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&units=imperial&appid=" +
    APIKey;
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Return the result on the DOM

      $(".city-name").html(data.name + " (" + moment().format("l") + ")");

      const weatherPic = data.weather[0].icon;
      currentPicEl.setAttribute(
        "src",
        "https://openweathermap.org/img/wn/" + weatherPic + "@2x.png"
      );
      currentPicEl.setAttribute("alt", data.weather[0].description);

      currentTempEl.innerHTML = data.main.temp + "°F";

      currentWindEl.innerHTML = data.wind.speed + " MPH";

      currentHumidityEl.innerHTML = data.main.humidity + "%";

      const lat = data.coord.lat;
      const lon = data.coord.lon;
      // Get UV index function
      function getUV(lon, lat) {
        const UVurl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APIKey}`;

        fetch(UVurl)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            // Return the result on the DOM

            const UVIndex = document.createElement("span");
            UVIndex.setAttribute("class", "tag");
            UVIndex.innerHTML = data.current.uvi;
            // uvi.data[0].value
            // currentUVEl.innerHTML = "";
            currentUVEl.append(UVIndex);

            // Attribute the background color depending on the UV index
            if (data.current.uvi >= 0 && data.current.uvi < 3) {
              UVIndex.addClass("is-success");
            } else if (data.current.uvi <= 6) {
              UVIndex.addClass("is-warning");
            } else if (data.current.uvi <= 6) {
              UVIndex.addClass("is-warning-dark");
            } else if (data.current.uvi <= 8) {
              UVIndex.addClass("is-danger");
            } else {
              UVIndex.addClass("is-link");
            }
          });
      }

      // call UV index function
      getUV(lon, lat);
    });

  // Forecast for the next 5 days
  const ForecastUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    cityName +
    "&units=imperial&appid=" +
    APIKey;

  fetch(ForecastUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      $(".forecast").html("");
      // Return the result on the DOM
      for (let i = 0; i < 5; i++) {
        const name = $("<h5>");
        const date = moment()
          .add(i + 1, "days")
          .format("l");
        name.html(date);
        name.addClass("has-text-weight-bold");

        const icon = $("<img>");
        icon
          .attr(
            "src",
            "https://openweathermap.org/img/wn/" +
              data.list[i].weather[0].icon +
              "@2x.png"
          )
          .attr("alt", data.list[i].weather[0].description);
        icon.addClass("p-0 m-0");

        const temp = $("<p>");
        temp.html("Temp.: " + data.list[i].main.temp + "°F");

        const humidity = $("<p>");
        humidity.addClass("mb-3");
        humidity.html("Humidity: " + data.list[i].main.humidity + "%");

        $(".forecast").append(name, icon, temp, humidity);
      }
    });
}

function renderSearchHistory() {
  nameEl.innerHTML = "";
  const historyItem = document.createElement("p");
  historyItem.setAttribute("value", searchHistory);
  historyEl.append(historyItem);
}

renderSearchHistory();
if (searchHistory.length > 0) {
  getWeather(searchHistory[searchHistory.length - 1]);
}
//  When page loads, automatically generate current conditions and 5-day forecast for the last city the user searched for

searchEl.addEventListener("click", function () {
  const searchTerm = inputEl.value;
  getWeather(searchTerm);
  searchHistory.push(searchTerm);
  localStorage.setItem("search", JSON.stringify(searchHistory));
  renderSearchHistory();
});
