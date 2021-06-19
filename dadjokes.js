const api = {
  BASE_URL: "https://dad-jokes.p.rapidapi.com/random/joke",
  key: "6885a632edmsh4e2733a9288e507p123e50jsn2be776baabda",
};

function sendApiRequest() {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": api.key,
      "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
    },
  };

  fetch(api.BASE_URL, options)
    .then(function (response) {
      return response.json();
    })
    .then(getData);
}

function getData(response) {
  document.querySelector(
    "#jokes-header"
  ).innerHTML = `A joke to annoy your friends with:`;
  document.querySelector("#setup").innerHTML = response.body[0].setup;
  document.querySelector("#punchline").innerHTML = response.body[0].punchline;
}

sendApiRequest();
