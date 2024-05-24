import React, { useEffect, useState } from 'react';
import { SITE_URL } from '../../Constants'; // Import SITE_URL directly
import { Grid } from '@mui/material'; // Import Grid directly

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        fetchWeatherData();
    }, []);

    const fetchWeatherData = () => {
        fetch(`${SITE_URL}/wp-json/an/general/getweather?lat=17.445049&lon=78.448502`)
            .then(response => response.json())
            .then(data => {
                setWeatherData(data);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    };

    return (
        <div className="weather-container">
            {weatherData && (
                <Grid container spacing={2}>
                    <Grid item xs={6}></Grid>
                    <Grid item xs={1}>
                        {weatherData.data.weather && weatherData.data.weather[0] && (
                            <img
                                src={`http://openweathermap.org/img/wn/${weatherData.data.weather[0].icon}.png`}
                                alt="Weather Icon"
                                className="weather-icon"
                            />
                        )}
                    </Grid>
                    <Grid item xs={2}>
                        {weatherData.data.name}
                    </Grid>
                    <Grid item xs={1}>
                        {weatherData.data.main.temp}&deg;C
                    </Grid>
                </Grid>
            )}
        </div>
    );
}

export default Weather;
