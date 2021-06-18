const api = {
  BASE_URL: "https://api.nasa.gov/planetary/apod?count",
  key: "h2Hekw4x45XX7RtdMIVbLGHgkEwdi7wGF6BuSgwe",
};

function sendApiRequest(event) {
  fetch(`${api.BASE_URL}&api_key=${api.key}`)
    .then(function (response) {
      return response.json();
    })
    .then(getData);
}

function getData(response) {
  console.log(response);
  document.querySelector("#");
  document.querySelector("#nasa-img").src = `${response.url}`;
  document.querySelector("#nasa-img-text").innerHTML = response.explanation;
}

sendApiRequest();
