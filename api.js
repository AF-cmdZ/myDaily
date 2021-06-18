const dogFacts =
  "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1";
const catFacts = "https://catfact.ninja/fact";

fetch(catFacts).then(function (response) {
  if (response.status === 200) {
    console.log("GOT");
  }

  console.log(response);
});

// BONUS
