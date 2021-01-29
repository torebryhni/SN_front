import "./styles.css";

const result = document.getElementById("resultat");
const numBlipp = document.getElementById("blipp");
const numBlopp = document.getElementById("blopp");

window.cleanup = function () {
  result.innerText = "";
  numBlipp.value = 3;
  numBlopp.value = 5;
};

function httpGetRequest(url, callback) {
  const http = new XMLHttpRequest();
  http.open("GET", url);
  http.onload = function () {
    callback(null, http.response);
  };
  http.onerror = function () {
    callback(http.response);
  };
  http.send();
}

function httpGetRequestExample() {
  const backend = "https://rgpz1.sse.sse.codesandbox.io/";
  httpGetRequest(backend, function (err, data) {
    if (err) {
      throw err;
    }

    console.log(data);
  });
}

window.allAtOnce = function () {
  // result.innerText = "50 på en gang";

  const backend = "https://rgpz1.sse.codesandbox.io/api/numbers";
  httpGetRequest(backend, function (err, data) {
    if (err) {
      throw err;
    }

    result.innerText = data;
    console.log(data);
  });
};

window.oneByOne = function () {
  result.innerText = "En av gangen";
  // todo - få egen funksjon til å fungere.
  const backend = "https://rgpz1.sse.codesandbox.io/api/fizz";
  httpGetRequest(backend, function (err, data) {
    if (err) {
      throw err;
    }

    result.innerText = data;
    console.log(data);
  });
};
