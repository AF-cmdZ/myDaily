import { getCatFacts } from "./api.js";

if (moment().format("l") !== localStorage.getItem("Date")) {
  localStorage.setItem("Date", moment().format("l"));

  getCatFacts().then((catFacts) => {
    const cf = catFacts.fact;
    localStorage.setItem("fact", cf);
  });
}

document.getElementById("animal-subtitle").innerHTML =
  localStorage.getItem("fact");
