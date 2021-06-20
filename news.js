const api = {
  key: "b91fe63559b74f96bc465e1197eec3d3git",
};

function displayArticleTitles(numArticles, articlesArray) {
  for (let i = 0; i < numArticles; i++) {
    const headline = document.querySelector(`#headline-${i}`);
    headline.textContent = articlesArray[i].title;
    headline.href = articlesArray[i].url;
  }
}

const baseurl =
  "https://newsapi.org/v2/top-headlines?qInTitle=&to=&country=us&sortBy=popularity&pageSize=20&apiKey=b91fe63559b74f96bc465e1197eec3d3";

fetch(baseurl)
  .then((response) => response.json())
  .then((data) => {
    displayArticleTitles(10, data.articles);
  });
