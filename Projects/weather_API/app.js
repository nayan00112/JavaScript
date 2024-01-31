const api_key = "&appid=1b93a15a344230684cf3d643a93d2e6f";
const Base_URL = "https://api.openweathermap.org/data/2.5/weather?q=";

let imgBTN = document.querySelector(".search img");
let celciShow = document.querySelector(".celci");
let cityShow = document.querySelector(".city");
let HumidityShow = document.querySelector(".humidity p");
let SpeedShow = document.querySelector(".wind p");
let WeatherIcon = document.querySelector(".weather-icon");

imgBTN.addEventListener("click", async () => {
    let search = document.querySelector(".search input").value;
    if (search === "") {
        celciShow.innerText = "Provide city first!"
        cityShow.innerText = "";
        HumidityShow.innerText = "";
        SpeedShow.innerText = "";
    }
    let URL = `${Base_URL}${search}${api_key}`;
    console.log(URL);
    let response1 = await fetch(URL);
    let data = await response1.json();
    console.log(data);

    if(data.cod === "404"){
        celciShow.innerText = "City Not Found";
        cityShow.innerText = "";
        HumidityShow.innerText = "";
        SpeedShow.innerText = "";safsf
    }

    celciShow.innerText = Math.round((data.main.temp) - 273.15).toFixed(2) + "°C";
    cityShow.innerText = `${search}`;
    if(data.weather[0].main === "Clouds"){
        WeatherIcon.src = "images/clouds.png";
    }else if(data.weather[0].main === "Rain"){
        WeatherIcon.src = "images/rain.png";
    }else if(data.weather[0].main === "Clear"){
        WeatherIcon.src = "images/clear.png";
    }else if(data.weather[0].main === "Drizzle"){
        WeatherIcon.src = "images/drizzle.png";
    }else if(data.weather[0].main === "Mist"){
        WeatherIcon.src = "images/mist.png";
    }else if(data.weather[0].main === "Snow"){
        WeatherIcon.src = "images/snow.png";
    }else{
        WeatherIcon.src = "";
    }
    HumidityShow.innerText = data.main.humidity + "% \n Humidity";
    SpeedShow.innerText = data.wind.speed + "Km/h \n Wind Speed";

});
