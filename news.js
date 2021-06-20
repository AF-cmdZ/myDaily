const api = {
  key: "2d4d1980d90bcd33eafeebc7a489e0ce",
};

function displayArticleTitles(numArticles, articlesArray) {
  for (let i = 0; i < numArticles; i++) {
    const headline = document.querySelector(`#headline-${i}`);
    headline.textContent = articlesArray[i].title;
    headline.href = articlesArray[i].url;
  }
}

const baseurl =
  "https://gnews.io/api/v4/top-headlines?&country=us&token=2d4d1980d90bcd33eafeebc7a489e0ce";

fetch(baseurl)
  .then((response) => response.json())
  .then((data) => {
    displayArticleTitles(10, data.articles);
  });
