import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./assets/Navbar";
import CityInput from "./assets/CityInput";
import WeatherCard from "./assets/WeatherCard";
import { useContext } from "react";
import WeatherContext from "./assets/WeatherContext";

export default function App() {
  const { originCity, setOriginCity, currentCity, setCurrentCity } = useContext(WeatherContext);

  return (
    <div className="app-container">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
                  <div className="page-content">
                    <div className="city-column">
                      <CityInput
                        label="Origin City"
                        value={originCity}
                        onChange={setOriginCity}
                        placeholder="Enter origin city"
                      />
                      <WeatherCard
                        title="Origin City Weather"
                        cityName={originCity}
                      />
                    </div>
                    <div className="city-column">
                      <CityInput
                        label="Current City"
                        value={currentCity}
                        onChange={setCurrentCity}
                        placeholder="Enter current city"
                      />
                      <WeatherCard
                        title="Current City Weather"
                        cityName={currentCity}
                      />
                    </div>
                  </div>
          }
        />

        <Route
          path="/about"
          element={
               <div className="about-page">
                  <h2>About This Project</h2>
                <p>
                  This weather application shows realtime weather information
                  using the OpenWeather API.
                </p>
            <br></br>

                <h3>Group Members</h3>
                <ul>
                  <li>Lovedeep</li>
                  <li>Clay</li>
                  <li>Ethan</li>
                </ul>
              </div>
          }
        />
      </Routes>
    </div>
  );
}
