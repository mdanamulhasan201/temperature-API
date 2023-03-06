//Do not show API KEY on your JS File  4f93ffb2dd3bc59c9a2d5fc16c61b9a2

const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;
const loadTemperature = city => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(URL)
    .then (res => res.json())
    .then (data => displayTemperature(data))
}

const displayTemperature = data => {
    const temperature = document.getElementById('temperature') ;
    temperature.innerText = data.main.temp
    console.log(data.main)
}

loadTemperature('dhaka')

