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
};

//let food = `${DOMSelectors.choice.value}`;
let food = "pancake";

fetch(url + food, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));
