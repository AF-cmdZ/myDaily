const api = {
  key: "b91fe63559b74f96bc465e1197eec3d3git",
};

const baseurl =
  "https://newsapi.org/v2/top-headlines?qInTitle=&to=&country=us&sortBy=popularity&pageSize=7&apiKey=b91fe63559b74f96bc465e1197eec3d3";

fetch(baseurl)
  .then((respose) => respose.json())
  .then((data) => {
    console.log(data);
  });

// Example from class
// const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

// export default {
//   getTodos() {
//     const todos = fetch(BASE_URL)
//       .then((res) => res.json())
//       .then((todos) => todos);
//   },
// };
// End Example from class
