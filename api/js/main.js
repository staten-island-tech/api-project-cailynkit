const URL = "https://aztro.sameerkumar.website";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getData(URL);

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
}
