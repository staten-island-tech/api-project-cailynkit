const url =
  "https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "cd0ca1e34bmshf6261691f117b89p11b840jsndf80fbb9b25a",
    "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
  },
};

const DOMSelectors = {
  choice: document.getElementById("choice"),
  enter: document.getElementById("enter"),
  clear: document.getElementById("clear"),
  div: document.getElementById("div"),
};

DOMSelectors.enter.addEventListener("click", function () {
  let food = DOMSelectors.choice.value;
  fetch(url + food, options)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      json.hints.forEach((number) =>
        DOMSelectors.div.insertAdjacentHTML(
          "beforeend",
          `<p class="innerHTML">${number.food.label}</p>`
        )
      );
    })
    .catch((err) => console.error("error:" + err));
});

DOMSelectors.clear.addEventListener("click", function () {
  let innerHTML = document.querySelectorAll(".innerHTML");
  innerHTML.remove();
});

/* DOMSelectors.clear.addEventListener("click", function () {
  DOMSelectors.song.value = "";
  DOMSelectors.artist.value = "";
  let innerHTML = document.getElementById("innerHTML");
  innerHTML.remove();
  let innerHTMLButton = document.getElementById("innerHTMLButton");
  innerHTMLButton.remove();
}); */
