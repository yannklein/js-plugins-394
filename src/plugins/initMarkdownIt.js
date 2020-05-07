// ES5 version of import
// var MarkdownIt = require('markdown-it');

import MarkdownIt from 'markdown-it';

const initMarkdownIt = () => {
  const editor = document.querySelector('#editor');
  const preview = document.querySelector('#preview');

  editor.addEventListener("keyup", (event) => {
    const md = new MarkdownIt();
    preview.innerHTML = md.render(event.currentTarget.value);
  });
};

export { initMarkdownIt };
