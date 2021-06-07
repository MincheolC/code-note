require('./style.css');

/* eslint-disable no-undef */
const { buildCommentList, getCurrentPageNum, setCurrentPageNum, isValidAuthor, isValidComment } = require('./helpers');

let httpRequest;

function handleComments(currentPageNum) {
  const response = JSON.parse(httpRequest.response) || [];

  if (response.length === 0) {
    setCurrentPageNum(currentPageNum);
    return;
  }

  const commentsDiv = document.getElementById('comments');
  const commentList = buildCommentList(response);

  if (commentsDiv.childElementCount) commentsDiv.removeChild(commentsDiv.firstChild);
  commentsDiv.append(commentList);
}

function request(method, url, body, callback) {
  httpRequest = new XMLHttpRequest();
  httpRequest.open(method, url);

  if (method === 'POST') {
    httpRequest.setRequestHeader('Content-Type', 'application/json');
  }

  httpRequest.send(body);
  httpRequest.onload = callback;
}

function getComments() {
  request('GET', 'http://localhost:9999/api/comments/', null, () => handleComments(1));
}

function getCommentsPage(pageNum, prevNum) {
  request('GET', `http://localhost:9999/api/comments/page/${pageNum}`, null, () => handleComments(prevNum));
}

function postComment(author, comment) {
  const body = JSON.stringify({ author, comment });
  request('POST', 'http://localhost:9999/api/comments', body, () => getComments(1, 1));
}

function onPrevPage() {
  const currentPageNum = getCurrentPageNum();
  const prevPageNum = currentPageNum > 1 ? currentPageNum - 1 : 1;

  setCurrentPageNum(prevPageNum);
  getCommentsPage(prevPageNum, currentPageNum);
}

function onNextPage() {
  const currentPageNum = getCurrentPageNum();
  const nextPageNum = currentPageNum + 1;

  setCurrentPageNum(nextPageNum);
  getCommentsPage(nextPageNum, currentPageNum);
}

function onAuthorChange() {
  const author = document.getElementById('author');
  if (!isValidAuthor(author.value)) {
    author.nextSibling.style.display = 'block';
  } else {
    author.nextSibling.style.display = 'none';
  }
}

function onCommentChange() {
  const comment = document.getElementById('comment');
  if (!isValidComment(comment.value)) {
    comment.nextSibling.style.display = 'block';
  } else {
    comment.nextSibling.style.display = 'none';
  }
}

function onSubmit() {
  const author = document.getElementById('author');
  const comment = document.getElementById('comment');

  if (isValidAuthor(author.value) && isValidComment(comment.value)) {
    postComment(author.value, comment.value);
    author.value = '';
    comment.value = '';
    comment.nextSibling.style.display = 'none';
    author.nextSibling.style.display = 'none';
  } else {
    if (!isValidAuthor(author.value)) {
      author.nextSibling.style.display = 'block';
    }
    if (!isValidComment(comment.value)) {
      comment.nextSibling.style.display = 'block';
    }
  }
}

function init() {
  getComments();
  sessionStorage.setItem('pageNum', 1);

  document.getElementById('prevBtn').addEventListener('click', onPrevPage);
  document.getElementById('nextBtn').addEventListener('click', onNextPage);
  document.getElementById('submitBtn').addEventListener('click', onSubmit);
  document.getElementById('author').addEventListener('change', onAuthorChange);
  document.getElementById('comment').addEventListener('change', onCommentChange);
}

init();
