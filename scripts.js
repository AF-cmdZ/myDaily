import { getCatFacts } from "./api.js";

getCatFacts().then((catFacts) => {
  console.log(catFacts.fact);
  const cf = catFacts.fact;
  document.getElementById("animal-subtitle").innerHTML = cf;
});
