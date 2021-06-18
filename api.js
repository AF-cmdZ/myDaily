const dogFacts =
  "https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1";
const catFacts = "https://catfact.ninja/fact";

fetch(catFacts)
  .then(function (response) {
    if (response.status === 200) {
      console.log("GOT");
    } else {
      console.log("NOTOGT");
    }
    return response.json();
  })
  .then(function (data) {
    console.log(data.fact);
    const df = data.fact;
    document.getElementById("ff").innerHTML = df;
  });

fetch(dogFacts, { mode: "no-cors" }).then(function (response) {
  if (response.status === 200) {
    console.log("GOT");
  } else {
    console.log("NOTOGT");
  }
});

console.log("END");

// BONUS: Custom "API"
