const input = document.querySelector('#keyword');
const list = document.querySelector('#results');

const displayMovies = (movies) => {
  // 3. Change the DOM
  list.innerHTML = "";
  movies.forEach((movie) => {
    list.insertAdjacentHTML(
      "beforeend",
      `<li class="list-inline-item"><img width="100px" src="${movie.Poster}"></li>`
    );
  });
};

const fetchMovies = (keyword) => {
  const url = `http://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      displayMovies(data.Search);
    });
};

const searchMovies = (event) => {
  event.preventDefault();
  // 2.5. Fetch the API
  fetchMovies(input.value);
};

export { fetchMovies, searchMovies };
