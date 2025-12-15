import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./assets/Navbar";
import CityInputs from "./assets/CityInputs";
import WeatherCard from "./assets/WeatherCard";
import { useContext } from "react";
import WeatherContext from "./assets/WeatherContext";

export default function App() {
  const { originCity, currentCity } = useContext(WeatherContext);

  return (
    <Navbar />
    <div className="app-container">
      

      <Routes>
        <Route
          path="/"
          element={
                  <div className="page-content">
                  <CityInputs />

                  <WeatherCard
                    title="Origin City Weather"
                    cityName={originCity}
                  />

                  <WeatherCard
                    title="Current City Weather"
                    cityName={currentCity}
                  />
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
