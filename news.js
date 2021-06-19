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
  "https://newsapi.org/v2/top-headlines?qInTitle=&to=&country=us&sortBy=popularity&pageSize=7&apiKey=b91fe63559b74f96bc465e1197eec3d3";

fetch(baseurl)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    displayArticleTitles(3, data.articles);
  });
