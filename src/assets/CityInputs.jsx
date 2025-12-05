import {useContext} from "react";
import WeatherContext from "./WeatherContext";

export default function CityInputs(){
    const {originCity, setOriginCity, currentCity, setCurrentCity} = 
    useContext(WeatherContext);

    return (
        <div className ="city-inputs">
            <div className = "input-group">
                <label>Origin City</label>
                <input type = "text" 
                    value={originCity}
                    onChange={e => setOriginCity(e.target.value)}
                    placeholder = "Enter origin city"
                />
                <div className = "current-value">Current: {originCity}</div>
            </div>
            <div className =" input-group">
                <label>Current City</label>
                <input type ="text"
                value ={currentCity}
                onChange={e => setCurrentCity(e.target.value)}
                placeholder = "Enter current city"
                />
                <div className = "current-value">Current: {currentCity}</div>
            </div>
        </div>
    );
}