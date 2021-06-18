import { getCatFacts } from "./api.js";

getCatFacts().then((catFacts) => {
  console.log(catFacts.fact);
});
