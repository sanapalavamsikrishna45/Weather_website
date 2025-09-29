
const apiKey = "";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathetIcon = document.querySelector(".weather_icon");
async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();
        // console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";


        if (data.weather[0].main == "Clouds") {
            weathetIcon.src = "images/clouds.png"
        }
        else if (data.weather[0].main == "Clear") {
            weathetIcon.src = "images/clear.png"
        }
        else if (data.weather[0].main == "Rain") {
            weathetIcon.src = "images/rain.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            weathetIcon.src = "images/drizzle.png"
        }
        else if (data.weather[0].main == "Mist") {
            weathetIcon.src = "images/mist.png"
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }

}

searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value)
})
checkweather();
