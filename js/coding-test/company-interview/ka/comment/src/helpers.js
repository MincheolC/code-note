function commentTemplate(comment) {
  const container = document.createElement('div');
  const author = document.createElement('p');
  const date = document.createElement('p');
  const content = document.createElement('p');

  author.textContent = comment.author;
  date.textContent = comment.id;
  content.textContent = comment.comment;

  author.className = 'author';

  container.appendChild(author);
  container.appendChild(date);
  container.appendChild(content);

  return container;
}

function buildCommentList(comments) {
  const container = document.createElement('div');
  comments.forEach(comment => container.appendChild(commentTemplate(comment)));

  return container;
}

function getCurrentPageNum() {
  return parseInt(sessionStorage.getItem('pageNum'), 10);
}

function setCurrentPageNum(num) {
  sessionStorage.setItem('pageNum', num);
}

module.exports = {
  buildCommentList,
  getCurrentPageNum,
  setCurrentPageNum,
};
