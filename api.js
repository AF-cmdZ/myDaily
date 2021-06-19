const catFacts = "https://catfact.ninja/fact";

export const getCatFacts = () => {
  return fetch(catFacts)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data;
    });
};
