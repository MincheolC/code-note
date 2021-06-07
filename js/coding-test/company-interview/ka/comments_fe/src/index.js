let httpRequest;

function addComments() {
  const { response } = httpRequest;
  console.log(JSON.parse(response));
}

function request(method, url, body, callback) {
  httpRequest = new XMLHttpRequest();
  httpRequest.open(method, url);
  httpRequest.send();
  httpRequest.onload = callback;
}

function getComments() {
  request('GET', 'http://localhost:9999/comments', null, addComments);
}

getComments();
