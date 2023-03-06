//Do not show API KEY on your JS File  4f93ffb2dd3bc59c9a2d5fc16c61b9a2

const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;
const loadTemperature = city => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(URL)
    .then (res => res.json())
    .then (data => displayTemperature(data))
}

const displayTemperature = data => {
    // const temperature = document.getElementById('temperature') ;
    // temperature.innerText = data.main.temp
    setInnerTextById ('temperature', data.main.temp) 
    setInnerTextById ('condition', data.weather[0].main)
    console.log(data.weather[0].main)
}

const setInnerTextById = (id, textt) =>{
    const temperature =document.getElementById(id);
    temperature.innerText = textt;

} 

document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    document.getElementById('city').innerText = city;

    loadTemperature(city);

})

loadTemperature('dhaka')

