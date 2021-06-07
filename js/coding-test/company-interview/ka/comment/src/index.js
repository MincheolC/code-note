require('./style.css');

/* eslint-disable no-undef */
const { buildCommentList, getCurrentPageNum, setCurrentPageNum } = require('./helpers');

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
  httpRequest.send();
  httpRequest.onload = callback;
}

function getComments(pageNum, prevNum) {
  request('GET', `http://localhost:9999/api/comments/page/${pageNum}`, null, () => handleComments(prevNum));
}

function onPrevPage() {
  const currentPageNum = getCurrentPageNum();
  const prevPageNum = currentPageNum > 1 ? currentPageNum - 1 : 1;

  setCurrentPageNum(prevPageNum);
  getComments(prevPageNum, currentPageNum);
}

function onNextPage() {
  const currentPageNum = getCurrentPageNum();
  const nextPageNum = currentPageNum + 1;

  setCurrentPageNum(nextPageNum);
  getComments(nextPageNum, currentPageNum);
}

function init() {
  const initialPageNum = 1;
  getComments(initialPageNum);
  sessionStorage.setItem('pageNum', initialPageNum);

  document.getElementById('prevBtn').addEventListener('click', onPrevPage);
  document.getElementById('nextBtn').addEventListener('click', onNextPage);
}

init();
