var bgColor = document.querySelector(":root");

changeBgColor();

function fetchQuote() {
  fetch("https://dummyjson.com/quotes/random")
    .then((response) => response.json())
    .then((data) => {
      const text = data.quote;
      const author = data.author;
      document.getElementById("quote").innerHTML = text;
      document.getElementById("author").innerHTML = "~ " + author;
      changeBgColor();
    });
}

fetchQuote();

document
  .getElementById("new-quote")
  .addEventListener("click", function () {
    fetchQuote();
  });

document
  .getElementById("tweet-quote")
  .addEventListener("click", function () {
    window.open(
      "https://twitter.com/intent/tweet?text=" + document.getElementById("quote").innerText
    );
  });



function changeBgColor() {
  bgColor.style.setProperty("--bg-color", "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")");
}