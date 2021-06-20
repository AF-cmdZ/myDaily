const api = {
  BASE_URL:
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit&type=twopart",
};

function sendApiRequest() {
  fetch(api.BASE_URL)
    .then(function (response) {
      return response.json();
    })
    .then(getData);
}

function getData(response) {
  document.querySelector(
    "#jokes-header"
  ).innerHTML = `A joke to annoy your friends:`;
  document.querySelector("#setup").innerHTML = response.setup;
  document.querySelector("#punchline").innerHTML = response.delivery;
}

sendApiRequest();
