import { fetchMovies, searchMovies } from './movies';

import { initSortable } from './plugins/initSortable';
import { initMarkdownIt } from './plugins/initMarkdownIt';
import { initSelect2 } from './plugins/initSelect2';

// 1. Select elements
const button = document.querySelector('#submit');

// Show a first movie list
fetchMovies("star wars");
initSortable();
initMarkdownIt();
initSelect2();

// 2. Listen to a click
button.addEventListener("click", searchMovies);
