import React, {useState} from 'react';
import './Forecast.css';

const Forecast = () => {
    let [responseObj, setResponseObj] = useState(null);

    function getForecast() {
        // weather data
        const apiKey = "d4e894f20c01413fbfececd42de24a6a"
        const city = "Seattle"
        const units = "imperial"
        const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`
        fetch(path)
        .then(response => response.json())
        .then(json => setResponseObj(json))
    }
    if (responseObj===null) {
        return(
            <div>
                <h2>Current Weather Conditions</h2>
                <button onClick={getForecast}>Get Forecast</button>
            </div>
        )
    }
    return (
         <div>
            <h2>Current Weather Conditions</h2>
            <h3>In Seattle</h3>
            <div class="display-result">
                {JSON.stringify(responseObj.main.temp)}
                <p>&#176;F</p>
            </div>
            <button onClick={getForecast}>Get Forecast</button>
        </div>
    )
}
export default Forecast;