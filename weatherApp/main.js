const apiKey = '0840e0f35b6c44a1e3878e25bf64b2f3' ;
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&&appid=' ;


const searchBox = document.querySelector('.search input')
const btn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather img');

const checkWeather = async (cityName) => {
    let url = apiUrl + `${apiKey}&q=${cityName}` ;
    let response = await fetch(url).then((r) => { 
        if(r.status === 404) {
            document.querySelector('.error').style.display = "block";
            document.querySelector('.weather').style.display = 'none';
            return ;
        }else {
            document.querySelector('.error').style.display = "none";
        }
        return r.json();
    })
    response && updateWeather(response) ;
    console.log('props data', response);
    return response ;
}

const updateWeather = (data) => {
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temperature').innerHTML = `${Math.round(data.main.temp)} °C` ;
    document.querySelector('.humidity').innerHTML = data.main.humidity + ' %' ;
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h' ;

    if(data.weather[0].main.toLowerCase() == 'clear') {
        weatherIcon.src = './images/clear.png'
    }else if(data.weather[0].main.toLowerCase() == 'snow') {
        weatherIcon.src = './images/snow.png'
    }else if(data.weather[0].main.toLowerCase() == 'clouds') {
        weatherIcon.src = './images/clouds.png'
    }else if(data.weather[0].main.toLowerCase() == 'drizzle') {
        weatherIcon.src = './images/drizzle.png'
    }else if(data.weather[0].main.toLowerCase() == 'mist') {
        weatherIcon.src = './images/mist.png'
    }else if(data.weather[0].main.toLowerCase() == 'rain') {
        weatherIcon.src = './images/rain.png'
    }

    document.querySelector('.weather').style.display = 'block';
}


btn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})


