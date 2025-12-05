import { useState, useEffect } from "react";

export default function WeatherCard({ cityName, title }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const url = cityName
    ? `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        cityName
      )}&appid=${apiKey}&units=metric`
    : null;

  useEffect(() => {
    if (!cityName || cityName.trim() === "") {
      setWeather(null);
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("City not found");
        }
        return response.json();
      })
      .then((weatherData) => {
        setWeather(weatherData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setWeather(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);


  if (loading) {
    return (
      <div className="weather-card loading">
        {title} — Loading weather...
      </div>
    );
  }


  if (error) {
    return (
      <div className="weather-card error">
        {title} — Error: {error}
      </div>
    );
  }


  if (!weather) {
    return (
      <div className="weather-card no-data">
        {title} — No data available.
      </div>
    );
  }

  const Temperature = Math.round(weather.main.temp);
  const WeatherDescription = weather.weather[0].description;
  const Humidity = weather.main.humidity;
  const WindSpeed = weather.wind.speed;
  const cityDisplay = `${weather.name}, ${weather.sys.country}`;

  return (
    <div className="weather-card">
      <h2>{title}</h2>
      <h3>{cityDisplay}</h3>

      <p>
        <span className="temp-value">{Temperature}</span>
        <span>°C</span>
      </p>

      <p>{WeatherDescription}</p>

      <div className="detail-item">
        <span className="label">Humidity</span>
        <span className="value">{Humidity}%</span>
      </div>

      <div className="detail-item">
        <span className="label">Wind</span>
        <span className="value">{WindSpeed} m/s</span>
      </div>
    </div>
  );
}
