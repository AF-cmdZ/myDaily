const api = {
  BASE_URL: "https://api.nasa.gov/planetary/apod?",
  key: "h2Hekw4x45XX7RtdMIVbLGHgkEwdi7wGF6BuSgwe",
};

function sendApiRequest() {
  fetch(`${api.BASE_URL}&api_key=${api.key}&count=1`)
    .then(function (response) {
      return response.json();
    })
    .then(getData);
}

function getData(response) {
  document.querySelector("#nasa-section-header").innerHTML = `From the Cosmos`;
  document.querySelector("#nasa-img-title").innerHTML = response[0].title;
  document.querySelector("#nasa-img-date").innerHTML = response[0].date;
  document.querySelector("#nasa-img").src = `${response[0].url}`;

  if (response[0].copyright !== undefined) {
    document.querySelector(
      "#nasa-img-copyright"
    ).innerHTML = `Copyright: ${response[0].copyright}`;
  }

  document.querySelector("#nasa-img-text").innerHTML = response[0].explanation;
}

sendApiRequest();
