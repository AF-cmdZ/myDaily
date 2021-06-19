import { getCatFacts } from "./api.js";

getCatFacts().then((catFacts) => {
  const cf = catFacts.fact;
  document.getElementById("animal-subtitle").innerHTML = cf;
});
