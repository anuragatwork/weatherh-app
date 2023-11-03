document.addEventListener("DOMContentLoaded", function () {

const tempratureField = document.querySelector(".weather1");
const cityField = document.querySelector("#location");
const dateField = document.querySelector("#dateAndTime");
const imgField = document.getElementById("img");
const conditionField = document.querySelector("#condition");
const btn = document.querySelector("#btn");
const searchField = document.querySelector("#searchField");

async function fetchData(val) {
  const url = `https://api.weatherapi.com/v1/current.json?key=1d68da576171441f87264933230706&q=${val}`;
  const response = await fetch(url);
  let data = await response.json();
  const {
    current: { temp_c, condition: { text, icon } },
    location: { name, localtime }
  } = data;
  updateDom(temp_c, data.location.name, icon, text, localtime);
}

function updateDom(temp, city, icon, text, localtime) {
  tempratureField.innerText = `${temp}°`;
  cityField.innerText = city;
  imgField.src = `${icon}`;
  conditionField.innerText = text;
  let exactTime = localtime.split(" ");
  dateField.innerText = `${exactTime[0]}
  time: ${exactTime[1]}`;
}

btn.addEventListener("click", searchOnClick);

  function searchOnClick(event) {
    event.preventDefault(); // Prevent form submission behavior
    console.log("Button clicked");
    fetchData(searchField.value);
  }
   });
