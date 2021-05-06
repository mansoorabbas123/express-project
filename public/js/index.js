const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
let cityMsg = document.getElementById('cityMsg');
let temp = document.getElementById('temp');
let tempStatus = document.getElementById('temp-status');
let showHide = document.querySelector('.middle-layer');

const getInfo = async (e) => {
    e.preventDefault();
    const city = cityName.value;
    if (city === "") {
        cityMsg.innerText = "plz enter your city name first"

    }
    else {

        try {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a19358ea187a8bfc9c5524cc4489a585`;
            const response = await fetch(url);
            const data = await response.json();
            const dataArr = [data];

            cityMsg.innerText = `${dataArr[0].name}, ${dataArr[0].sys.country}`;
            showHide.classList.remove('data-hide');
            temp.firstChild.innerText = dataArr[0].main.temp;
            const tempMood = dataArr[0].weather[0].main;
            console.log(tempMood)
            if (tempMood.toLowerCase() === "haze") {
                // console.log("haze")
                tempStatus.innerHTML = `<i class="fas fa-smog"></i>`;
            }
            else if (tempMood.toLowerCase() === "clear") {
                tempStatus.innerHTML = `<i class="fas fa-sun"></i>`;
            }
            else if (tempMood.toLowerCase() === "clouds") {
                tempStatus.innerHTML = `<i class="fas fa-cloud"></i>`;
            }
            else if (tempMood.toLowerCase() === "rain") {
                tempStatus.innerHTML = `<i class="fas fa-cloud-showers-heavy"></i>`;
            } else {
                tempStatus.innerHTML = `<i class="fas fa-sun"></i>`;
            }

        } catch {
            cityMsg.innerText = "plz enter correct city name"
            showHide.classList.add('data-hide');
        }

    }

}

submitBtn.addEventListener('click', getInfo)