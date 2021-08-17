let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let day = days[now.getDay()];
let dates = now.getDate();
let month = months[now.getMonth()];
let currentHours = now.getHours();
let currentMinutes = now.getMinutes();

function formatDate() {
  let currentDate = document.querySelector("#current-date");
  currentDate.innerHTML = `${day} ${dates} ${month}`;
}
formatDate();
function formatTime() {
  let currentTime = document.querySelector("#current-time");
  currentTime.innerHTML = `${currentHours}:${currentMinutes}`;
}
formatTime();
//search engine
function currentWeather(response) {
  console.log(response);
  document.querySelector("#current-city").innerHTML = response.data.name;
  document.querySelector("#current-temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#weather-description").innerHTML =
    response.data.weather[0].main;
}
function search(event) {
  let city = document.querySelector("#search-input").value;
  let apiKey = "cb36123dab7bf8504a41b8c9251aa2cb";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(currentWeather);
}
function searchSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input").value;
  search(city);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchSubmit);
